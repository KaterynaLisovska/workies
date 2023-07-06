import { useState } from "react";
import { Link } from "react-router-dom";

import {
  SlCard,
  SlInput,
  SlButton,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";

import "../App.css";

const LogInPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(`Email: ${formData.email}, Password: ${formData.password}`);

    if (formData.password !== formData.confirmationPassword) {
      // TODO apply validation 
      // NOTE check password length, check email and password (pair) in database  
    }
  };

  return (
    <>
      <SlCard className="form">
        <form className="column" onSubmit={submitHandler}>
          <h1 className="text_position">Log In</h1>
          <div className="column">
            <SlInput
              onInput={inputHandler}
              type="email"
              name="email"
              autocomplete="username"
              placeholder="Enter email"
              required
            />
            <SlInput
              onInput={inputHandler}
              type="password"
              name="password"
              placeholder="Enter password"
              autocomplete="current-password"
              password-toggle
              required
            />
          </div>
          <div className={`row flex_end`}>
            <Link to="../changepassword">Forgot password?</Link>
          </div>
          <SlButton variant="primary" type="submit">
            Log In
          </SlButton>

          <div className={`row flex_end`}>
            <span>Don't have an account yet?</span>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div>
            <hr className="hr" />
          </div>
          
          <div className="column">
            <SlButton>
              <SlIcon
                className="icon"
                slot="prefix"
                src="img/information-social-facebook.svg"
              ></SlIcon>
              Continue with Facebook
            </SlButton>
            <SlButton>
              <SlIcon
                className="icon"
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

export default LogInPage;
