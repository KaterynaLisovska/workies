import { useState } from "react";

import { SlCard, SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";

import classes from "./ChangePassword.module.css";

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({ email: "" });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`Email: ${formData.email}`);

    if (formData.password !== formData.confirmationPassword) {
      //      TODO apply validation
    }
  };

  const cancelHandler = (event) => {
    window.location.assign("/login");
  };

  return (
    <>
      <SlCard className={`${classes.change_password_form}`}>
        <form className="container_column" onSubmit={submitHandler}>
          <h1 className="h1">Change Password</h1>
          <div className="container_column">
            <SlInput
              onInput={inputHandler}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="container_row flex_center">
            <SlButton style={{ width: "100%" }} onClick={cancelHandler}>Cancel</SlButton>
            <SlButton style={{ width: "100%" }} type="submit">
              Send request
            </SlButton>
          </div>
        </form>
      </SlCard>
    </>
  );
};

export default ChangePasswordPage;
