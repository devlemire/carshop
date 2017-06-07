import React from "react";
import './Tasks.css';

import AddTask from './AddTask/AddTask';
import List from './List/List';

export default function CarList() {
  return (
    <div id="Tasks__container">
      <div id="Tasks__header">
        <span> To Do </span>
      </div>

      <AddTask />
      <List />
    </div>
  )
}