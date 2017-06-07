import React from "react";
import './Task.css';

import { dispatchDeleteTask } from '../../../services/list_service';

export default function Task( { id, title } ) {
  return (
    <div id="Task__container">
      <span> { title } </span>
      <span id="Task__delete" onClick={ () => dispatchDeleteTask( id ) }> x </span>
    </div>
  )
}
