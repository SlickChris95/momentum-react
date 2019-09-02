import React from 'react';
import './App.css';
import './test.scss';


class Time extends React.Component {
  state = {date: new Date(),greeting:'Good Morning'};

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.greetingCheck(this.state.date.toLocaleTimeString())
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({date: new Date()})
  }
  greetingCheck(time){
    //deconstruct time into hours and PM or AM
    let t = time;
    let hour = parseInt(t.slice(0,2));
    let unit = t.slice(-2).toUpperCase();

    if(unit === 'PM'){
      if(hour < 5 || hour === 12){
        //good afternoon
        console.log('Good afternoon');
        this.setState({greeting: 'Good afternoon'})
      }else {
        //good evening
        console.log('good evening');
        this.setState({greeting: 'Good evening'})

      }
    }else if(unit ==='AM'){
        if(hour === 12){
          console.log('Good evening')
          this.setState({greeting: 'Good evening'})

        }else {
          //good morning
          console.log('good morning');
          this.setState({greeting: 'Good morning'})

        }
      }
  }
  render(){
    return (
      <div className="top-row" id="clock-container">
        <div id="clock-display">{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <h1>{this.state.greeting}, Chris.</h1>
      </div>
    );
  }

}

export default Time
