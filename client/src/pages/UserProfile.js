import { useState } from "react";
import { Link } from "react-router-dom";

import { SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";

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
      <div className={`${classes.user_profile_form}`}>
        <div className="column" onSubmit={submitHandler}>
          <h1 className="text_position">My profile page</h1>
          <div className="column">
            <fieldset>
              <legend>User data</legend>
              <label>Email</label>
              <SlInput
                onInput={inputHandler}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <label>Cellphone</label>
              <SlInput
                onInput={inputHandler}
                type="tel"
                name="tel"
                placeholder="Phone number"
                required
              />
              <label>First Name</label>
              <SlInput
                onInput={inputHandler}
                type="text"
                name="firstname"
                placeholder="First Name"
                required
              />
              <label>Last Name</label>
              <SlInput
                onInput={inputHandler}
                type="text"
                name="lastname"
                placeholder="Last Name"
                required
              />
            </fieldset>
            <fieldset>
              <legend>Password</legend>
              <label>Current Password</label>
              <SlInput
                onInput={inputHandler}
                type="password"
                name="password"
                placeholder="Create password"
                password-toggle
                required
              />
              <label>New Password</label>
              <SlInput
                onInput={inputHandler}
                type="password"
                name="newPassword"
                placeholder="New password"
                password-toggle
                required
              />
              <label>Confirm New Password</label>
              <SlInput
                onInput={inputHandler}
                type="password"
                name="confirmNewPassword"
                placeholder="Confirm new password"
                password-toggle
                required
              />
            </fieldset>
          </div>
          <SlButton variant="primary" type="submit">
            Sign Up
          </SlButton>

          <div className={`row flex_end`}>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
