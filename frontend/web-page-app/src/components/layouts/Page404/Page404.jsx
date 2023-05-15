import React, { useEffect, useState, useRef } from "react";
import { StyledDiv } from "./Page404.styled";

import { useNavigate } from "react-router-dom";

export default function Page404() {
  const [time, setTime] = useState(5);
  const timeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate("/auth/signin");
    }
  }, [time, navigate]);

  return (
    <StyledDiv>
      <h2>
        Sorry this page does not exist <br />
        Redirecting you to Main page in {time} seconds...
      </h2>
    </StyledDiv>
  );
}
