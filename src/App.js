import React, { Component } from 'react';
import Information from './components/Informations';
import Sales from './components/Sales';
import Reports from './components/Reports';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="container">
        <Information />
        <div className="row">
          <div className="h-50 w-auto col-6 col-md-8"><Sales /></div>
          <div className="w-auto col-6 col-md-4"><Reports /></div>
        </div>
      </div>
    );
  }
}

export default App;