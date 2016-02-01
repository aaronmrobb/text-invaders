import React, { Component, PropTypes } from 'react'


class Cell extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { content } = this.props
    return (
      <div className="cell">
        { content }
      </div>
    )
  }
}


export default Cell
