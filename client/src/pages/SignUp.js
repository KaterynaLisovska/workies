import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FlexiPasswordChecklist } from "react-flexi-password-checklist";

import { SlCard } from "@shoelace-style/shoelace/dist/react";
import { SlInput } from "@shoelace-style/shoelace/dist/react";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";

import classes from "./SignUp.module.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [allFieldsRequired, setAllFieldsRequired] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef(null);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const successHandler = (event) => {
    navigate("/success");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const parts = email.split("@");

    if (parts.length !== 2) {
      return false;
    }

    const domainParts = parts[1].split(".");

    return emailRegex.test(email) && domainParts.length === 2;
  };

  const validatePasswordMatch = (password, confirmationPassword) => {
    if (password === confirmationPassword) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPasswordMatch = validatePasswordMatch(
      formData.password,
      formData.confirmationPassword
    );

    const fieldRequired =
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.confirmationPassword.trim() !== "";

    if (!fieldRequired) {
      return;
    } else {
      setAllFieldsRequired(true);
      if (!isEmailValid) {
        setEmailError("Invalid email format");
        return;
      } else if (!isPasswordMatch) {
        setPasswordError("Passwords don't match");
        return;
      }

      formRef.current.reset();
    }
  };

  return (
    <>
      <SlCard className={classes.sign_up_form}>
        <form
          className="column center"
          onSubmit={submitHandler}
          ref={formRef}
          noValidate
        >
          <h1>Create your account</h1>
          <div className="column">
            <SlInput
              onInput={inputHandler}
              type="email"
              name="email"
              autocomplete="username"
              placeholder="Email"
              className={emailError ? classes.errorInput : ""}
            />
            {emailError && <p>{emailError}</p>}
            <SlInput
              onInput={inputHandler}
              type="password"
              name="password"
              autocomplete="new-password"
              placeholder="Create password"
              password-toggle
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="confirmationPassword"
              autocomplete="new-password"
              placeholder="Confirm password"
              password-toggle
            />
          </div>
          {allFieldsRequired && <p>All fields are required!</p>}
          <FlexiPasswordChecklist
            password={formData.password}
            confirmationPassword={formData.confirmationPassword}
            matchPasswords={validatePasswordMatch(formData.password, formData.confirmationPassword)}
            config={{
              minLength: 12,
              requireCapital: true,
              requireNumber: true,
              requireSpecialChar: true,
              matchPasswords: true,
              conditionTexts: {
                minLength: "Password must consist of 12 characters",
                requireCapital:
                  "Password must have at least one uppercase letter",
                requireNumber: "Password must have at least one number",
                requireSpecialChar:
                  "Password must have at least one special character",
                matchPasswordsText: "Passwords must match",
              },
            }}
          />
          {/* <SlButton variant="primary" type="submit" onClick={true ? "" : successHandler}> */}
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
