const initialState = {
  tasks: []
}

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

export default function tasks( state = initialState, action ) {
  switch( action.type ) {
    case ADD_TASK:
      return {
        tasks: [ ...state.tasks, { id: state.tasks.length, title: action.payload, description: "", completed: false } ]
      }
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter( task => task.id !== action.payload )
      }
    default: return state;
  }
}

export function addTask( title ) {
  return {
    type: ADD_TASK,
    payload: title
  }
}

export function removeTask( id ) {
  return {
    type: REMOVE_TASK,
    payload: id
  }
}