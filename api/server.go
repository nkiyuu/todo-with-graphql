package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
	"github.com/nkiyuu/todo-app-with-graphql/api/graph/generated"
	"github.com/nkiyuu/todo-app-with-graphql/api/resolver"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	r := mux.NewRouter()
	graphqlHandler := handler.New(generated.NewExecutableSchema(generated.Config{Resolvers: &resolver.Resolver{}}))
	graphqlHandler.AddTransport(transport.POST{})

	r.HandleFunc("/", playground.Handler("GraphQL playground", "/graphql"))
	r.Handle("/graphql", graphqlHandler)
	http.Handle("/", r)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
