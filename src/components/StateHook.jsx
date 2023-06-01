import React from "react";
function createInitialTodo() {
  return [
    {
      id: 1,
      title: 'learn javascript'
    },
    {
      id: 3,
      title: 'learn node'
    }
  ]
}
function StateHook() {
  const [number, setNumber] = React.useState(0);
  const [todos, setTodos] = React.useState(createInitialTodo);
  console.log("state: ", number);
  console.log("todos ", todos);
  function handleUpdaterFunction() {
    // setNumber(number +1);
    // setNumber(number +1);
    // setNumber(number +1);
    setNumber((prevState) => prevState + 1);
    setNumber((prevState) => prevState + 1);
    setNumber((prevState) => prevState + 1);

    setTodos((prevState) => {
      return [
        ...prevState,
        {
          id: 2,
          title: "learn angular",
        },
      ];
    });
  }

  return (
    <div>
      Updater function: {number}
      <button type="button" onClick={handleUpdaterFunction}>
        {" "}
        Submit
      </button>
    </div>
  );
}

export default StateHook;
