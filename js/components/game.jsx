import React, { Component, PropTypes } from 'react'
import Board from './board.jsx'
import Form from './form.jsx'

class Game extends Component {
  constructor(props) {
    super(props)
  }
  componentWillUpdate() {
    const { store } = this.context
    if (store.getState().game.lost) {
      this.stopGame()
    }
  }
  startGame() {
    const { store } = this.context
    store.dispatch({
      type: 'START_GAME'
    })

    if(!this.interval) {
      this.interval = setInterval(this.timer.bind(this), 1000)
    }
    document.getElementById('gun').focus()
  }
  stopGame() {
    const cleared = clearInterval(this.interval)
    this.interval = undefined
  }
  restartGame() {
    const { store } = this.context

    const cleared = clearInterval(this.interval)
    this.interval = undefined
    store.dispatch({
      type: 'RESTART_GAME'
    })
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
        { store.getState().game.lost ? <div>YOU LOST BITCH</div> : '' }
        <Board board={board} />
        <Form />
        { store.getState().game.playing ?
          <button onClick={this.restartGame.bind(this)} >Restart</button> :
          <button onClick={this.startGame.bind(this)} >Start</button>}
        <div>{ store.getState().game.time }</div>
        <div>{ store.getState().game.score }</div>
      </div>
    )
  }
}

Game.contextTypes = {
  store: React.PropTypes.object
}

export default Game
