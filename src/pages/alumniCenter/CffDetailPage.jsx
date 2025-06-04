import Navbar from "../../components/Layouts/Navbar";
import { useState, useEffect } from "react";
import { Footer } from "../../components/Layouts/Footer";
import { CallForFellowsData } from "../../assets/data/CallForFellowsData";
import { SearchBar } from "../../components/Elements/SearchBar";
import { CFFScrollableDetail, CFFScrollableList } from "../../components/Fragments/AlumniCenterDetailSection";

const CffDetailPage = () => {
  // STATE VARIABLES
  const [selectedId, setSelectedId] = useState(CallForFellowsData.id);
  const [searchTerm, setSearchTerm] = useState("");

  // FUNCTION FOR HANDLE SEARCH BAR
  const filteredFellows = CallForFellowsData.filter((fellow) =>
    fellow.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fellow.jobPosition.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <h1 className="text-3xl font-bold mb-6 text-[#0D4690]">Call For Fellows</h1>

        {/* SEARCH BAR */}
        <SearchBar searchTerm={(e) => setSearchTerm(e.target.value)} placeholder="Cari Posisi Yang Diinginkan"/>

        {/* SECTION SCROLLABLE + DETAILS CFF */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* SCROLLABLE LIST LEFT */}
          <CFFScrollableList filteredFellows={filteredFellows} setSelectedId={setSelectedId} />


          {/* SCROLLABLE DETAILS RIGHT*/}
          <CFFScrollableDetail callForFellows={CallForFellowsData} selectedId={selectedId} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CffDetailPage;
