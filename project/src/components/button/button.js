import React, { Component } from 'react'

export default class button extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
  render() {
    const {count} = this.state;
    return (
      <div>button</div>
    )
  }
}
