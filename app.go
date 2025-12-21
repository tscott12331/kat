package main

import (
	"context"

	// "fmt"
	"kat/services"
)

// App struct
type App struct {
	ctx context.Context
	AuthService *services.AuthService
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		AuthService: services.NewAuthService(),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	a.AuthService.Ctx = ctx
	a.AuthService.SetAuthConf()
}
