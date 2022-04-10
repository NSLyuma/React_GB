import React from "react";
import { MyInput } from "../../components/MyInput/MyInput";

export const Login = () => {
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmitForm}>
      <h1>Login</h1>
      <MyInput style={{ marginTop: "50px" }} placeholder="e-mail" />
      <br />
      <MyInput
        style={{ marginTop: "30px" }}
        type="password"
        placeholder="password"
      />
    </form>
  );
};
