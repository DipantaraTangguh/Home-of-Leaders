import { ArrowLeft } from "lucide-react";
import { AlumniCenterCardBA, AlumniCenterCardCFF, AlumniCenterCardIYSF } from "../Elements/AlumniCenterCard";
import { BAScrollableCardDetails, CFFScrollableCardDetails, IYSFScrollableCardDetails } from "../Elements/AlumniCenterDetailCard";
import { useNavigate } from "react-router-dom";

// CFF SCROLLABLE DETAILS AND SCROLLABLE CARD
export const CFFScrollableList = ({ filteredFellows, setSelectedId }) => {
  return (
    // SCROLLABLE LIST CFF
    <div className="w-full lg:w-1/4 max-h-[80vh] border border-[#DEE2E6] rounded-[20px]">
      {/* POSITION COUNT */}
      <h1 className="text-[#6C757D] font-bold px-4 py-3">
        Total Posisi: {filteredFellows.length}
      </h1>

      {/* SCROLLABLE CARD VERTICAL*/}
      <div className="px-1 py-2 w-full max-h-[70vh] overflow-y-auto space-y-4">
        {filteredFellows.map((fellows) => (
          <AlumniCenterCardCFF
            key={fellows.id}
            fellows={fellows}
            disableButton={true}
            handleClicked={() => setSelectedId(fellows.id)}
          />
        ))}
      </div>
    </div>
  );
};

export const CFFScrollableDetail = ({ callForFellows, selectedId }) => {
  // NAVIGATING THROUGH SCREEN STATE VARIABLES
  const navigate = useNavigate();

  return (
    // SCROLLABLE DETAILS
    <div className="w-full lg:w-full p-6 border border-[#DEE2E6] rounded-[20px] bg-white max-h-[80vh] overflow-hidden">
      {/* STICKY BACK TO DASHBOARD BUTTON */}
      <div className="sticky top-0 z-10 bg-white pb-4">
        <button
          onClick={() => navigate("/alumni-center")}
          className="flex items-center gap-2 w-fit font-bold text-base text-[#0D4690] hover:text-[#0b3d7a] transition"
        >
          <ArrowLeft size={24} />
          <span>Detail Program</span>
        </button>
      </div>

      {/* SCROLLABLE CARD DETAILS */}
      <div
        className="overflow-y-auto px-5 p-2"
        style={{ maxHeight: "calc(80vh - 3.5rem)" }}
      >
        {callForFellows.map(
          (fellows) =>
            fellows.id === selectedId && (
              <CFFScrollableCardDetails
                key={fellows.id}
                callForFellows={fellows}
              />
            )
        )}
      </div>
    </div>
  );
};

// BA SCROLLABLE DETAILS AND SCROLLABLE CARD
export const BAScrollableList = ({ filteredBonding, setSelectedId }) => {
  return (
    // SCROLLABLE LIST BONDING ACTIVITIES
    <div className="w-full lg:w-1/4 max-h-[80vh] border border-[#DEE2E6] rounded-[20px]">
      {/* POSITION COUNT */}
      <h1 className="text-[#6C757D] font-bold px-4 py-3">
        Total Program: {filteredBonding.length}
      </h1>

      {/* SCROLLABLE CARD VERTICAL */}
      <div className="px-1 py-2 w-full max-h-[70vh] overflow-y-auto space-y-4">
        {filteredBonding.map((bonding) => (
          <AlumniCenterCardBA
            key={bonding.id}
            bonding={bonding}
            disableButton={true}
            handleClicked={() => setSelectedId(bonding.id)}
          />
        ))}
      </div>
    </div>
  );
};

export const BAScrollableDetail = ({ bondingActivities, selectedId }) => {
  // NAVIGATING THROUGH SCREEN
  const navigate = useNavigate();

  return (
    // SCROLLABLE DETAILS
    <div className="w-full lg:w-full p-6 border border-[#DEE2E6] rounded-[20px] bg-white max-h-[80vh] overflow-hidden ">
      {/* STICKY BACK TO DASHBOARD BUTTON */}
      <div className="sticky top-0 z-10 bg-white pb-4">
        <button
          onClick={() => navigate("/alumni-center")}
          className="flex items-center gap-2 w-fit font-bold text-base text-[#0D4690] hover:text-[#0b3d7a] transition"
        >
          <ArrowLeft size={24} />
          <span>Detail Program</span>
        </button>
      </div>

      {/* SCROLLABLE CARD DETAILS */}
      <div
        className="overflow-y-auto px-5 py-2"
        style={{ maxHeight: "calc(80vh - 3.5rem)" }}
      >
        {bondingActivities.map(
          (bonding) =>
            bonding.id === selectedId && (
              <BAScrollableCardDetails
                key={bonding.id}
                bondingActivities={bonding}
              />
            )
        )}
      </div>
    </div>
  );
};

// IYSF SCROLLABLE DETAILS AND SCROLLABLE CARD
export const IYSFScrollableList = ({ advocacyCentre, setSelectedId }) => {
  return (
    // SCROLLABLE LIST IYSF
    <div className="w-full lg:w-1/4 max-h-[80vh] border border-[#DEE2E6] rounded-[20px]">
      {/* PROGRAM COUNT */}
      <h1 className="text-[#6C757D] font-bold px-4 py-3">
        Total Program: {advocacyCentre.length}
      </h1>

      {/* SCROLLABLE LIST VERTICAL */}
      <div className="px-1 py-2 w-full max-h-[70vh] overflow-y-auto space-y-4">
        {advocacyCentre.map((iysf) => (
          <AlumniCenterCardIYSF
            key={iysf.id}
            iysf={iysf}
            disableButton={true}
            handleClicked={() => setSelectedId(iysf.id)}
          />
        ))}
      </div>
    </div>
  );
};

export const IYSFScrollableDetail = ({ advocacyCentre, selectedId }) => {
  return (
    // SCROLLABLE DETAILS
    <div className="w-full lg:w-full p-6 border border-[#DEE2E6] rounded-[20px] bg-white max-h-[80vh] overflow-hidden ">
      {/* INFORMATION DETAILS */}
      <h1 className="font-bold text-base text-[#0D4690] hover:text-[#0b3d7a] mb-2">
        Detail Program
      </h1>

      {/* SCROLLABLE CARD DETAILS */}
      <div
        className="overflow-y-auto px-5 py-2"
        style={{ maxHeight: "calc(80vh - 3.5rem)" }}
      >
        {advocacyCentre.map(
          (iysf) =>
            iysf.id === selectedId && (
              <IYSFScrollableCardDetails key={iysf.id} advocacyCentre={iysf} />
            )
        )}
      </div>
    </div>
  );
};
