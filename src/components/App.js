import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [displayState, setDisplayState] = useState("All")
  const [taskArray, setTaskArray] = useState(TASKS)
  function onTaskFormSubmit (newTask) {
    setTaskArray([...taskArray, newTask])
  }
  function handleDelete (event) {
    console.log(event)
    const cleanArray = taskArray.filter((task)=>{
     return task.text !== event.target.parentElement.id
    })
    setTaskArray(cleanArray)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter catList={CATEGORIES} displayState={displayState} setDisplayState={setDisplayState}/>
      <NewTaskForm catList={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList taskArray={taskArray} displayState={displayState} setDisplayState={setDisplayState} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
