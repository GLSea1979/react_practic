import React, { Component } from 'react';
import Header from './Header';
import Hacker from './Hacker';
import Background from './What';
import Clock from './Clock';


class App extends React.Component {
  render() {
    console.log("here I am>>>>>>>>>>>>>");
    return (

      <div>
        <Header />
        <div className="panel">
          <Hacker />
        </div>
        <div className="panel">
          <Background />
        </div>
        <div className="panel">
          <Clock />
        </div>
        <div className="panel">

        </div>
      </div>
    )
  }
}

export default App;
