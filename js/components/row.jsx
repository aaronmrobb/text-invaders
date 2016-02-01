import React, { Component, PropTypes } from 'react'
import Cell from './cell.jsx'

class Row extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { cells } = this.props
    const words = []
    cells.map((word, index) => {
      words.push(<Cell content={word} key={index}/>)
    })
    return (
      <div className="row">
        {words}
      </div>
    )
  }
}


export default Row
