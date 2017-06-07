import React, { Component } from 'react';
import './App.css';

import Tasks from './Tasks/Tasks';

class App extends Component {
  render() {
    return (
      <div id="App__container">
        <Tasks />
      </div>
    );
  }
}

export default App;
