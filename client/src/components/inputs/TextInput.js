import React, { Component } from 'react'
import './TextInput.scss'

class TextInput extends Component {
  handleChange (event) {
    this.props.inputHandler(event.target.value)
  }

  render () {
    return (
      <input
        className="text-input"
        type="text"
        value={this.props.value}
        onChange={this.handleChange.bind(this)}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
      />
    )
  }
}

export default TextInput
