# Makefile

# Define the default target
.DEFAULT_GOAL := help

# Help command
help:
	@echo "Available targets:"
	@echo "  run-dev    : Run 'nvm use 18', 'yarn install', and 'yarn dev'"

# Define the run-dev target
run-dev:
	@zsh -c "source ~/.zshrc && nvm use 18 && yarn install && yarn dev"
