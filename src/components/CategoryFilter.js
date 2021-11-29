import React, {useState} from "react";

function CategoryFilter({catList, displayState, setDisplayState}) {
  const [buttonState, setButtonState] = useState(false)
  let reactSucks = document.getElementsByClassName("")
  console.log(reactSucks)
  function handleSelection(event) {
    setDisplayState(event.target.value)
    console.log(event)s
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catList.map((cat)=>(
        <button key={cat} onClick={handleSelection} className="" value={cat}>{cat}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
