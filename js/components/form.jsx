import React, { Component, PropTypes } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  }
  shootWord() {

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
