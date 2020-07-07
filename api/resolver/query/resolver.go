package query

import (
	"context"
	"fmt"

	"github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
)

// Resolver    **************************
type Resolver struct{}

// Todo ****************
func (r *Resolver) Todo(ctx context.Context, id string) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

// Todos ****************
func (r *Resolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	todos := []*model.Todo{
		{
			ID:     "hoge",
			Title:  "Todo 1",
			IsDone: false,
		},
		{
			ID:     "fuga",
			Title:  "Todo 2",
			IsDone: false,
		},
	}
	return todos, nil
}
