package query

import (
	"context"

	"github.com/nkiyuu/todo-app-with-graphql/api/db"
	gm "github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
	"github.com/nkiyuu/todo-app-with-graphql/api/model"
)

// Resolver    **************************
type Resolver struct{}

// Todo ****************
func (r *Resolver) Todo(ctx context.Context, id string) (*gm.Todo, error) {
	db := db.DB()
	var todo model.Todo
	if err := db.Get(&todo, "SELECT * FROM todo WHERE id = ?", id); err != nil {
		return nil, err
	}

	return todo.APIModel(), nil
}

// Todos ****************
func (r *Resolver) Todos(ctx context.Context) ([]*gm.Todo, error) {
	db := db.DB()
	todos := []model.Todo{}
	if err := db.Select(&todos, "SELECT * FROM todo"); err != nil {
		return []*gm.Todo{}, err
	}

	var res []*gm.Todo
	for _, todo := range todos {
		res = append(res, todo.APIModel())
	}

	return res, nil
}
