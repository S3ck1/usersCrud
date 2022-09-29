import axios from "axios";
import React from "react";

const UsersList = ({ users, getUsers, selectUser }) => {
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(() => getUsers());
  };

  return (
    <div className="userslist-container">
      <ul className="users-list">
        {users.map((user) => (
          <li className="user" key={user.id}>
            <div className="user-info">
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <span>{user.email}</span>
              <span>
                <i className="fa-solid fa-cake-candles"></i>
                <b> {user.birthday}</b>
              </span>
            </div>
            <div className="options">
              <button onClick={() => deleteUser(user.id)}>
                <i className="option fa-solid fa-trash fa-xl"></i>
              </button>
              <button onClick={() => selectUser(user)}>
                <i className="option fa-solid fa-pencil fa-xl"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
