# Makefile

# Define the default target
.DEFAULT_GOAL := help

# Help command
help:
	@echo "Available targets:"
	@echo "  run-dev    : Run 'nvm use 18', 'yarn install', and 'yarn dev'"


	
# 1. Source the Zsh configuration to set up environment variables.
# 2. Use nvm to set Node.js version to 18.
# 3. Install project dependencies using Yarn.
# 4. Start the development server using Yarn.
# 5. The '&' at the end runs the command in the background,
#    allowing the terminal to remain responsive.
dev:
	@zsh -c "source ~/.zshrc && nvm use 18 && yarn install && yarn dev" &

# kill the node process running on 3000
kill:
    lsof -ti :3000 | xargs kill