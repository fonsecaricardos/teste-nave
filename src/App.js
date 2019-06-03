import React, { Component } from 'react';
import Information from './components/Informations';
import Sales from './components/Sales';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="container">
        <Information />
        <div className="row">
          <div className="col-6"><Sales /></div>
          <div className="col-6"></div>
        </div>
      </div>
    );
  }
}

export default App;