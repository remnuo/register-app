import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../MainHeader/MainHeader";

export default function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      navigate("/auth/signin");
    }
  }, [navigate]);

  return (
    <div>
      <MainHeader />
    </div>
  );
}
