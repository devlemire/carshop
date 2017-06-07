import React, { Component } from 'react';
import './App.css';

import AddTask from './AddTask/AddTask';
import List from './List/List.js';

class App extends Component {
  render() {
    return (
      <div id="App__container">
        <div id="Tasks__container">
          <div id="Tasks__header">
            <span> To Do </span>
          </div>

          <AddTask />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
