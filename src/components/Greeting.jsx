import React from "react";
import UserGreeting from "./Greeting/UserGreeting";
function Greeting() {
  const [isLoggedIn, setLogin] = React.useState(true);

  const handleLogin =()=> {
    setLogin(!isLoggedIn)
  }
  if (isLoggedIn) {
    return (
      <div>
        <UserGreeting text="Welcome to" name=" Tony" />
        <button onClick={handleLogin}>Logout </button>
      </div>
    );
  }
  return (
    <div>
      <UserGreeting text="Please sign up" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// <Greeting isLoggedIn={false} />
export default Greeting;
