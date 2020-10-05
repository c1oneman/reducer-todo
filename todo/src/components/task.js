import React from "react";
import '../App.css'

function Task(props) {
  const task = props.task
  return (
    <div onClick={() => props.toggle(task)}>
    {task.completed ? <h2 className = 'lineThru'>{task.item}</h2> : <h2>{task.item}</h2>}
    </div>

  );
}

export default Task;
