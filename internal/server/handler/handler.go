package handler

import (
	"github.com/gofiber/fiber/v2"
)

func HomeHandler(c *fiber.Ctx) error {
	return c.Render("layouts/home", fiber.Map{})
}

func ProxyHandler(c *fiber.Ctx) error {
	return c.Render("layouts/proxy", fiber.Map{})
}