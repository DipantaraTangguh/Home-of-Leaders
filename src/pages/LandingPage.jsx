import React from "react";
import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";
import {
  Jumbotron,
  ProgramDescription,
  FocusArea,
  SeminarRecomendation,
  CollaborationFlow,
  AlumniSuccessStory,
  DetailHomeofLeaders,
} from "../components/Fragments/LandingPageSection";

const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Jumbotron */}
      <Jumbotron />

      {/* Program Description */}
      <ProgramDescription />

      {/* Bidang Fokus */}
      <FocusArea />

      {/* Rekomendasi Seminar Lanjutan */}
      <SeminarRecomendation />

      {/* Alur Kolaborasi */}
      <CollaborationFlow />

      {/* Alumni Success Story */}
      <AlumniSuccessStory />

      {/* Detail Home of Leaders */}
      <DetailHomeofLeaders />

      <Footer />
    </>
  );
};

export default LandingPage;
