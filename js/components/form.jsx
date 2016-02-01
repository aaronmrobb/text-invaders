import React, { Component, PropTypes } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  }
  shootWord(e) {
    const { store } = this.context
    e.preventDefault()
    this.refs.input.value
    store.getState().game.board.map((row, index1) => {
      row.map((cell, index2) => {
        if (this.refs.input.value === cell) {
          store.dispatch({
            type: 'SHOOT_WORD',
            target: [index1, index2]
          })
        }
      })
    })
    this.refs.input.value = ''
  }
  render() {
    return (
      <form autoComplete="off" className="turret" onSubmit={this.shootWord.bind(this)}>
        <input id="gun" ref="input" placeholder="Shoot shit"></input>
      </form>
    )
  }
}

Form.contextTypes = {
  store: React.PropTypes.object
}

export default Form
