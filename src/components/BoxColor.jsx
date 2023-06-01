import React, { useState } from "react";

function BoxColor() {
  const [colors, setColors] = useState({
    red: "red",
    yellow: "yellow",
    pink: "pink",
    aqua: "aqua",
  });
  const [active, setActive] = useState(true);

  const handleClick = (props) => {
    // console.log(props.currentTarget.id);
    // console.log(props.currentTarget.style.background);
    // console.log(props.currentTarget.style);
    const currentColor=props.currentTarget.style.background;
    if (
      props.currentTarget.id == currentColor &&
      active == true
    ) {
      setColors(
        {red: currentColor,
        yellow: currentColor,
        pink: currentColor,
        aqua: currentColor}
     );
   
      setActive((active) => (active = false));
    } else {
      setColors({
       
        red: "red",
        yellow: "yellow",
        pink: "pink",
        aqua: "aqua",
      });
    
      setActive((active) => (active = true));
    }
  };

  return (
    <div style={{ width: 300, height: 300 }}>
      <div
        style={{
          float: "left",
          width: "50%",
          background: colors.red,
          height: "50%",
          display: "table",
          border: "2px solid",
          boxSizing: "border-box",
        }}
        onClick={handleClick}
        id="red"
      >
        <p
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            display: "table-cell",
          }}
        >
          {" "}
          Red
        </p>
      </div>
      <div
        style={{
          float: "right",
          width: "50%",
          background: colors.yellow,
          height: "50%",
          display: "table",
          border: "2px solid",
          boxSizing: "border-box",
        }}
        onClick={handleClick}
        id="yellow"
      >
        <p
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            display: "table-cell",
          }}
        >
          {" "}
          Gold
        </p>
      </div>
      <div
        style={{
          float: "right",
          width: "50%",
          background: colors.pink,
          height: "50%",
          display: "table",
          border: "2px solid",
          boxSizing: "border-box",
        }}
        onClick={handleClick}
        id="pink"
      >
        <p
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            display: "table-cell",
          }}
        >
          {" "}
          Purple
        </p>
      </div>
      <div
        style={{
          float: "right",
          width: "50%",
          background: colors.aqua,
          height: "50%",
          display: "table",
          border: "2px solid",
          boxSizing: "border-box",
        }}
        onClick={handleClick}
        id="aqua"
      >
        <p
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            display: "table-cell",
          }}
        >
          {" "}
          Aqua
        </p>
      </div>
    </div>
  );
}

export default BoxColor;
