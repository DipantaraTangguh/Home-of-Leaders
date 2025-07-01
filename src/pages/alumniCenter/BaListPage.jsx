import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BondingActivitiesData } from "../../assets/data/BondingActivitiesData";
import { SearchBar } from "../../components/Elements/SearchBar";
import {
  BAScrollableDetail,
  BAScrollableList,
} from "../../components/Fragments/AlumniCenterDetailSection";

const BaListPage = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // selectedId berdasarkan URL parameter
  const selectedId = id ? parseInt(id) : null;

  // FUNCTION FOR HANDLE SEARCH BAR
  const filteredBonding = BondingActivitiesData.filter(
    (bonding) =>
      bonding.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bonding.place.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // FUNCTION FOR HANDLE CARD CLICK - UPDATE URL
  const handleCardClick = (bondingId) => {
    navigate(`/alumni-center/bonding-activities/${bondingId}`);
  };

  // FUNCTION FOR RESET SELECTION - KEMBALI KE LIST
  const handleResetSelection = () => {
    navigate("/alumni-center/bonding-activities");
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
      const bondingExists = BondingActivitiesData.find(
        (bonding) => bonding.id === selectedId
      );
      if (!bondingExists) {
        // If bonding activity doesn't exist, redirect to list
        navigate("/alumni-center/bonding-activities", { replace: true });
      }
    }
  }, [selectedId, navigate]);

  return (
    <>
      {/* FIXED */}
      <main className="container mx-auto px-15 pb-6 my-15">
        {/* TITLE PAGE */}
        <h1 className="text-3xl font-bold mb-6 text-[#0D4690]">
          Bonding Activities
        </h1>

        {/* SEARCH BAR */}
        <SearchBar
          searchTerm={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari Program Yang Diinginkan"
        />

        {/* SECTION SCROLLABLE + DETAILS BA */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* SCROLLABLE LIST LEFT */}
          <BAScrollableList
            filteredBonding={filteredBonding}
            selectedId={selectedId} // Pass selectedId untuk highlighting
            onCardClick={handleCardClick} // Pass click handler
          />

          {/* SCROLLABLE LIST RIGHT */}
          <BAScrollableDetail
            bondingActivities={BondingActivitiesData}
            selectedId={selectedId}
            onClose={handleResetSelection} // Optional: untuk tombol close di detail
          />
        </div>
      </main>
    </>
  );
};

export default BaListPage;
