import React, { useState } from "react";
import { StyledDiv } from "./ClientsRegistrationLayout.styled";
import { useNavigate, Link } from "react-router-dom";
import { clientRegisterRequest } from "../../../api-calls/auth";

export default function RegistrationLayout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [registerDate, setregisterDate] = useState("");
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
      firstName,
      lastName,
      email,
      registerDate,
    };

    const clientRegisterResponse = await clientRegisterRequest(body);

    if (clientRegisterResponse) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setregisterDate("");
      navigate("/");
    }

    setIsRegistrationSuccessful(clientRegisterResponse);
  }
  return (
    <StyledDiv>
      <h3>Clients registration page</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="registerDate">Register Date </label>
        <input
          type="datetime-local"
          id="registerDate"
          value={registerDate}
          onChange={(e) => setregisterDate(e.target.value)}
        />
        <br />
        <br />
        <div className="button">
          <button type="submit">Register</button>
        </div>
        <br />
        <Link to="/">Back to main page</Link>
        {registrationUpdateHeading()}
      </form>
    </StyledDiv>
  );
}
