//This greeting file imports react and the greeting.css file to ensures it runs smoothly on the react platform.
import React, { useState } from "react";
import "./Greeting.css";

//This statement accepts a name and display a greeting message for the user.
const Greeting = ({ name }) => {
  const [count, setCount] = useState(0);

  //This statments adds 1 when the button is clicked.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  //This statement includes the button that adds +1 and keeps count of the amount of times the button is clicked.
  return (
    <div className="greeting-container">
      <h2>Hello, {name}!</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Add</button>
    </div>
  );
};

export default Greeting;
