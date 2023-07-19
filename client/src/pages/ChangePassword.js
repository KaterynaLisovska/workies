import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FlexiPasswordChecklist } from "react-flexi-password-checklist";
import { v4 as uuidv4 } from "uuid";

import { SlCard, SlInput, SlButton } from "@shoelace-style/shoelace/dist/react";

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
  });
  const [generatedUUID, setGeneratedUUID] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const successHandler = (event) => {
    navigate("/success");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const parts = email.split("@");

    if (parts.length !== 2) {
      return false;
    }

    const domainParts = parts[1].split(".");

    return emailRegex.test(email) && domainParts.length === 2;
  };

  const isPasswordMatch = (password, confirmationPassword) => {
    if (password === confirmationPassword) {
      return true;
    } else {
      return false;
    }
  };

  const uuidGenerateHandler = () => {
    if (isValidEmail(formData.email)) {
      const uuid = uuidv4();
      setGeneratedUUID(uuid);

      const newPath = `${location.pathname}?${uuid}`;
      navigate(newPath);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isValidEmail(formData.email)) {
      console.log(`Email: ${formData.email}`);
    } else if (
      isPasswordMatch(formData.password, formData.confirmationPassword)
    ) {
      console.log("success");
    }
  };

  const cancelHandler = (event) => {
    navigate("/login");
  };

  return (
    <>
      <SlCard className="form">
        {generatedUUID === null ? (
          <form className="column" onSubmit={submitHandler}>
            <h1 className="text_position">Change Password</h1>
            <div>
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
              <SlButton
                variant="danger"
                className="button_size"
                onClick={cancelHandler}
              >
                Cancel
              </SlButton>
              <SlButton
                variant="success"
                className="button_size"
                type="submit"
                onClick={uuidGenerateHandler}
              >
                Send request
              </SlButton>
            </div>
          </form>
        ) : (
          <form className="column" onSubmit={submitHandler}>
            <div className="column flex_center">
              <SlInput
                onInput={inputHandler}
                type="password"
                name="password"
                autocomplete="new-password"
                placeholder="New password"
                password-toggle
                required
              ></SlInput>
              <SlInput
                onInput={inputHandler}
                type="password"
                name="confirmationPassword"
                autocomplete="new-password"
                placeholder="Confirm new password"
                password-toggle
                required
              ></SlInput>
            </div>
            <FlexiPasswordChecklist
              password={formData.password}
              confirmationPassword={formData.confirmationPassword}
              matchPasswords={isPasswordMatch(
                formData.password,
                formData.confirmationPassword
              )}
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
            <div className="row flex_center">
              <SlButton
                variant="danger"
                className="button_size"
                onClick={cancelHandler}
              >
                Cancel
              </SlButton>
              <SlButton
                variant="success"
                className="button_size"
                type="submit"
                onClick={successHandler}
              >
                Confirm
              </SlButton>
            </div>
          </form>
        )}
      </SlCard>
    </>
  );
};

export default ChangePasswordPage;
