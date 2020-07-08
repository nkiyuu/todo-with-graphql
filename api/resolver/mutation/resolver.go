package mutation

import (
	"context"
	"fmt"

	"github.com/nkiyuu/todo-app-with-graphql/api/db"
	gm "github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
	"github.com/nkiyuu/todo-app-with-graphql/api/model"
)

// Resolver ****************************
type Resolver struct{}

// AddTodo **************************
func (r *Resolver) AddTodo(ctx context.Context, title string) (*gm.Todo, error) {
	db := db.DB()
	result, err := db.NamedExec("INSERT INTO todo (title) VALUES (:title)", map[string]interface{}{
		"title": title,
	})
	if err != nil {
		return nil, err
	}

	insertedID, err := result.LastInsertId()
	if err != nil {
		return nil, err
	}

	res := model.Todo{
		ID:     int(insertedID),
		Title:  title,
		IsDone: false,
	}

	return res.APIModel(), nil
}

// UpdateTodo ****************
func (r *Resolver) UpdateTodo(ctx context.Context, title *string, isDone *bool) (*gm.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

// DeleteTodo ****************
func (r *Resolver) DeleteTodo(ctx context.Context, id *string) (*gm.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}
