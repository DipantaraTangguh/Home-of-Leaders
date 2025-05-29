import { AlarmClock, MapPin, CalendarDays } from "lucide-react";

// ALUMNI CENTER CARD FOR EVERY SECTION
// AC CARD FOR CALL FOR FELLOWS
export const AlumniCenterCardCFF = ({
  fellows,
  disableButton,
  handleClicked,
}) => {
  return (
    <div
      onClick={handleClicked}
      className="snap-start min-w-[250px] sm:min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md hover:bg-gray-100 transition duration-300 p-4 flex flex-col justify-between"
    >
      {/* LOGO + BADGE WRAPPER */}
      <div className="relative h-[180px] w-[300px] rounded-xl overflow-hidden mb-4">
        <div className="absolute top-2 right-2 bg-[#DDF5EA] text-[#34A853] text-[10px] px-2 py-1 rounded-full font-medium z-10">
          On Going
        </div>
        <img
          src={fellows.companyImage}
          alt="Company Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mb-2">
        <p className="text-xs text-gray-500">{fellows.companyName}</p>
        <p className="text-lg font-bold leading-tight">{fellows.jobPosition}</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap text-xs font-medium mb-3">
        {fellows.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-orange-100 text-[#E89229] px-2 py-1 rounded-full"
          >
            {tag.placement} {tag.categorize}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="text-sm text-gray-700 mb-4 space-y-1">
        <p className="flex items-center gap-2">
          <AlarmClock size="20" /> {fellows.duration}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size="20" /> {fellows.place}
        </p>
        <p className="flex items-center gap-2">
          <CalendarDays size="20" /> Batas Pendaftaran: {fellows.applyingDate}
        </p>
        <p className="text-xs text-gray-400">
          {fellows.dateWhenMakeInformation}
        </p>
      </div>

      {/* Button */}
      {!disableButton && (
        <button className="bg-[#0B4A93] text-white py-2 rounded-lg hover:bg-[#083b77] transition text-sm font-semibold">
          Lihat Detail
        </button>
      )}
    </div>
  );
};

// AC CARD FOR BONDING ACTIVITIES
export const AlumniCenterCardBA = ({
  bonding,
  disableButton,
  handleClicked,
}) => {
  return (
    <div
      onClick={handleClicked}
      className="snap-start min-w-[250px] sm:min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md hover:bg-gray-100 transition duration-300 p-4 flex flex-col justify-between"
    >
      {/* LOGO + BADGE WRAPPER */}
      <div className="relative h-[180px] w-[300px] rounded-xl overflow-hidden mb-4">
        <div
          className={`absolute top-2 right-2 ${
            bonding.currentEvent === "Sudah Daftar"
              ? "bg-[#FFF3CD] text-[#FFC107]"
              : bonding.currentEvent === "Belum Lolos"
              ? "bg-[#F8D7DA] text-[#DC3545]"
              : bonding.currentEvent === "Closed"
              ? "bg-[#F8D7DA] text-[#DC3545]"
              : "bg-[#DDF5EA] text-[#34A853]"
          } text-[10px] px-2 py-1 rounded-full font-medium z-10`}
        >
          {bonding.currentEvent}
        </div>
        <img
          src={bonding.eventImage[0]}
          alt="Company Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mb-2">
        <p className="text-xs text-gray-500">Bakrie Center Foundation</p>
        <p className="text-lg font-bold leading-tight">{bonding.eventName}</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap text-xs font-medium mb-3">
        <span className="bg-orange-100 text-[#E89229] px-2 py-1 rounded-full">
          Offline
        </span>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-700 mb-4 space-y-1">
        <p className="flex items-center gap-2">
          <AlarmClock size="20" /> {bonding.eventDuration}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size="20" /> {bonding.place}
        </p>
        <p className="flex items-center gap-2">
          <CalendarDays size="20" /> Batas Pendaftaran:{" "}
          {bonding.applyingDeadline}
        </p>
        <p className="text-xs text-gray-400">
          {bonding.dateWhenMakeInformation}
        </p>
      </div>

      {/* Button */}
      {!disableButton && (
        <button className="bg-[#0B4A93] text-white py-2 rounded-lg hover:bg-[#083b77] transition text-sm font-semibold">
          Lihat Detail
        </button>
      )}
    </div>
  );
};

// AC CARD FOR INDONESIA YOUTH SUSTAINABILITY FORUM
export const AlumniCenterCardIYSF = ({
  iysf,
  disableButton,
  handleClicked,
}) => {
  return (
    <div
      onClick={handleClicked}
      className="snap-start min-w-[250px] sm:min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md hover:bg-gray-100 transition duration-300 p-4 flex flex-col justify-between"
    >
      {/* LOGO + BADGE WRAPPER */}
      <div className="relative h-[180px] w-[300px] rounded-xl overflow-hidden mb-4">
        <div
          className={`absolute top-2 right-2 ${
            iysf.currentEvent === "On-Going"
              ? "bg-[#DDF5EA] text-[#34A853]"
              : "bg-[#F8D7DA] text-[#DC3545]"
          } text-[10px] px-2 py-1 rounded-full font-medium z-10`}
        >
          {iysf.currentEvent}
        </div>
        <img
          src={iysf.eventLogo}
          alt="Company Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mb-2">
        <p className="text-xs text-gray-500">Bakrie Center Foundation</p>
        <p className="text-lg font-bold leading-tight">{iysf.jobPosition}</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap text-xs font-medium mb-3">
        <span className="bg-orange-100 text-[#E89229] px-2 py-1 rounded-full">
          {iysf.categorizeEvent}
        </span>
        <span className="bg-orange-100 text-[#E89229] px-2 py-1 rounded-full">
          {iysf.eventDate}
        </span>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-700 mb-4 space-y-1">
        <p className="flex items-center gap-2">
          <AlarmClock size="20" /> {iysf.durationEvent}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size="20" /> {iysf.place}
        </p>
        <p className="flex items-center gap-2">
          <CalendarDays size="20" /> Batas Pendaftaran: {iysf.applyingDeadline}
        </p>
        <p className="text-xs text-gray-400">{iysf.dateWhenMakeInformation}</p>
      </div>

      {/* Button */}
      {!disableButton && (
        <button className="bg-[#0B4A93] text-white py-2 rounded-lg hover:bg-[#083b77] transition text-sm font-semibold">
          Lihat Detail
        </button>
      )}
    </div>
  );
};
