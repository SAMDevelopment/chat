# Chat assessment

A simple chat app based on the following assignment:

> Build a simple chat application (in ~3 hours) that can be used by opening it in different browser tabs. The front-end should use [`create-react-app`](https://github.com/facebook/create-react-app) and the backend should be build in nodejs. Preferably not a REST application.

## Running the app

Make sure you have Docker installed and run the following commands:

```bash
./app.sh setup
./app.sh up
```

For more commands, look at the readme's of the respective applications.

## Notes

#### React

It was quite a while back since I had worked with React. Therefor I focused on building the functionality and did not look at the testing suite of React. Normally I would prefer to TDD an application, but this time there are no tests (yet).

#### Socket.io

I chose to create a simple [Socket.io](https://socket.io/) backend to handle the chat messages. WebSockets are perfect for building chat applications. 😍

#### Refactoring

Given more time one of the first things I would like to do is refactor the node server. Right now it is all one file. It would make more sense to make a service that is called and has all the necessary functionality for the chat app. 
