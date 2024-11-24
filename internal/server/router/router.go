package router

import (
	"go-gate-htmx/internal/server/handler"

	"github.com/gofiber/fiber/v2"
)


func RegisterRouter(app fiber.Router) {
	app.Get("/", handler.HomeHandler)
	app.Get("/proxy", handler.ProxyHandler)
}
