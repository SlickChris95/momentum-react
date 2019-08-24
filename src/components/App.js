import React from 'react';
import Time from './Time.js';
import Quote from './Quote.js';

class App extends React.Component{



render(){
  return(
    <div id="app-center-container">
      <Time />
      <Quote />
    </div>
  );
}

}

export default App
