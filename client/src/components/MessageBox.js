import React, { Component } from 'react'
import './MessageBox.scss'
import sendIcon from '../assets/send.svg'
import TextInput from './inputs/TextInput'
import socket from '../services/socket'

class MessageBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: '',
    }
  }

  inputHandler (newValue) {
    this.setState({ message: newValue })
  }

  sendMessage (event) {
    event.preventDefault()

    if (this.state.message === '') {
      return
    }

    socket.emit('message', this.state.message)

    this.setState({ message: '' })
  }

  render () {
    return (
      <form className="message-box" onSubmit={this.sendMessage}>
        <TextInput
          placeholder="Type a message"
          value={this.state.message}
          inputHandler={this.inputHandler.bind(this)}
          disabled={this.props.disabled}
        />

        <button className="send-message" onClick={this.sendMessage.bind(this)}>
          <img src={sendIcon} alt="send icon" />
        </button>
      </form>
    )
  }
}

export default MessageBox
