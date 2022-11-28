
import React, { Component } from 'react'

class Button extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    countInc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    countDec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={this.countInc}>+</button>
        <button onClick={this.countDec}>-</button>
      </div>
    )
  }
}


export default Button;