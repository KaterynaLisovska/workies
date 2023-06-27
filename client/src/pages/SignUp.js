import { useState, useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

import classes from "./SignUp.module.css";
import "normalize.css";

const SignUpPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmation, setEnteredConfirmation] = useState("");

  const submitHandler = () => {
    if (
      (enteredEmail) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i.test(enteredEmail)
    ) {
      setEnteredEmail(enteredEmail);
      setIsButtonDisabled(false);
    }

    if ((enteredPassword) => enteredPassword.trim() !== "") {
      setEnteredPassword(enteredPassword);
      console.log(enteredPassword);
    }

    if (enteredPassword === enteredConfirmation) {
      setEnteredConfirmation(enteredConfirmation);
    }
  };

  const inputHandler = () => {
    setIsButtonDisabled(false);
  };

  return (
    <>
      <SlCard className={`${classes.card} item`} onSubmit={submitHandler}>
        <div className="container_column">
          <h1 className={classes.h1}>Create your account</h1>
          <div className="container_column">
            <SlInput type="email" placeholder="Email" onInput={inputHandler} />
            <SlInput
              type="password"
              placeholder="Create password"
              size="medium"
              password-toggle
            />
            <SlInput
              type="password"
              placeholder="Confirm password"
              size="medium"
              password-toggle
            />
          </div>
          <SlButton variant="primary" type="submit" disabled={isButtonDisabled}>
            Sign Up
          </SlButton>

          <div className={`container_row flex_end`}>
            <span>Already have an account?</span>
            <Link to="login">Login</Link>
          </div>
          <div>
            <hr className={classes.hr} />
          </div>

          <div className="container_column">
            <SlButton variant="primary" outline>
              <SlIcon
                className={classes.icon}
                slot="prefix"
                src="https://a.allegroimg.com/original/346332/47549ea444eba9db98fe50d3f374/information-social-facebook-1b4340531f.svg"
              ></SlIcon>
              Login with Facebook
            </SlButton>
            <SlButton variant="primary" outline>
              <SlIcon
                className={classes.icon}
                slot="prefix"
                src="https://a.allegroimg.com/original/34f5a2/5c5e952746b198bf5e6c217e6e7f/information-social-google-a73214f7cb.svg"
              ></SlIcon>
              Login with Google
            </SlButton>
          </div>
        </div>
      </SlCard>
    </>
  );
};

export default SignUpPage;
