import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import AlumniCenterPage from "./pages/AlumniCenterPage";
import AdvocacyCenterPage from "./pages/AdvocacyCenterPage";
import ResearchCenterPage from "./pages/ResearchCenterPage";
import SuratRekomendasi from "./pages/SuratRekomendasiPage";
import AlumniDetail from "./components/Fragments/AlumniDetail";
import EmailVerificationPage from "./pages/EmailVerificationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/alumni-center" element={<AlumniCenterPage />} />
          <Route
            path="/advocacy-center/iysf"
            element={<AdvocacyCenterPage />}
          />
          <Route
            path="/research-center/publikasi"
            element={<ResearchCenterPage />}
          />
          <Route
            path="/research-center/prosiding"
            element={<ResearchCenterPage />}
          />
          <Route
            path="/research-center/my-research"
            element={<ResearchCenterPage />}
          />
          <Route path="/surat-rekomendasi" element={<SuratRekomendasi />} />
          <Route path="/forgot-password" element={<EmailVerificationPage />} />
          <Route path="/alumni/:slug" element={<AlumniDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
