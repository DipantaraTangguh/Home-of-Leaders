import React from "react";
import Navbar from "../components/Layouts/navbar";
import FocusArea from "../components/Fragments/FocusArea";
import SeminarRecomendation from "../components/Fragments/SeminarRecomendation";
import CollaborationFlow from "../components/Fragments/CollaborationFlow";
import AlumniSuccessStory from "../components/Fragments/AlumniSuccessStory";
import DetailHomeofLeaders from "../components/Fragments/DetailHomeofLeaders";
import Jumbotron from "../components/Fragments/Jumbotron";
import ProgramDescription from "../components/Fragments/ProgramDescription";

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
    </>
  );
};

export default LandingPage;
