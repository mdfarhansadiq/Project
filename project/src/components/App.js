import "./App.css";

import Title from "./title/title";
import CountDown from "./CountDown/countdown";
import Button from "./button/button";
import { Component } from "react";
import Controller from "./Controller/controller";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0,
      },
      laps: [],
    };
  }

  getStart() {
    this.intervalID = setInterval(() => { 
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if (mili >= 10) {
        sec = sec + 1
        mili = 0
      }

      if (sec >= 60) {
        min = min + 1
        sec = 0
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1
        }
      })

    }, 100)
  }

  // getPause() {
  //   clearInterval(this.intervalID)
  // }

  getLap() {
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })

    console.log(this.state.laps)
  }

  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    })
  }

  render() {
    const {time} = this.state;
    return (
      <div className="App">
        <div className="container">
          {/* <h1>React Lecture</h1> */}
          <Title />
          {/* <Button /> */}
          <CountDown time={time}/>
          <Controller 
                start= { this.getStart.bind(this) }
                // pause= { this.getPause.bind(this) }
                reset= { this.getReset.bind(this) }
                lap= { this.getLap.bind(this) }
               />
               
          {/* <Laps className="my-5" laps={ this.state.laps } /> */}
        </div>
      </div>
    );
  }
}

export default App;
