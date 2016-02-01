import React, { Component, PropTypes } from 'react'
import Game from './game.jsx'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
          <Game />
      </div>
    )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

export default App
