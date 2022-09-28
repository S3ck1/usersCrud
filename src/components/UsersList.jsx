import axios from "axios";
import React from "react";

const UsersList = ({ users, getUsers }) => {
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(() => getUsers());
  };

  return (
    <div className="userslist-container">
      {users.map((user) => (
        <li className="user" key={user.id}>
          <div className="user-info">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <span>{user.email}</span>
            <span>{user.birthday}</span>
          </div>
          <div className="options">
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button></button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default UsersList;
