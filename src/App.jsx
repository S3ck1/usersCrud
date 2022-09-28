import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {
  const initialUsers = [
    {
      name: "Jose",
      lastname: "del Valle",
      email: "josedv@gmail.com",
      password: "12345678",
      birthday: "15-11-1990",
    },
    {
      name: "Antonio",
      lastname: "Rodriguez",
      email: "anto@ghotmail.com",
      password: "12345678",
      birthday: "15-11-1990",
    },
  ];


  const [users, setUsers] = useState(initialUsers);

  return (
    <div className="App">
        <UsersForm />
        <UsersList users={users} />
    </div>
  );
}

export default App;
