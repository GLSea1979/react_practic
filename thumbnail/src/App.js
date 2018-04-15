import React, { Component } from 'react';
import Hacker from './Hacker';
import Background from './What';

class App extends React.Component {
  render() {
    console.log("here I am>>>>>>>>>>>>>");
    return (

      <div>
        <div className="panel">
          <Hacker />
        </div>
        <div className="panel">
          <Background />
        </div>
      </div>
    )
  }
}

export default App;
