import { useState } from "react";
import { Link } from "react-router-dom";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

import classes from "./Login.module.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`Name: ${formData.email}, Email: ${formData.password}`);

    if (formData.password !== formData.confirmationPassword) {
      //      TODO apply validation
    }
  };

  return (
    <>
      <SlCard className={`${classes.login_form}`}>
        <form className="container_column" onSubmit={submitHandler}>
          <h1 className={classes.h1}>Login</h1>
          <div className="container_column">
            <SlInput
              onInput={inputHandler}
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="password"
              placeholder="Enter password"
              password-toggle
              required
            />
          </div>
          <div className={`container_row flex_end`}>
            <Link to="forgot_password">Forgot password?</Link>
          </div>
          <SlButton variant="primary" type="submit">
            Login
          </SlButton>

          <div className={`container_row flex_end`}>
            <span>Don't have an account yet?</span>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div>
            <hr className={classes.hr} />
          </div>

          <div className="container_column">
            <SlButton>
              <SlIcon
                className={classes.icon}
                slot="prefix"
                src="img/information-social-facebook.svg"
              ></SlIcon>
              Login with Facebook
            </SlButton>
            <SlButton>
              <SlIcon
                className={classes.icon}
                slot="prefix"
                src="img/information-social-google.svg"
              ></SlIcon>
              Login with Google
            </SlButton>
          </div>
        </form>
      </SlCard>
    </>
  );
};

export default LoginPage;
