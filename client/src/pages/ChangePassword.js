import { useState } from "react";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";

import classes from "./Login.module.css";

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

  return (
    <>
      <SlCard className={`${classes.change_password_form}`}>
        <form className="container_column" onSubmit={submitHandler}>
          <h1 className={classes.h1}>Change Password</h1>
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
            <SlButton style={{ width: "100%" }}>Cancel</SlButton>
            <SlButton style={{ width: "100%" }} type="submit">Send request</SlButton>
          </div>
        </form>
      </SlCard>
    </>
  );
};

export default ChangePasswordPage;
