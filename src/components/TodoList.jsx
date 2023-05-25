import React from "react";

function ToDoList() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);

  const handleSubmit = () => {
    // e.preventDefault();
    if (text) {
      setList((ls) => [...ls, data]);
      setText("");
    }
  };
  const data = { text };


  const handleDelete = () => {

  };

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
        {list.map((a) => (
          <li>
            {a.text}
            <button onClick={handleDelete}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
//note: const data = {text}
export default ToDoList;
