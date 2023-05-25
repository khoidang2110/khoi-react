import React from "react";

function UserGreeting(props) {
  return (
    <div>
      <p>
        {props.text}
        {props.name}
      </p>
  
    </div>
  );
}

export default UserGreeting;
