import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  }  

  const deselectUser= () => setSelectedUser(null);

  return (
    <div className="App">
      <UsersForm
        getUsers={getUsers}
        selectedUser={selectedUser}
        deselectUser={deselectUser}
      />
      <UsersList 
        users={users} 
        getUsers={getUsers}
        selectUser={selectUser}
       />
    </div>
  );
}

export default App;
