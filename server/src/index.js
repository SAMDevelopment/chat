const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const usernames = []

io.on('connection', function (socket) {
  let myUsername = ''

  socket.on('username', newUsername => {
    const parsedUsername = newUsername.toLowerCase()

    if (parsedUsername === '') {
      return
    }

    if (usernames.includes(parsedUsername)) {
      socket.emit('username_error', 'This username is already taken.')
      return
    }

    usernames.push(parsedUsername)
    myUsername = parsedUsername
    socket.emit('username', parsedUsername)
  })

  socket.on('message', message => {
    if (message.text === '') {
      return
    }

    io.emit('message', {
      text: message,
      author: myUsername,
      timestamp: (new Date()).getTime(),
    })
  })

  socket.on('disconnect', function () {
    usernames.splice(
      usernames.indexOf(myUsername),
      1,
    )
  })
})

http.listen(3000, '0.0.0.0')

process.on('SIGINT', function () {
  process.exit()
})
