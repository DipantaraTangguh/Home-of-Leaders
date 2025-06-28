import Navbar from "../../components/Layouts/Navbar";
import { useState, useEffect } from "react";
import { Footer } from "../../components/Layouts/Footer";
import { BondingActivitiesData } from "../../assets/data/BondingActivitiesData";
import { SearchBar } from "../../components/Elements/SearchBar";
import { BAScrollableDetail, BAScrollableList } from "../../components/Fragments/AlumniCenterDetailSection";

const BaDetailPage = () => {
  // STATE VARIABLES
  const [selectedId, setSelectedId] = useState(BondingActivitiesData.id);
  const [searchTerm, setSearchTerm] = useState("");
  
  // FUNCTION FOR HANDLE SEARCH BAR
  const filteredBonding = BondingActivitiesData.filter((bonding) =>
    bonding.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bonding.place.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // FUNCTION FOR RESET SELECTED ID IF USER TYPING IN SEARCH BAR
  useEffect(() => {
    setSelectedId(null);
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      {/* FIXED */}
      <main className="container mx-auto px-15 py-6 my-15">
        {/* TITLE PAGE */}
        <h1 className="text-3xl font-bold mb-6 text-[#0D4690]">Bonding Activities</h1>

        {/* SEARCH BAR */}
        <SearchBar searchTerm={(e) => setSearchTerm(e.target.value)} placeholder="Cari Program Yang Diinginkan" />

        {/* SECTION SCROLLABLE + DETAILS BA */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* SCROLLABLE LIST LEFT */}
          <BAScrollableList filteredBonding={filteredBonding} setSelectedId={setSelectedId} />

          {/* SCROLLABLE LIST RIGHT */}
          <BAScrollableDetail bondingActivities={BondingActivitiesData} selectedId={selectedId}/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BaDetailPage;