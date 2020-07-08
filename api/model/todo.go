package model

import (
	"strconv"

	gm "github.com/nkiyuu/todo-app-with-graphql/api/graph/model"
)

// Todo    **************************
type Todo struct {
	ID     int    `db:"id"`
	Title  string `db:"title"`
	IsDone bool   `db:"is_done"`
}

// APIModel ****************
func (t *Todo) APIModel() *gm.Todo {
	return &gm.Todo{
		ID:     strconv.FormatInt(int64(t.ID), 10),
		Title:  t.Title,
		IsDone: t.IsDone,
	}
}
