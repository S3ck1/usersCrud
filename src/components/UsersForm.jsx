import React from "react";
import { useForm } from "react-hook-form";

const UsersForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="input-container">
          <label htmlFor="name">
            <i class="fa-solid fa-user"></i>
          </label>
          <input
            type="text"
            id="name"
            placeholder="first name"
            {...register("name")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastname"></label>
          <input
            type="text"
            id="lastname"
            placeholder="last name"
            {...register("lastname")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email-input">
            <i class="fa-solid fa-envelope"></i>
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
            <i class="fa-solid fa-lock"></i>
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
            <i class="fa-solid fa-cake-candles"></i>
          </label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UsersForm;
