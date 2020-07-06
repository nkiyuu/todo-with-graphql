package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/nkiyuu/todo-app-with-graphql/api/graph/generated"
	"github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
)

func (r *mutationResolver) AddTodo(ctx context.Context, title string) (*model.Todo, error) {
	todo := &model.Todo{
		ID:     "hoge",
		Title:  title,
		IsDone: false,
	}

	r.todos = append(r.todos, todo)
	return todo, nil
}

func (r *mutationResolver) UpdateTodo(ctx context.Context, title *string, isDone *bool) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) DeleteTodo(ctx context.Context, id *string) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Todo(ctx context.Context, id string) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	return r.todos, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
