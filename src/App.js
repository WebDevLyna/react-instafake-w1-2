import React, { Component } from 'react';
import logo from './logo.svg';
import { Timeline } from './components';
import { Grid } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline />
      </div>
    );
  }
}

export default App;
