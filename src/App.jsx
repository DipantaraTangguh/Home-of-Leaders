import React from "react";
import Navbar from "./components/Layouts/navbar";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";

function App() {
  return (
    <div>
      <LoginPage />
      <EmailVerificationPage/>
    </div>
  );
}

export default App;
