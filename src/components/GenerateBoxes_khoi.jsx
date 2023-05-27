import React, { useState } from "react";

function GenerateBoxes() {
  const [numItems, setNumItems] = useState(null);
  const [updateItems, setUpdate] = useState(numItems);
  const [color,setColor] = useState('')

  
  let items = [];
  if(updateItems==0){
items="no box"
  }else {
    for (let i = 0; i < updateItems; i++) {
      items.push(
        <div
          style={{
            height: 120,
            width: 140,
            background: "grey",
            textAlign: "center",
            margin: 10,
          }} key={i}
        >
          <div style={{ paddingTop: 45, color: "white" }}>Box #{i + 1}</div>
        </div>
      );
    }
  }
  
  function handleClick() {
    setUpdate(numItems);
    setColor(color=>color=generateColor())
  
  }

  function handleValueChange(e) {
    setNumItems(e.target.value);
   
  }

function generateColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  return `#${randomColor}`;
}
  return (
    <div>
      Number of boxes:{" "}
      <input
        type="number"
        value={numItems||''}
        onChange={handleValueChange}
      ></input>
      <button onClick={handleClick}>Generate</button>
      <br/>
      <br/>
      <div
        style={{
          height: 1,
          background: "black",
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "row",flexWrap: 'wrap', background:color }}>{items}</div>
    </div>
  );
}

export default GenerateBoxes;
