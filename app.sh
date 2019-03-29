#!/usr/bin/env bash
set -eo pipefail

#
# Commands
#
if [[ "$1" == "up" ]]; then
  (cd ./client/ && ./app.sh up)
  (cd ./server// && ./app.sh up)

elif [[ "$1" == "down" ]]; then
  (cd ./client/ && ./app.sh down)
  (cd ./server// && ./app.sh down)

elif [[ "$1" == "setup" || "$1" == "update" ]]; then
  (cd ./client/ && ./app.sh update)
  (cd ./server// && ./app.sh update)
fi
