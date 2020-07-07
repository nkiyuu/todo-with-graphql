package resolver

import (
	"github.com/nkiyuu/todo-app-with-graphql/api/graph/generated"
	"github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
	"github.com/nkiyuu/todo-app-with-graphql/api/resolver/mutation"
	"github.com/nkiyuu/todo-app-with-graphql/api/resolver/query"
)

type Resolver struct {
	todos []*model.Todo
}

func (r *Resolver) Mutation() generated.MutationResolver {
	return &mutation.Resolver{}
}

func (r *Resolver) Query() generated.QueryResolver {
	return &query.Resolver{}
}
