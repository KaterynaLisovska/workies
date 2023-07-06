import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SlCard, SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";

import "../App.css";

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({ email: "" });

  const navigate = useNavigate();

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
    navigate("/signin");
  };

  return (
    <>
      <SlCard className="form">
        <form className="column" onSubmit={submitHandler}>
          <h1 className="text_position">Change Password</h1>
          <div className="column">
            <SlInput
              onInput={inputHandler}
              type="email"
              name="email"
              autocomplete="username"
              placeholder="Email"
              required
            />
          </div>
          <div className="row flex_center">
            <SlButton variant="danger" className="button_size" onClick={cancelHandler}>Cancel</SlButton>
            <SlButton variant="success" className="button_size" type="submit">
              Send request
            </SlButton>
          </div>
        </form>
      </SlCard>
    </>
  );
};

export default ChangePasswordPage;
