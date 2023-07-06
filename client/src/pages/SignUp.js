import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

import classes from "./SignUp.module.css";
import "../App.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({email: "", password: "", confirmationPassword: "",});
  const [error, setError] = useState();

  const formRef = useRef(null);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (formData.password === formData.confirmationPassword && formData.password.length < 8) {
      setError(1);
      console.log("Password less than eight characters");
    } else if (formData.password !== formData.confirmationPassword) {
      setError(2);
      console.log("Passwords don't match");
    } else {
      setError("");
      console.log(`Email: ${formData.email}, Password: ${formData.password}, Confirmation Password: ${formData.confirmationPassword}`);
      formRef.current.reset();
    }
  };

  return (
    <>
      <SlCard className={classes.sign_up_form}>
        <form className="column" onSubmit={submitHandler} ref={formRef}>
          <h1 className="text_position">Create your account</h1>
          <div className="column">
            <SlInput
              onInput={inputHandler}
              type="email"
              name="email"
              autocomplete="username"
              placeholder="Email"
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="password"
              autocomplete="new-password"
              placeholder="Create password"
              password-toggle
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="confirmationPassword"
              autocomplete="new-password"
              placeholder="Confirm password"
              password-toggle
              required
            />
          </div>
          { error === 1 ? <span className={classes.span}>Your password should consist of at least eight characters</span> : 
            error === 2 ? <span className={classes.span}>Your passwords don't match!</span> : ""}
          <SlButton variant="primary" type="submit">
            Sign Up
          </SlButton>

          <div className={`row flex_end`}>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <hr className="hr" />
          </div>

          <div className="column">
            <SlButton>
              <SlIcon
                className={classes.icon}
                slot="prefix"
                src="img/information-social-facebook.svg"
              ></SlIcon>
              Continue with Facebook
            </SlButton>
            <SlButton>
              <SlIcon
                className={classes.icon}
                slot="prefix"
                src="img/information-social-google.svg"
              ></SlIcon>
              Continue with Google
            </SlButton>
          </div>
        </form>
      </SlCard>
    </>
  );
};

export default SignUpPage;
