// LIBLARY
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOOKS
import { NotificationsProvider } from "./contexts/NotificationContext";

// RECOMENDATION LETTER
import RecomendationLetterPage from "./pages/recomendationLetter/RecomendationLetterPage";

// ADVOCACY CENTER
import AdvocacyCenterPage from "./pages/advocacyCenter/AdvocacyCenterPage";

// HOMEPAGE/LANDING PAGE
import LandingPage from "./pages/LandingPage";
import AlumniDetail from "./pages/AlumniDetail";

// AUTH
import LoginPage from "./pages/auth/LoginPage";
import EmailVerificationPage from "./pages/auth/EmailVerificationPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";

// ALUMNI CENTER
import AlumniCenterPage from "./pages/alumniCenter/AlumniCenterPage";
import CffDetailPage from "./pages/alumniCenter/CffDetailPage";
import BaDetailPage from "./pages/alumniCenter/BaDetailPage";

// PROFILE
import ProfileSettingsPage from "./pages/profile/ProfileSettingsPage";
import ProfileNotifikasiPage from "./pages/profile/ProfileNotifikasiPage";
import ProfileDataAlumniPage from "./pages/profile/ProfileDataAlumniPage";
import ProfileActivityPage from "./pages/profile/ProfileActivityPage";

// RESEARCH CENTER
import ResearchCenterPublikasiPage from "./pages/researchCenter/ResearchCenterPublikasiPage";
import ResearchCenterDetailPublikasi from "./pages/researchCenter/ResearchCenterDetailPublikasi";
import ResearchCenterProsidingPage from "./pages/researchCenter/ResearchCenterProsidingPage";
import ResearchCenterDetailProsiding from "./pages/researchCenter/ResearchCenterDetailProsiding";
import ResearchCenterMyresearchPage from "./pages/researchCenter/ResearchCenterMyResearchPage";
import ResearchCenterDetailMyResearch from "./pages/researchCenter/ResearchCenterDetailMyResearch";
import ResearchCenterProsidingDetailArticle from "./pages/researchCenter/ResearchCenterProsidingDetailArticle";

// OUTLET/LAYOUT
import { DashboardLayout } from "./components/Layouts/DashboardLayout";

function App() {
  return (
    <div>
      <NotificationsProvider>
        <BrowserRouter>
          <Routes>
            {/* LOGIN PAGE */}
            <Route path="/" element={<LoginPage />} />

            {/* EMAIL VERRIFICATION PAGE */}
            <Route
              path="/forgot-password"
              element={<EmailVerificationPage />}
            />

            {/* RESET PASSOWRD PAGE */}
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            <Route element={<DashboardLayout />}>
              {/* LANDING PAGE/HOMEPAGE */}
              <Route path="/landing-page" element={<LandingPage />} />

              {/* ALUMNI CENTER PAGE */}
              <Route path="/alumni-center" element={<AlumniCenterPage />} />

              {/* ADVOCACY CENTER IYSF PAGE */}
              <Route
                path="/advocacy-center/iysf"
                element={<AdvocacyCenterPage />}
              />

              {/* RESEARCH CENTER PUBLICATION PAGE*/}
              <Route
                path="/research-center/publication"
                element={<ResearchCenterPublikasiPage />}
              />

              {/* RESEARCH CENTER DETAIL PUBLICATION PAGE */}
              <Route
                path="/research-center/publication/:slug"
                element={<ResearchCenterDetailPublikasi />}
              />

              {/* RESEARCH CENTER PROSIDING PAGE */}
              <Route
                path="/research-center/prosiding"
                element={<ResearchCenterProsidingPage />}
              />

              {/* RESEARCH CENTER PROSIDING DETAIL PAGE */}
              <Route
                path="/research-center/prosiding/:slug"
                element={<ResearchCenterDetailProsiding />}
              />

              {/* RESEARCH CENTER PROSIDING DETAIL ARTICLE PAGE */}
              <Route
                path="/research-center/prosiding/article/:articleSlug"
                element={<ResearchCenterProsidingDetailArticle />}
              />

              {/* RESEARCH CENTER MY RESEARCH PAGE */}
              <Route
                path="/research-center/my-research"
                element={<ResearchCenterMyresearchPage />}
              />

              {/* RESEARCH CENTER MY RESEARCH DETAILS */}
              <Route
                path="/research-center/my-research/:slug"
                element={<ResearchCenterDetailMyResearch />}
              />

              {/* RECOMENDATION LETTER PAGE */}
              <Route
                path="/recommendation-letter"
                element={<RecomendationLetterPage />}
              />

              {/* HOMEPAGE ALUMNI DETAIL */}
              <Route path="/alumni/:slug" element={<AlumniDetail />} />

              {/* ALUMNI CENTER CALL FOR FELLOWS DETAIL PAGE */}
              <Route
                path="/alumni-center/call-for-fellows/"
                element={<CffDetailPage />}
              />

              {/* ALUMNI CENTER BONDING ACTIVITIES DETAIL PAGE */}
              <Route
                path="/alumni-center/bonding-activities/"
                element={<BaDetailPage />}
              />

              {/* PROFILE DROPDOWN ALUMNI DATA PAGE */}
              <Route path="/alumni-data" element={<ProfileDataAlumniPage />} />

              {/* PROFILE DROPDOWN MY ACTIVITY PAGE */}
              <Route path="/my-activity" element={<ProfileActivityPage />} />

              {/* PROFILE DROPDOWN SETTINGS */}
              <Route path="/settings" element={<ProfileSettingsPage />} />

              {/* PROFILE DROPDOWN NOTIFICATIONS PAGE */}
              <Route
                path="/notifications"
                element={<ProfileNotifikasiPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </NotificationsProvider>
    </div>
  );
}

export default App;
