package main

import (
	"go-gate-htmx/internal/server/router"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func main() {
	engine := html.New("./internal/web", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
	})
	app.Static("/internal/web/static", "./internal/web/static")

	router.RegisterRouter(app)
	log.Fatal(app.Listen(":" + os.Getenv("PORT")))
}