import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import AlumniCenterPage from "./pages/AlumniCenterPage";
import AdvocacyCenterPage from "./pages/AdvocacyCenterPage";
import ResearchCenterPublikasiPage from "./pages/ResearchCenterPublikasiPage";
import RecomendationLetterPage from "./pages/recomendationLetterPage";
import AlumniDetail from "./pages/AlumniDetail";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResearchCenterDetailPublikasi from "./pages/ResearchCenterDetailPublikasi";
import ResearchCenterProsidingPage from "./pages/ResearchCenterProsidingPage";
import ResearchCenterDetailProsiding from "./pages/ResearchCenterDetailProsiding";
import ResearchCenterMyresearchPage from "./pages/ResearchCenterMyResearchPage";
import ResearchCenterDetailMyResearch from "./pages/ResearchCenterDetailMyResearch";
import ResearchCenterProsidingDetailArticle from "./pages/ResearchCenterProsidingDetailArticle";
import CffDetailPage from "./pages/CffDetailPage";
import BaDetailPage from "./pages/BaDetailPage";
import ProfileDataAlumniPage from "./pages/ProfileDataAlumniPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import ProfileNotifikasiPage from "./pages/ProfileNotifikasiPage";
import { NotificationsProvider } from "./contexts/NotificationContext";
import ProfileActivityPage from "./pages/ProfileActivityPage";

function App() {
  return (
    <div>
      <NotificationsProvider>
        <BrowserRouter>
          <Routes>
            {/* Login Page */}
            <Route path="/" element={<LoginPage />} />

            {/* Landing Page */}
            <Route path="/landing-page" element={<LandingPage />} />

            {/* Alumni Center Page */}
            <Route path="/alumni-center" element={<AlumniCenterPage />} />

            {/* Advocacy Center IYSF */}
            <Route
              path="/advocacy-center/iysf"
              element={<AdvocacyCenterPage />}
            />

            {/* Research Center Publikasi Page */}
            <Route
              path="/research-center/publikasi"
              element={<ResearchCenterPublikasiPage />}
            />

            {/* Research Center Detail Publikasi Page */}
            <Route
              path="/research-center/publikasi/:slug"
              element={<ResearchCenterDetailPublikasi />}
            />

            {/* Research Center Prosiding Page */}
            <Route
              path="/research-center/prosiding"
              element={<ResearchCenterProsidingPage />}
            />

            {/* Research Center Detail Prosiding Page */}
            <Route
              path="/research-center/prosiding/:slug"
              element={<ResearchCenterDetailProsiding />}
            />

            {/* Research Center Detail Artikel Prosiding Page */}
            <Route
              path="/research-center/prosiding/artikel/:articleSlug"
              element={<ResearchCenterProsidingDetailArticle />}
            />

            {/* Research Center My Research Page */}
            <Route
              path="/research-center/my-research"
              element={<ResearchCenterMyresearchPage />}
            />

            {/* Research Center Detail My Research Page */}
            <Route
              path="/research-center/my-research/:slug"
              element={<ResearchCenterDetailMyResearch />}
            />

            {/* Surat Rekomendasi Page */}
            <Route
              path="/surat-rekomendasi"
              element={<RecomendationLetterPage />}
            />

            {/* Email Verification Page */}
            <Route
              path="/forgot-password"
              element={<EmailVerificationPage />}
            />

            {/* Reset Password Page */}
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* Alumni Detail Page */}
            <Route path="/alumni/:slug" element={<AlumniDetail />} />

            <Route path="/callforfellows/detail" element={<CffDetailPage />} />

            <Route
              path="/bondingactivities/detail"
              element={<BaDetailPage />}
            />

            {/* Profile Data Alumni */}
            <Route path="/data-alumni" element={<ProfileDataAlumniPage />} />

            {/* Profile Kegiatanku */}
            <Route path="/kegiatanku" element={<ProfileActivityPage />} />

            {/* Profile Settings */}
            <Route path="/settings" element={<ProfileSettingsPage />} />

            {/* Profile Notifikasi Page */}
            <Route path="/notifications" element={<ProfileNotifikasiPage />} />
          </Routes>
        </BrowserRouter>
      </NotificationsProvider>
    </div>
  );
}

export default App;
