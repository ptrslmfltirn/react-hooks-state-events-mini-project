import React, {useState} from "react";

function NewTaskForm({catList, onTaskFormSubmit}) {
  const validCats = catList.filter((cat => cat !== "All"))
  const [taskText, setTaskText] = useState("")
  const [taskCat, setTaskCat] = useState("Code")
  function handleCatChange (event) {
    setTaskCat(event.target.value)
  }
  function handleTextChange (event) {
    setTaskText(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    const newTask = {
      text: taskText,
      category: taskCat
    }
    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCatChange}>
          {validCats.map((category)=>
          <option> {category} </option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
