import React from "react";
import './Task.css';

import { dispatchDeleteTask } from '../../../../services/task_service';
import { Link } from 'react-router-dom';

export default function Task( { id, title } ) {
  return (
    <Link id="Task__link" to={ `details/${id}` }>
      <div id="Task__container">
        <span> { title } </span>
        <span id="Task__delete" onClick={ () => dispatchDeleteTask( id ) }> x </span>
      </div>
    </Link>
  )
}
