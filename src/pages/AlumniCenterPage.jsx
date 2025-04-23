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
      <main className=" container mx-auto px-6 py-10">
        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-12 text-gray-800">
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
