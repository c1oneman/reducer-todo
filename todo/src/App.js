import React, { useState, useReducer } from "react";

import { initialState, reducer } from "./reducers/todoReducer";

import Task from './components/task'
import './App.css';

function App() {
  const [newTaskText, setNewTitleText] = useState("");

  // const [{ title, editing }, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };
  function handleToggle(task) {
    console.log(task);
    dispatch({type: 'TOGGLE_TODO', payload: task.item})
  }
  return (
    <div className="App">
    <h1>Todo</h1>
    {state.map(task => (
      <Task key={task.item} toggle={handleToggle} task={task}/>    
    ))}
    <input
            className="task-input"
            type="text"
            name="newTaskText"
            value={newTaskText}
            onChange={handleChanges}
          />
    <button onClick={() =>
      dispatch(
        { type: "ADD_TODO", id: '1', item: newTaskText }
        )
    }>Add Task</button>
    <button onClick={() =>
      dispatch(
        { type: "CLEAR_COMPLETED" }
        )
    }>Clear Complete</button>
    </div>
  );
}

export default App;
