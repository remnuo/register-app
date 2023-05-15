import React, { useState } from "react";
import { StyledDiv } from "./RegistrationLayout.styled";
import { useNavigate, Link } from "react-router-dom";
import { signUpRequest } from "../../../api-calls/auth";

export default function RegistrationLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(null);

  const navigate = useNavigate();

  function registrationUpdateHeading() {
    if (isRegistrationSuccessful === false) {
      return <h1>Registration failed</h1>;
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    const signupResponse = await signUpRequest(body);

    if (signupResponse) {
      setEmail("");

      setPassword("");

      navigate("/auth/signin");
    }

    setIsRegistrationSuccessful(signupResponse);
  }
  return (
    <StyledDiv>
      <h3>Register new account</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <div className="button">
          <button type="submit">Register</button>
        </div>
        <br />
        <Link to="/auth/signin">Return to login page</Link>
        {registrationUpdateHeading()}
      </form>
    </StyledDiv>
  );
}
