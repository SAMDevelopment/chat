import React, { Component } from 'react'
import './Message.scss'

class Message extends Component {
  render () {
    let classes = 'message'
    if (this.props.me === false) {
      classes += ' received'
    }

    return (
      <div className={classes}>
        <p className="message-author">{this.props.author}</p>
        <p className="message-text">{this.props.children}</p>
      </div>
    )
  }
}

export default Message
