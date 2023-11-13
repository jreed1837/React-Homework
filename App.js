//This imports react, greeting, and userlist to make sure it runs smoothly.
import React, { useState } from "react";
import Greeting from "./Greeting";
import UserList from "./UserList";
import "./App.css";

//This is the array of preset users to show how the program adds names.
const App = () => {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [newUser, setNewUser] = useState("");

  const handleAddUser = () => {
    if (newUser) {
      setUsers([...users, newUser]);
      setNewUser("");
    }
  };

  //This states the greeting name (in this case Jake) and includes the placeholder where the user types a new user in.
  return (
    <div className="app-container">
      <Greeting name="Jake" />
      <input
        type="text"
        placeholder="Enter a new user"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={handleAddUser}>Click to add a user!</button>
      <UserList users={users} />
    </div>
  );
};

export default App;

