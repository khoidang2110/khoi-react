import React, { useState } from "react";

// utils
import { generateRandomColor } from '../utils/generateRandomColor'

function GenerateBoxes() {
  const [num, setNum] = useState(0);
  const [boxs, setBoxs] = useState(null);
  // const [color,setColor] = useState('')

  const res = boxs > 0 ? Array.from(new Array(Number(boxs)), (_, i) => i + 1) : [];
  
  function handleClick() {
    setBoxs(num);
    // setColor(color=>color=generateColor())
  }

  function handleValueChange(e) {
    setNum(e.target.value);
  }

  // function generateColor(){
  //   const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  //   return `#${randomColor}`;
  // }
  
  return (
    <div>
      Number of boxes:{" "}

      <input
        type="number"
        value={num}
        onChange={handleValueChange}
      />

      <button onClick={handleClick}>Generate</button>
      <br/>
      <br/>
      {res.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "row",flexWrap: 'wrap' }}>
          {res.map(box => {
            const color = generateRandomColor();
            return (
              <div
                key={box}
                style={{
                  height: 120,
                  width: 140,
                  background: color,
                  textAlign: "center",
                  margin: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} 
              >
                <div style={{ color: "white" }}>Box #{box}</div>
              </div>
            )
          })}
        </div>
      ) : (
        <div>no box</div>
      )}
    </div>
  );
}

export default GenerateBoxes;
