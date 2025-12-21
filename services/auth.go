package services

import (
	"context"
	"log"
	"os"

	// "context"
	// "fmt"

	"github.com/joho/godotenv"
	"golang.org/x/oauth2"
)

type AuthService struct {
	Ctx context.Context
	Conf *oauth2.Config
}


func NewAuthService() *AuthService {
	return &AuthService{}
}

func (a *AuthService) GetAuthURL() string {
	var verifier = oauth2.GenerateVerifier()

	var url = a.Conf.AuthCodeURL("state", oauth2.AccessTypeOffline, oauth2.S256ChallengeOption(verifier))
	return url
}

func (a *AuthService) SetAuthConf() {
	var err = godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	var clientId = os.Getenv("VITE_CLIENT_ID") 
	var clientSecret = os.Getenv("VITE_CLIENT_SECRET") 

	var conf = &oauth2.Config{
		ClientID: clientId,
		ClientSecret: clientSecret,
		Scopes: []string{ "user:read", "channel:read", "channel:rewards:read", "chat:write", "events:subscribe" },
		Endpoint: oauth2.Endpoint{
			AuthURL: "https://id.kick.com/oauth/authorize",
			TokenURL: "https://id.kick.com/oauth/token",
		},
		RedirectURL: "https://localhost:5174/auth",
	}

	a.Conf = conf
}
