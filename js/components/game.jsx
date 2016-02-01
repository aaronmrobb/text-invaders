import React, { Component, PropTypes } from 'react'
import Board from './board.jsx'
import Form from './form.jsx'

class Game extends Component {
  constructor(props) {
    super(props)
  }
  startGame() {
    const { store } = this.context
    store.dispatch({
      type: 'START_GAME'
    })

    if(!this.interval) {
      this.interval = setInterval(this.timer.bind(this), 1000)
    }
  }
  stopGame() {
    const cleared = clearInterval(this.interval)
    this.interval = undefined
  }
  timer () {
    const { store } = this.context
    store.dispatch({
      type: 'TIME_INCREASE'
    })
  }
  render() {
    const { store } = this.context
    const board = store.getState().game.board
    return (
      <div className="game">
        <Board board={board} />
        <Form />
        <button onClick={this.startGame.bind(this)} >Start</button>
        <button onClick={this.stopGame.bind(this)} >Stop</button>
      </div>
    )
  }
}

Game.contextTypes = {
  store: React.PropTypes.object
}

export default Game
