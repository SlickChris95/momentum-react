import React from 'react';
import './App.css';
import './test.scss';


class Time extends React.Component {
  state = {date: new Date()};

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({date: new Date()})
  }

  render(){
    return (
      <div id="clock-container">
        <h1>Current Time</h1>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }

}

export default Time
