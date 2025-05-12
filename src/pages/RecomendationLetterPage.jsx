import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";

import {
  RLHeaderBanner,
  RLTimelineCard,
  RLSubmitForm,
  RLStatus,
} from "../components/Fragments/RecommendationLetterSection";

const RecommendationSection = () => {
  return (
    <>
      <Navbar />
      <section className="relative mb-16 container mx-auto p-6">
        {/* Header Banner */}
        <RLHeaderBanner />

        {/* Timeline Card */}
        <RLTimelineCard />
      </section>
      <RLSubmitForm />

      {/* Recommendation Letter Status */}
      <RLStatus />

      <Footer />
    </>
  );
};

export default RecommendationSection;
