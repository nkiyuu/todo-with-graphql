package query

import (
	"context"
	"fmt"
	"log"

	"github.com/nkiyuu/todo-app-with-graphql/api/db"
	gm "github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
	"github.com/nkiyuu/todo-app-with-graphql/api/model"
)

// Resolver    **************************
type Resolver struct{}

// Todo ****************
func (r *Resolver) Todo(ctx context.Context, id string) (*gm.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

// Todos ****************
func (r *Resolver) Todos(ctx context.Context) ([]*gm.Todo, error) {
	db := db.DB()
	todos := []model.Todo{}
	if err := db.Select(&todos, "SELECT * FROM todo"); err != nil {
		log.Printf("Select exec err: %v", err)
	}

	var res []*gm.Todo
	for _, todo := range todos {
		res = append(res, todo.APIModel())
	}

	return res, nil
}
