import { useState } from "react";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";

import classes from "./UpdatePassword.module.css";

const UpdatePasswordPage = () => {
  const [formData, setFormData] = useState({password: "", confirmationPassword: ""});

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`New Password: ${formData.password}, New Password Confirmation: ${formData.confirmationPassword}`);

    if (formData.password !== formData.confirmationPassword) {
      //      TODO apply validation
    }
  };

  return (
    <>
      <SlCard className={`${classes.update_password_form}`}>
        <form className="container_column" onSubmit={submitHandler}>
          <h1 className={classes.h1}>Update Password</h1>
          <div className="container_column">
          <SlInput
              onInput={inputHandler}
              type="password"
              name="password"
              placeholder="Create new password"
              password-toggle
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="confirmationPassword"
              placeholder="Confirm new password"
              password-toggle
              required
            />
          </div>
          <SlButton variant="primary" type="submit">
            Update password
          </SlButton>
        </form>
      </SlCard>
    </>
  );
};

export default UpdatePasswordPage;
