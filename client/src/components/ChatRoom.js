import React, { Component } from 'react'
import './Chatroom.scss'
import MessageBox from './MessageBox'
import UsernameForm from './UsernameForm'
import Message from './Message'
import socket from '../services/socket'

class ChatRoom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messages: [],
      username: '',
    }

    this.messagesWrapperElement = React.createRef()

    socket.on('message', message => {
      this.addMessage(message.text, message.author, message.timestamp)
    })
    socket.on('username', username => {
      this.setState({username})
    })
  }

  addMessage (text, author, timestamp) {
    const newMessage = {
      text,
      author,
      timestamp,
      me: author === this.state.username,
    }

    this.setState(oldState => ({
      messages: [...oldState.messages, newMessage],
    }))

    this.messagesWrapperElement.current.scrollTop = this.messagesWrapperElement.current.scrollHeight
  }

  render () {
    const usernameForm = this.state.username === ''
      ? <UsernameForm />
      : ''

    return (
      <div className="chat-room">

        <div className="messages-wrapper" ref={this.messagesWrapperElement}>
          <div className="messages">
            {this.state.messages.map(message => (
              <Message
                key={message.author + '-' + message.timestamp}
                author={message.author}
                timestamp={message.timestamp}
                me={message.me}
              >
                {message.text}
              </Message>
            ))}
          </div>
        </div>

        <MessageBox disabled={this.state.username === ''}></MessageBox>

        {usernameForm}
      </div>
    )
  }
}

export default ChatRoom
