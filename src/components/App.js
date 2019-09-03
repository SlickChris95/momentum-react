import React from 'react';
import Time from './Time.js';
import Quote from './Quote.js';
import Weather from './Weather.js';
import List from './List.js'


class App extends React.Component{
  state={value:''}

//whe i press enter, i need to create the h1
  keyPress = (event)=>{
    if(event.keyCode === 13){
      this.setState({value: event.target.value })
      console.log("state: " + this.state.value)


    }
  }
  /*
  erases the value and hides the list when we click it
  */
  deleteFocus = (e) =>{
    this.setState({value:''})
    console.log(this.state.value)
    // console.log(e.target.parentNode.parentNode)
    // let target = e.target.parentNode.parentNode;
    // // e.target.parentNode.remove()
    // console.log(this)
    // console.log(target)
    // console.log(target.firstChild)
  }

  render(){
    return(
      <div>
        <Weather />

        <div id="app-center-container">
          <Time />
          <div className="prompt">
            <h3>What is your main focus for today?</h3>
            <input type="text" maxLength="37" onKeyDown={this.keyPress}/>
            <div id="delete-me">
              <h1 id="main-focus"><span id="delete-focus" onClick={this.deleteFocus}>X</span></h1>
            </div>
            <List focus={this.state.value} />
          </div>
          <Quote />
        </div>
      </div>
    );
  }
}

export default App
