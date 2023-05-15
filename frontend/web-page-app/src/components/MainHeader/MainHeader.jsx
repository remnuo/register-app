import React from "react";
import { StyledDiv } from "./MainHeader.styled";
import { Routes, Route, Link } from "react-router-dom";
import SignOutButton from "../SignOutButton/SignOutButton";
import GetList from "../../components/GetList/GetList";

export default function MainHeader() {
  return (
    <StyledDiv>
      <nav>
        <Link to={"/"}> Home </Link>
        <Link to={"/auth/register"}> Register new client </Link>
      </nav>
      <Routes>
        <Route path="/auth" />
      </Routes>
      <h2>Registered clients list</h2>
      <GetList />
      <br />
      <div className="button">
        <SignOutButton />
      </div>
    </StyledDiv>
  );
}
