import { useState } from "react";
import { Link } from "react-router-dom";

import {
  SlCard,
  SlInput,
  SlButton,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";

import classes from "./UserProfile.module.css";

const UserProfilePage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      `Email: ${formData.email}, Password: ${formData.password}, Confirmation Password: ${formData.confirmationPassword}`
    );

    if (formData.password !== formData.confirmationPassword) {
      //      TODO apply validation
    }
  };

  return (
    <>
      <SlCard className={`${classes.user_profile_form}`}>
        <form className="container_column" onSubmit={submitHandler}>
          <h1 className="h1">My profile page</h1>
          <div className="container_column">
            <SlInput
              onInput={inputHandler}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <SlInput
              onInput={inputHandler}
              type="tel"
              name="tel"
              placeholder="Phone number"
              required
            />
            <SlInput
              onInput={inputHandler}
              type="text"
              name="firstname"
              placeholder="First Name"
              required
            />
            <SlInput
              onInput={inputHandler}
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="password"
              placeholder="Create password"
              password-toggle
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="confirmationPassword"
              placeholder="Confirm password"
              password-toggle
              required
            />
          </div>
          <SlButton variant="primary" type="submit">
            Sign Up
          </SlButton>

          <div className={`container_row flex_end`}>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
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

export default UserProfilePage;