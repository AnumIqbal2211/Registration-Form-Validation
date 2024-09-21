import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input type="text" name="username" {...register("username")} />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" {...register("email")} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" {...register("password")} />
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword")}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
