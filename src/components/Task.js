import React from "react";

function Task({text, category, handleDelete}) {
  // function check (event) {
  //   console.log(event.target.parentElement.id)
  // }
  return (
    <div className="task" id={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
