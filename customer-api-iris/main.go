package main

import (
	"time"
	"github.com/kataras/iris/context"
	"github.com/kataras/iris"
)


type Customer struct {
	LastName 	string
	FirstName 	string
	Birthdate	time.Time

}

func main() {

	app := iris.New()

	app.Get("/api/customers", getCustomersHandler)
	app.Run(iris.Addr(":5000"), iris.WithoutVersionChecker)

}


func getCustomersHandler(ctx context.Context) {
	customer := Customer { FirstName: "John",  LastName: "McEnroe",	Birthdate:  time.Date(1960, time.February, 10, 0, 0, 0, 0, time.UTC) }
	
	ctx.JSON(customer)
}