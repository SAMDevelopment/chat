import React, { Component } from 'react'
import './App.scss'
import ChatRoom from './components/ChatRoom'

class App extends Component {
  render () {
    return (
      <div id="app">
        <ChatRoom></ChatRoom>
      </div>
    )
  }
}

export default App
