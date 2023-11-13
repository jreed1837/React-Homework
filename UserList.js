//This imports react to make sure the program runs smoothly with react.
import React from "react";

//This statements holds the array of users
const UserList = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
