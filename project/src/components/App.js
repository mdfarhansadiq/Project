import "./App.css";

import Title from "./title/title";
import CountDown from "./CountDown/countdown";
import Button from "./button/button";
import { Component } from "react";

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

  render() {
    const {time} = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1>React Lecture</h1>
          <Title />
          <Button />
          <CountDown time={time}/>
        </div>
      </div>
    );
  }
}

export default App;
