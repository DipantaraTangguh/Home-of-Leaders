import React from "react";
import Navbar from "./components/Layouts/navbar";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import LandingPage from "./pages/HomePage";
import EmailCheckPage from "./pages/EmailCheckPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <>
    <LoginPage />
    <EmailVerificationPage/>
    <EmailCheckPage/>
    <ResetPasswordPage/>
    {/* <Navbar /> */}
    <LandingPage />
    </>
  );
}

export default App;
