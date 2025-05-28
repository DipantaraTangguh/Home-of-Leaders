import React from "react";
import { useState } from "react";
import {
  AlumniCenterCardBA,
  AlumniCenterCardCFF,
  AlumniCenterCardIYSF,
} from "../Elements/AlumniCenterCard";
import {
  BAScrollableCardDetails,
  CFFScrollableCardDetails,
  IYSFScrollableCardDetails,
} from "../Elements/AlumniCenterDetailCard";
import { SearchBar } from "../Elements/SearchBar";
import { NoProgramSelected } from "../Elements/NoProgramSelected";
import { PresencePopUp} from "../Elements/PresencePopUp"; 
import { SuccessPresencePopUp } from "../Elements/SuccessPresencePopUp"

export const ActiveActivitySection = ({
  ActiveActivityData,
  selectedId,
  setSelectedId,
}) => {
  //SHOWING POPUP PRESENCE BUTTON
  const [showPopUp, setShowPopUp] = useState(false);
  const [showSuccessPopUp, setShowSuccessPupUp] = useState(false);

  const handlePresence = () => {
    setShowPopUp(true);
  };

  const handleClose = () => {
    setShowPopUp(false);
  };

  const handleConfirm = () => {
    setShowPopUp(false);
    setTimeout(() => {
      setShowSuccessPupUp(true);
    }, 300);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPupUp(false);
  };

  // RENDERING CARD
  const renderingCardType = (activity) => {
    switch (activity.type) {
      case "Call for Fellows":
        return (
          <AlumniCenterCardCFF
            fellows={activity}
            disableButton={true}
            handleClicked={() => setSelectedId(activity.id)}
          />
        );
      case "Bonding Activities":
        return (
          <AlumniCenterCardBA
            bonding={activity}
            disableButton={true}
            handleClicked={() => setSelectedId(activity.id)}
          />
        );
      case "IYSF":
        return (
          <AlumniCenterCardIYSF
            iysf={activity}
            disableButton={true}
            handleClicked={() => setSelectedId(activity.id)}
          />
        );
      default:
        return null;
    }
  };

  // RENDERING DETAILS
  const renderingDetailsType = (activity) => {
    switch (activity.type) {
      case "Call for Fellows":
        return (
          <CFFScrollableCardDetails
            callForFellows={activity}
            hiddenApplyButton={true}
          />
        );
      case "Bonding Activities":
        return (
          <BAScrollableCardDetails
            bondingActivities={activity}
            buttonOption="Presensi"
            apllyingNowHandleClick={handlePresence}
          />
        );
      case "IYSF":
        return (
          <IYSFScrollableCardDetails
            advocacyCentre={activity}
            buttonOption="Presensi"
            apllyingNowHandleClick={handlePresence}
          />
        );
      default:
        return null;
    }
  };

  // CONDITONAL REFERENCE FOR RENDERING
  const selectedActivity = ActiveActivityData.find(
    (activity) => activity.id === selectedId
  );

  return (
    <>
      {/* SEARCH BAR */}
      <SearchBar placeholder="Cari Kegiatan Aktif" />

      {/* SECTION SCROLLABLE + DETAILS ACTIVITY*/}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* SCROLLABLE LIST */}
        <div className="w-full lg:w-1/4 max-h-[80vh] border border-[#DEE2E6] rounded-[20px]">
          {/* PROGRAM COUNT */}
          <h1 className="text-[#6C757D] font-bold px-4 py-3">
            Total Program: {ActiveActivityData.length}
          </h1>

          {/* SCROLLABLE LIST VERTICAL */}
          <div className="px-1 py-2 w-full max-h-[70vh] overflow-y-auto space-y-4">
            {ActiveActivityData.map((activity) =>
              React.cloneElement(renderingCardType(activity), {
                key: activity.id,
              })
            )}
          </div>
        </div>

        {/* SCROLLABLE DETAILS */}
        <div className="w-full lg:w-full p-6 border border-[#DEE2E6] rounded-[20px] bg-white max-h-[80vh] overflow-hidden ">
          <div
            className="overflow-y-auto px-5 py-2"
            style={{ maxHeight: "calc(80vh - 3.5rem)" }}
          >
            {selectedActivity ? (
              renderingDetailsType(selectedActivity)
            ) : (
              <NoProgramSelected />
            )}
          </div>
        </div>

        {/* SHOWING POPUP APPLIED NOW BUTTON */}
        <PresencePopUp
          isOpen={showPopUp}
          onClose={handleClose}
          onConfirm={handleConfirm}
        />

        <SuccessPresencePopUp
          isOpen={showSuccessPopUp}
          onClose={handleCloseSuccessPopup}
        />
      </div>
    </>
  );
};

export const ApplicationStatusSection = ({
  ApplicationStatusData,
  selectedId,
  setSelectedId,
}) => {
  // RENDERING CARD
  const renderingCardType = (activity) => {
    switch (activity.type) {
      case "Bonding Activities":
        return (
          <AlumniCenterCardBA
            bonding={activity}
            disableButton={true}
            handleClicked={() => setSelectedId(activity.id)}
          />
        );
      case "IYSF":
        return (
          <AlumniCenterCardIYSF
            iysf={activity}
            disableButton={true}
            handleClicked={() => setSelectedId(activity.id)}
          />
        );
      default:
        return null;
    }
  };

  // RENDERING DETAILS
  const renderingDetailsType = (activity) => {
    switch (activity.type) {
      case "Bonding Activities":
        return (
          <BAScrollableCardDetails
            bondingActivities={activity}
            buttonOption="Daftar Sekarang"
            disableButtonOption={true}
          />
        );
      case "IYSF":
        return (
          <IYSFScrollableCardDetails
            advocacyCentre={activity}
            buttonOption="Daftar Sekarang"
            disableButtonOption={true}
          />
        );
      default:
        return null;
    }
  };

  // CONDITONAL REFERENCE FOR RENDERING
  const selectedActivity = ApplicationStatusData.find(
    (status) => status.id === selectedId
  );

  return (
    <>
      {/* SEARCH BAR */}
      <SearchBar placeholder="Cari Kegiatan Aktif" />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* SCROLLABLE LIST */}
        <div className="w-full lg:w-1/4 max-h-[80vh] border border-[#DEE2E6] rounded-[20px]">
          {/* PROGRAM COUNT */}
          <h1 className="text-[#6C757D] font-bold px-4 py-3">
            Total Program: {ApplicationStatusData.length}
          </h1>

          {/* SCROLLABLE LIST VERTICAL */}
          <div className="px-1 py-2 w-full max-h-[70vh] overflow-y-auto space-y-4">
            {ApplicationStatusData.map((activity) =>
              React.cloneElement(renderingCardType(activity), {
                key: activity.id,
              })
            )}
          </div>
        </div>

        {/* SCROLLABLE DETAILS */}
        <div className="w-full lg:w-full p-6 border border-[#DEE2E6] rounded-[20px] bg-white max-h-[80vh] overflow-hidden ">
          <div
            className="overflow-y-auto px-5 py-2"
            style={{ maxHeight: "calc(80vh - 3.5rem)" }}
          >
            {selectedActivity ? (
              renderingDetailsType(selectedActivity)
            ) : (
              <NoProgramSelected />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
