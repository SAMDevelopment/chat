import React, { Component } from 'react'
import './TextInput.scss'

class TextInput extends Component {
  constructor (props) {
    super(props)

    this.inputElement = React.createRef()
  }

  focusInput () {
    this.inputElement.current.focus()
  }

  handleChange (event) {
    this.props.inputHandler(event.target.value)
  }

  componentDidMount () {
    if (this.props.focussed) {
      this.focusInput()
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.focussed === false && this.props.focussed === true) {
      this.focusInput()
    }
  }

  render () {
    return (
      <input
        ref={this.inputElement}
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
