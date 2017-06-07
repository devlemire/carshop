import React from "react";
import './Task.css';

import { dispatchDeleteTask } from '../../../../services/task_service';
import { Link } from 'react-router-dom';

export default function Task( { id, title, complete } ) {
  console.log('IS IT COMPLETED?', complete);
  return (
    <Link id="Task__link" to={ `details/${id}` }>
      <div className={"Task__container " + (complete ? 'complete' : '') }>
        <span> { title } </span>
        <span id="Task__delete" onClick={ () => dispatchDeleteTask( id ) }> x </span>
      </div>
    </Link>
  )
}
