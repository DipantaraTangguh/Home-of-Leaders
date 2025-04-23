import React from "react";
import FocusArea from "../components/Fragments/FocusArea";
import SeminarRecomendation from "../components/Fragments/SeminarRecomendation";
import CollaborationFlow from "../components/Fragments/CollaborationFlow";
import AlumniSuccessStory from "../components/Fragments/AlumniSuccessStory";
import DetailHomeofLeaders from "../components/Fragments/DetailHomeofLeaders";
import Jumbotron from "../components/Fragments/Jumbotron";
import ProgramDescription from "../components/Fragments/ProgramDescription";
import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";

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
