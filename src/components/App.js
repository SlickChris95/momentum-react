import React from 'react';
import Time from './Time.js';
import Quote from './Quote.js';
import Weather from './Weather.js';
import List from './List.js'


class App extends React.Component{
  state={value:''}

//whe i press enter, i need to create the h1
  keyPress = (event)=>{
    let focusInput = document.querySelector('.focus-input');
    if(event.keyCode === 13){
      this.setState({value: event.target.value })
      console.log('Focus Input: ' + focusInput.value)
      focusInput.value = '';
      focusInput.classList.add('invisible');
    }
  }
  /*
  erases the value and hides the list when we click it
  */
  deleteFocus = (e) =>{
    let focusInput = document.querySelector('.focus-input');
    this.setState({value:''})
    focusInput.classList.remove('invisible');

  }
  onMouseLeave = ()=> {
    let deleteFocus = document.querySelector('.delete-focus');
    deleteFocus.classList.remove('visibility')
    console.log(deleteFocus.classList)
  }
  onMouseOver =()=> {
    let deleteFocus = document.querySelector('.delete-focus');
    deleteFocus.classList.add('visibility')
    console.log(deleteFocus.classList)
  }


  render(){
    return(
      <div>
        <Weather />

        <div id="app-center-container">
          <Time />
          <div className="prompt">
            <h3>What is your main focus for today?</h3>
            <input class="focus-input"type="text" maxLength="15" onKeyDown={this.keyPress}/>
            <div className="testing" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
              <List focus={this.state.value} />
              <span class="delete-focus" onClick={this.deleteFocus}>X</span>
            </div>
          </div>
          <Quote />
        </div>
      </div>
    );
  }
}

export default App
