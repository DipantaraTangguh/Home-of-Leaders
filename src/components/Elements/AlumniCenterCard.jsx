import { FaCalendar, FaMapMarkerAlt, FaStream } from "react-icons/fa";

// ALUMNI CENTER CARD FOR EVERY SECTION
export const AlumniCenterCard = ({
  companyImage,
  companyName,
  jobPosition,
  tags,
  duration,
  place,
  applyingDate,
  dateWhenMakeInformation,
}) => {
  return (
    <div className="snap-start min-w-[250px] sm:min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md hover:bg-gray-100 transition duration-300 p-4 flex flex-col justify-between">
      {/* LOGO + BADGE WRAPPER */}
      <div className="relative h-[180px] w-[300px] rounded-xl overflow-hidden mb-4">
        <div className="absolute top-2 right-2 bg-[#DDF5EA] text-[#34A853] text-[10px] px-2 py-1 rounded-full font-medium z-10">
          On Going
        </div>
        <img
          src={companyImage}
          alt="Company Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mb-2">
        <p className="text-xs text-gray-500">{companyName}</p>
        <p className="text-lg font-bold leading-tight">{jobPosition}</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap text-xs font-medium mb-3">
        {tags.map((tagged, index) => (
          <span
            key={index}
            className="bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full"
          >
            {tagged.name}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="text-sm text-gray-700 mb-4 space-y-1">
        <p className="flex items-center gap-2">
          <FaCalendar /> {duration}
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> {place}
        </p>
        <p className="flex items-center gap-2">
          <FaStream /> Batas Pendaftaran: {applyingDate}
        </p>
        <p className="text-xs text-gray-400">{dateWhenMakeInformation}</p>
      </div>

      {/* Button */}
      <button className="bg-[#0B4A93] text-white py-2 rounded-lg hover:bg-[#083b77] transition text-sm font-semibold">
        Lihat Detail
      </button>
    </div>
  );
};

