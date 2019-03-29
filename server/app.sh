#!/usr/bin/env bash
set -eo pipefail

#
# Variables
#
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
NODE_SERVICE="socket-server"

#
# Methods
#
function ownAllTheThings {
  docker-compose run --rm ${NODE_SERVICE} chown -R $(id -u):$(id -g) .
}

#
# Env variables
#
if [[ ! -f ${ROOT_DIR}/.env ]]; then
  cp -a ${ROOT_DIR}/.env.dist ${ROOT_DIR}/.env
fi
export $(cat ${ROOT_DIR}/.env | xargs)

#
# Commands
#
if [[ $# -gt 0 ]]; then
  if [[ "$1" == "up" ]]; then
    shift 1
    docker-compose up -d "$@"

    echo ""
    echo "Socket server running on http://localhost:${SOCKET_PORT}"

  elif [[ "$1" == "setup" || "$1" == "update" ]]; then
    ./app.sh yarn install

  elif [[ "$1" == "yarn" ]]; then
    shift 1
    docker-compose run --rm ${NODE_SERVICE} yarn "$@"
    ownAllTheThings

  elif [[ "$1" == "node" ]]; then
    shift 1
    docker-compose run --rm ${NODE_SERVICE} node "$@"
    ownAllTheThings

  else
    docker-compose "$@"
  fi
else
  docker-compose ps
fi
