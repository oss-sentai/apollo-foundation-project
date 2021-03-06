build:
	cp .env.example .env
	docker-compose up -d --build
	@echo 🚀Runnning http://localhost:8080/graphql

up:
	docker-compose up -d
	@echo 🚀Runnning http://localhost:8080/graphql

down:
	docker-compose down

ps:
	docker ps

work:
	docker exec -it node-app bash

lint:
	yarn lint:fix && yarn format:fix
