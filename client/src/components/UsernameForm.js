import React, { Component } from 'react'
import './UsernameForm.scss'
import TextInput from './inputs/TextInput'
import socket from '../services/socket'

class UsernameForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      error: '',
    }

    socket.on('username_error', error => {
      this.setState({ error })
    })
  }

  inputHandler (value) {
    this.setState({ username: value })
  }

  setUsername (event) {
    event.preventDefault()

    if (this.state.username === '') {
      return
    }

    socket.emit('username', this.state.username)
  }

  render () {
    const error = this.state.error !== ''
      ? <p className="username-error">{this.state.error}</p>
      : ''

    return (
      <div className="username-popup">
        <form className="username-form" onSubmit={this.setUsername.bind(this)}>
          <p className="username-title">Pick a username</p>

          <TextInput
            placeholder="Your username"
            value={this.state.username}
            inputHandler={this.inputHandler.bind(this)}
            focussed={true}
          />
          {error}

          <button className="set-username">
            Start
          </button>
        </form>
      </div>
    )
  }
}

export default UsernameForm
