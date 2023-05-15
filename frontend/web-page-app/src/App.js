import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationLayout from "./components/layouts/RegistrationLayout/RegistrationLayout";
import SignInLayout from "./components/layouts/SignInLayout/SignInLayout";
import Page404 from "./components/layouts/Page404/Page404";
import ClientsRegistrationLayout from "./components/layouts/ClientsRegistrationLayout/ClientsRegistrationLayout";
import MainLayout from "./components/layouts/MainLayout/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/auth">
          <Route path="signin" element={<SignInLayout />} />
          <Route path="signup" element={<RegistrationLayout />} />
          <Route path="register" element={<ClientsRegistrationLayout />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
