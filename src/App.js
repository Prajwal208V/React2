import React, { Component } from 'react';
import Inputs from './components/Inputs';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="hedaer">EMPLOYEE FEEDBACK FORM</h1>
        <div className="container">
            <Inputs />
        </div>
      </div>
    )
  }
}

export default App;
