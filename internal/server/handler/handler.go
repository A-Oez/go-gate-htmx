package handler

import (
	"github.com/gofiber/fiber/v2"
)

func HomeHandler(c *fiber.Ctx) error {
	return c.Render("layouts/home", fiber.Map{})
}

func MappingHandler(c *fiber.Ctx) error {
	return c.Render("layouts/mapping", fiber.Map{})
}