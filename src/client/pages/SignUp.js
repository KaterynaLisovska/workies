import { useState, useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
// import { SlIcon } from "@shoelace-style/shoelace/dist/react";

import classes from "./SignUp.module.css";

const SignUpPage = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmation, setEnteredConfirmation] = useState("");

  const submitHandler = () => {
    if ((enteredEmail) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i.test(enteredEmail)) {
      setEnteredEmail(enteredEmail);
    }
  
    if ((enteredPassword) => enteredPassword.trim() !== "") {  
      setEnteredPassword(enteredPassword);
    }

    if (enteredPassword === enteredConfirmation) {
      setEnteredConfirmation(enteredConfirmation);
    }
  };

  return (
    <>
      <SlCard className={classes.card} onSubmit={submitHandler}>
        <div>
          <SlInput type="email" placeholder="Email" />
          <SlInput type="text" placeholder="Create password" />
          <SlInput
            className={classes.input}
            type="text"
            placeholder="Confirm password"
          />
        </div>
        <SlButton variant="primary" type="submit">
          Sign Up
        </SlButton>

        <p>Already have an account?</p>
        <Link to="login">Login</Link>
        <br />
        <hr className={classes.hr} />
        <div>
          <SlButton variant="primary" outline>
            Login with Facebook
          </SlButton>
          <br />
          <SlButton variant="primary" outline>
            Login with Google
          </SlButton>
        </div>
      </SlCard>
    </>
  );
};

export default SignUpPage;
