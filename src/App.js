import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Paulo estamos na AWS</h1>
        </header>
      </div>
    );
  }
}

export default App;
