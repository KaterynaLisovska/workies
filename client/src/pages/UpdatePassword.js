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
  // TODO please add here handling for some hash code in url (store this code in hidden input field)
  // TODO http://localhost:3000/updatepassword/?code=SOME_HASH_CODE
  // TODO You have to submit this code with a new password
  // TODO The flow is: store new password and invalidate the temporary code (this will prevent using a link with 
  // this code more then once)
  return (
    <>
      <SlCard className={`${classes.update_password_form}`}>
        <form className="column" onSubmit={submitHandler}>
          <h1 className="text_position">Update Password</h1>
          <div className="column">
          <SlInput
              onInput={inputHandler}
              type="password"
              name="password"
              autocomplete="new-password"
              placeholder="Create new password"
              password-toggle
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="confirmationPassword"
              autocomplete="new-password"
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
