import {
  CallForFellowsSection,
  BondingActivitiesSection,
  IYSFSection,
} from "../components/Fragments/AlumniCenterSection";
import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";

function AlumniCenterPage() {
  return (
    <>
      <Navbar></Navbar>
      {/* FIXED */}
      <main className="container mx-auto py-6 px-15 pb-20">
        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-12 text-[#0D4690]">
          Alumni Center
        </h1>

        {/* COLLECTION ALUMNI CENTER ACTIVITY SECTIONS */}
        <CallForFellowsSection />

        <BondingActivitiesSection />

        <IYSFSection />
      </main>
      <Footer />
    </>
  );
}

export default AlumniCenterPage;
