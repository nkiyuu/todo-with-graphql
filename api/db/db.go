package db

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
)

var db *sqlx.DB

func init() {
	new()
}

func new() *sqlx.DB {
	currentPath, err := os.Getwd()
	if err != nil {
		log.Println(err)
	}

	dbPath := fmt.Sprintf("%v/.data/db.sqlite3", currentPath)
	conn, err := sqlx.Open("sqlite3", dbPath)
	if err != nil {
		log.Println(err)
	}

	if conn != nil {
		log.Println("conn is not null")
		db = conn
	}

	return conn
}

// DB ****************
func DB() *sqlx.DB {
	if db == nil {
		new()
	}

	if err := db.Ping(); err != nil {
		return new()
	}

	return db
}
