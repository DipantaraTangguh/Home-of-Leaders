import { CallForFellowsSection, BondingActivitiesSection, IYSFSection } from "../components/Fragments/AlumniCenterSection";

function AlumniCenterPage() {
  return (
    <>
      {/* FIXED */}
      <main className="max-w-[85vw] mx-auto py-12">
        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-12 text-gray-800">
          Alumni Center
        </h1>

        {/* COLLECTION ALUMNI CENTER ACTIVITY SECTIONS */}
        <CallForFellowsSection />

        <BondingActivitiesSection/>

        <IYSFSection/>
      </main>
    </>
  );
}

export default AlumniCenterPage;
