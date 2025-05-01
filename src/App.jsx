import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import AlumniCenterPage from "./pages/AlumniCenterPage";
import AdvocacyCenterPage from "./pages/AdvocacyCenterPage";
import ResearchCenterPublikasiPage from "./pages/ResearchCenterPublikasiPage";
import RecomendationLetterPage from "./pages/recomendationLetterPage";
import AlumniDetail from "./components/Fragments/AlumniDetail";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResearchCenterDetailPublikasi from "./components/Fragments/ResearchCenterDetailPublikasi";
import ResearchCenterProsidingPage from "./pages/ResearchCenterProsidingPage";
import ResearchCenterDetailProsiding from "./components/Fragments/ResearchCenterDetailProsiding";
import ResearchCenterMyresearchPage from "./pages/ResearchCenterMyResearchPage";
import ResearchCenterDetailMyResearch from "./components/Fragments/ResearchCenterDetailMyResearch";

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
            element={<ResearchCenterPublikasiPage />}
          />
          <Route
            path="/research-center/publikasi/:slug"
            element={<ResearchCenterDetailPublikasi />}
          />
          <Route
            path="/research-center/prosiding"
            element={<ResearchCenterProsidingPage />}
          />
          <Route
            path="/research-center/prosiding/:slug"
            element={<ResearchCenterDetailProsiding />}
          />
          <Route
            path="/research-center/my-research"
            element={<ResearchCenterMyresearchPage />}
          />
          <Route
            path="/research-center/my-research/:slug"
            element={<ResearchCenterDetailMyResearch />}
          />
          <Route
            path="/surat-rekomendasi"
            element={<RecomendationLetterPage />}
          />
          <Route path="/forgot-password" element={<EmailVerificationPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/alumni/:slug" element={<AlumniDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
