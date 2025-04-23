import React from "react";
import Navbar from "./components/Layouts/navbar";
import { Footer } from "./components/Layouts/Footer";
import AlumniCenterPage from "./pages/AlumniCenterPage";

function App() {
  return (
    <>
      <Navbar />
      <AlumniCenterPage />
      <Footer />
    </>
  );
}

export default App;
