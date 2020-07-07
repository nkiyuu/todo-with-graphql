package mutation

import (
	"context"
	"fmt"

	"github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
)

// Resolver ****************************
type Resolver struct{}

// AddTodo **************************
func (r *Resolver) AddTodo(ctx context.Context, title string) (*model.Todo, error) {
	todo := &model.Todo{
		ID:     "hoge",
		Title:  title,
		IsDone: false,
	}

	return todo, nil
}

// UpdateTodo ****************
func (r *Resolver) UpdateTodo(ctx context.Context, title *string, isDone *bool) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

// DeleteTodo ****************
func (r *Resolver) DeleteTodo(ctx context.Context, id *string) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}
