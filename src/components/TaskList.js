import React from "react";
import Task from "./Task"

function TaskList({taskArray, displayState, setDisplayState, handleDelete}) {
  // console.log(typeof(taskArray))
  const displayableTaskArray = taskArray.filter((task)=> {
    if (displayState === "All") return true;
    return task.category === displayState
  })
  return (
    <div className="tasks">
      {displayableTaskArray.map((task)=>(
        <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default TaskList;
