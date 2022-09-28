import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, [])

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }


  return (
    <div className="App">
        <UsersForm getUsers={getUsers}/>
        <UsersList users={users} getUsers={getUsers}/>
    </div>
  );
}

export default App;
