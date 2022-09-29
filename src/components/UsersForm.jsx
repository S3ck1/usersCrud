import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, selectedUser, deselectUser }) => {
  
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (selectedUser) {
      reset(selectedUser);
    }
  }, [selectedUser]);

  const submit = (data) => {
    if (selectedUser) {
      console.log("actualizando");
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", data)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }
    clear();
  };

  const clear = () => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    deselectUser();
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="input-container">
          <label htmlFor="name">
            <i className="fa-solid fa-user"></i>
          </label>
          <input
            type="text"
            id="name"
            placeholder="first name"
            {...register("first_name")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastname"></label>
          <input
            type="text"
            id="lastname"
            placeholder="last name"
            {...register("last_name")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email-input">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input
            type="email"
            id="email-input"
            placeholder="email"
            {...register("email")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password-input">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input
            type="password"
            id="password-input"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="birthday">
            <i className="fa-solid fa-cake-candles"></i>
          </label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UsersForm;
