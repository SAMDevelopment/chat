# Socket.io backend

A simple chat server using WebSockets.

## Commands

There is a helper script to work with the Docker container for this application. Below is a list of available commands.

- `up` - Start the dev server that serves the app.
- `setup|update` - Install or update dependencies.
- `yarn <args>` - Run a yarn command inside the container.
- `node <args>` - Run a node command inside the container.

Aside from these commands, all `docker-compose` commands can be used. For example: `./app.sh down` to shut down the application.
