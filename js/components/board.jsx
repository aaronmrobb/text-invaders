import React, { Component, PropTypes } from 'react'
import Row from './row.jsx'

class Board extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { board } = this.props
    const rows = []
    board.map((row, index) => {
      rows.push(<Row cells={row} key={index} />)
    })
    return (
      <div className="board">
        {rows}
      </div>
    )
  }
}


export default Board
