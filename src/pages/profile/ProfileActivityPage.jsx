import { useState } from "react";
import { ActiveActivityData } from "../../assets/data/ActiveActivityData";
import { ApplicationStatusData } from "../../assets/data/ApplicationStatusData";
import {
  ActiveActivitySection,
  ApplicationStatusSection,
} from "../../components/Fragments/ProfileActivitySection";

const ProfileActivityPage = () => {
  // STATE VARIABLES
  const [selectedId1, setSelectedId1] = useState(ActiveActivityData.id);
  const [selectedId2, setSelectedId2] = useState(ApplicationStatusData.id);
  const [selectedTab, setSelectedTab] = useState(true);

  return (
    <>
      {/* FIXED */}
      <main className="container mx-auto px-15 py-6">
        {/* TITLE PAGE */}
        <h1 className="text-3xl font-bold mb-6 text-[#0D4690]">Kegiatanku</h1>

        {/* TABS */}
        <div className="flex space-x-6 mb-6">
          <button
            className={`text-lg font-semibold cursor-pointer ${
              selectedTab === true
                ? "text-[#0D4690] border-b-2 border-[#0D4690]"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab(true)}
          >
            Kegiatan Aktif
          </button>
          <button
            className={`text-lg font-semibold cursor-pointer ${
              selectedTab === false
                ? "text-[#0D4690] border-b-2 border-[#0D4690]"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab(false)}
          >
            Status Pendaftaran
          </button>
        </div>

        {/* CONTENT */}
        {selectedTab ? (
          <ActiveActivitySection
            ActiveActivityData={ActiveActivityData}
            selectedId={selectedId1}
            setSelectedId={setSelectedId1}
          />
        ) : (
          // APPLICATION STATUS
          <ApplicationStatusSection
            ApplicationStatusData={ApplicationStatusData}
            selectedId={selectedId2}
            setSelectedId={setSelectedId2}
          />
        )}
      </main>
    </>
  );
};

export default ProfileActivityPage;
