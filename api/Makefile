GOLANG_MIGRATE_VERSION:=v4.11.0

bin/migrate:
	cd ./bin; git clone https://github.com/golang-migrate/migrate.git ./golang-migrate; cd golang-migrate; git checkout $(GOLANG_MIGRATE_VERSION)
	cd ./bin/golang-migrate; GO111MODULE=on go build -tags 'sqlite3'  -o ../migrate ./cmd/migrate; cd ../; rm -fr golang-migrate

.data/db.sqlite3:
	cd .data; touch db.sqlite3

create-database: .data/db.sqlite3

migration-up: bin/migrate create-database
	./bin/migrate -database sqlite3://.data/db.sqlite3 -path ./migrations up

migration-down: 
	./bin/migrate -database sqlite3://.data/db.sqlite3 -path ./migrations down

server: migration-up
	GO111MODULE=on go run server.go