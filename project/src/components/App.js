
import './App.css';


import Title from './title/title';
import CountDown from './CountDown/countdown';
import Button from './button/button';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Lecture</h1>
        <Title/>
        <Button/>
        <CountDown/>
      </div>
    </div>
  );
}

export default App;
