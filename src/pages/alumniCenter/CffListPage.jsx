import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CallForFellowsData } from "../../assets/data/CallForFellowsData";
import { SearchBar } from "../../components/Elements/SearchBar";
import {
  CFFScrollableDetail,
  CFFScrollableList,
} from "../../components/Fragments/AlumniCenterDetailSection";

const CffListPage = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // selectedId berdasarkan URL parameter
  const selectedId = id ? parseInt(id) : null;

  // FUNCTION FOR HANDLE SEARCH BAR
  const filteredFellows = CallForFellowsData.filter(
    (fellow) =>
      fellow.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fellow.jobPosition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // FUNCTION FOR HANDLE CARD CLICK - UPDATE URL
  const handleCardClick = (fellowId) => {
    navigate(`/alumni-center/call-for-fellows/${fellowId}`);
  };

  // FUNCTION FOR RESET SELECTION - KEMBALI KE LIST
  const handleResetSelection = () => {
    navigate("/alumni-center/call-for-fellows");
  };

  // RESET SELECTION WHEN SEARCHING
  useEffect(() => {
    if (searchTerm && selectedId) {
      handleResetSelection();
    }
  }, [searchTerm]);

  // Validate if selected ID exists in data
  useEffect(() => {
    if (selectedId) {
      const fellowExists = CallForFellowsData.find(
        (fellow) => fellow.id === selectedId
      );
      if (!fellowExists) {
        // If fellow doesn't exist, redirect to list
        navigate("/alumni-center/call-for-fellows", { replace: true });
      }
    }
  }, [selectedId, navigate]);

  return (
    <>
      <main className="container mx-auto px-15 pb-6 my-15">
        {/* TITLE PAGE */}
        <h1 className="text-3xl font-bold mb-6 text-[#0D4690]">
          Call For Fellows
        </h1>

        {/* SEARCH BAR */}
        <SearchBar
          searchTerm={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari Posisi Yang Diinginkan"
        />

        {/* SECTION SCROLLABLE + DETAILS CFF */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* SCROLLABLE LIST LEFT */}
          <CFFScrollableList
            filteredFellows={filteredFellows}
            selectedId={selectedId} // Pass selectedId for highlighting
            onCardClick={handleCardClick} // Pass click handler
          />

          {/* SCROLLABLE DETAILS RIGHT*/}
          <CFFScrollableDetail
            callForFellows={CallForFellowsData}
            selectedId={selectedId}
            onClose={handleResetSelection}
          />
        </div>
      </main>
    </>
  );
};

export default CffListPage;
