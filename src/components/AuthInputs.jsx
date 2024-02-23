import { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "./styled-components/CustomInput";

/*
 * Will created a div as a STYLED component
 * Back tick => Tagged template or template literals (see mdm).
 */
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <div>
        <p>
          <CustomInput
            label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <CustomInput
            label="Password"
            type="password"
            invalid={emailNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button
          type="button"
          className="text-button text-amber-400 border-0 hover:text-amber-200 mr-2"
        >
          Create a new account
        </button>
        <button
          className="button hover:bg-amber-400 focus:bg-amber-600"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
