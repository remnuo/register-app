import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInRequest } from "../../../api-calls/auth";
import { StyledDiv } from "./SignIn.styled";

export default function SignInLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongCredential, setIsWrongCredentials] = useState(null);

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    const userId = await signInRequest({ email, password });
    if (userId) {
      localStorage.setItem("loggedInUser", userId);
      navigate("/");
    } else {
      setIsWrongCredentials(true);
    }
  }

  return (
    <StyledDiv>
      <h2>Welcome to page please login</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email </label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <div className="button">
          <button type="submit">Log In</button>
        </div>
        <h3 style={{ display: isWrongCredential ? "block" : "none" }}>wrong email or password</h3>
      </form>
      <p>
        No user please register? <Link to="/auth/signup">Register</Link>
      </p>
    </StyledDiv>
  );
}
