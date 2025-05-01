import { useState } from "react";
import { Forward, AlarmClock, MapPin, CalendarDays } from "lucide-react";

// CALL FOR FELLOWS DETAILS SCROLLABLE VERTICAL
export const CFFScrollableCardDetails = ({ callForFellows }) => {
  // STATE VARIABLES
  const [copied, setCopied] = useState(false);

  // FUNCTION FOR COPIED LINK TO CLIPBOARD
  const handleCopy = () => {
    const linkToCopy = callForFellows.applyingLink;

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };
  return (
    <div>
      <div className="flex flex-col gap-5 mb-10">
        {/* COMPANY IMAGE & BUTTONS */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <img
            src={callForFellows.companyImage}
            alt={callForFellows.companyName}
            className="w-full sm:w-[150px] h-[150px] object-cover rounded-[20px]"
          />
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={() => window.open(callForFellows.applyingLink, "_blank")}
              className="bg-[#0D4690] text-white px-4 py-2 rounded-full hover:bg-[#216EFFB2] transition font-bold text-sm w-[215px]"
            >
              Link Pendaftaran
            </button>
            <button onClick={handleCopy} className="text-[#0D4690] flex items-center font-bold text-sm hover:underline w-[215px]">
              <Forward className="mr-1" />
              {copied ? "Link Tersalin" : "Bagikan Link Pendaftaran"}
            </button>
          </div>
        </div>

        {/* JOB POSITION & COMPANY INFO */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {callForFellows.jobPosition}
          </h1>
          <p className="text-gray-600">{callForFellows.companyName}</p>
        </div>

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap text-sm font-medium">
          <span className="bg-[#DDF5EA] text-[#34A853] px-3 py-1 rounded-full">
            On Going
          </span>
          {callForFellows.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full"
            >
              {tag.placement} {tag.categorize}
            </span>
          ))}
        </div>

        {/* DATE INFORMATION */}

        {/* DESCRIPTION, REQUIREMENTS, BENEFITS, CONTACT */}
        <div>
          <h2 className="text-lg font-bold text-black mb-2">
            Deskripsi Program
          </h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {callForFellows.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">
            Program Requirement
          </h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {callForFellows.requirement.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">Benefit Program</h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {callForFellows.benefits.map((ben, i) => (
              <li key={i}>{ben}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">Narahubung</h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {callForFellows.contactInfo.map((info, i) => (
              <li key={i}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// BONDING ACTIVITIES DETAILS SCROLLABLE VERTICAL
export const BAScrollableCardDetails = ({ bondingActivities }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 mb-10">
        {/* SCROLLABLE HORIZONTAL SLIDER IMAGE */}
        <div className="flex flex-row overflow-x-auto gap-2 no-scrollbar">
          {bondingActivities.eventImage.map((eventImage, i) => (
            <img
              key={i}
              src={eventImage}
              className="object-cover rounded-[20px] h-[100px] sm:h-[110px] md:h-[130px] w-[180px] sm:w-[220px] md:w-[277px] flex-shrink-0"
            />
          ))}
        </div>

        {/* EVENT INFORMATION, EVENT INFO & BUTTON */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800">
              {bondingActivities.eventName}
            </h1>
            <p text-gray-600>Bakrie Center Foundation</p>
          </div>

          <button className="bg-[#0D4690] text-white px-4 py-2 rounded-full hover:bg-[#216EFFB2] transition font-bold text-sm">
            Daftar Sekarang
          </button>
        </div>

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap text-sm font-medium">
          <span className="bg-[#DDF5EA] text-[#34A853] px-3 py-1 rounded-full">
            On Going
          </span>
          <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
            Offline
          </span>
        </div>

        {/* DATE INFORMATION */}
        <div className="text-sm text-gray-700 space-y-1">
          <p className="flex items-center gap-2">
            <AlarmClock size={20} />
            <span className="font-bold">{bondingActivities.eventDuration}</span>
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={20} />
            <span className="font-bold">{bondingActivities.place}</span>
          </p>
          <p className="flex items-center gap-2">
            <CalendarDays size={20} />
            Batas Pendaftaran:
            <span className="font-bold">
              {bondingActivities.applyingDeadline}
            </span>
          </p>
        </div>

        {/* DESCRIPTION, BENEFITS, CONTACT */}
        <div>
          <h2 className="text-lg font-bold text-black mb-2">
            Deskripsi Program
          </h2>
          <hr className="mb-2" />
          <p className="whitespace-pre-line text-black text-sm">
            {bondingActivities.description || "-"}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">Benefit Program</h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {bondingActivities.benefits.map((ben, i) => (
              <li key={i}>{ben}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">Narahubung</h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {bondingActivities.contactInfo.map((info, i) => (
              <li key={i}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// IYSF DETAILS SCROLLABLE VERTICAL
export const IYSFScrollableCardDetails = ({ advocacyCentre }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 mb-10">
        {/* EVENT IMAGE & BUTTONS */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <img
            src={advocacyCentre.eventLogo}
            alt="IYSF-Event"
            className="w-full sm:w-[150px] h-[150px] object-cover rounded-[20px]"
          />
          <button className="bg-[#0D4690] text-white px-4 py-2 rounded-full hover:bg-[#216EFFB2] transition font-bold text-sm">
            Daftar Sekarang
          </button>
        </div>

        {/* JOB POSITION & COMPANY INFO */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {advocacyCentre.jobPosition}
          </h1>
          <p className="text-gray-600">Bakrie Center Foundation</p>
        </div>

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap text-sm font-medium">
          <span className="bg-[#479F76] text-[#F5FBF7] px-2 py-1 rounded-full">
            On Going
          </span>
          <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
            {advocacyCentre.durationEvent}
          </span>
          <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
            {advocacyCentre.eventDate}
          </span>
        </div>

        {/* DATE INFORMATION */}
        <div className="text-sm text-gray-700 space-y-1">
          <p className="flex items-center gap-2">
            <MapPin size={20} />
            <span className="font-bold">{advocacyCentre.place}</span>
          </p>
          <p className="flex items-center gap-2">
            <CalendarDays size={20} />
            Batas Pendaftaran:
            <span className="font-bold">{advocacyCentre.applyingDeadline}</span>
          </p>
        </div>

        {/* DESCRIPTION, REQUIREMENTS, BENEFITS, CONTACTS */}
        <div>
          <h2 className="text-lg font-bold text-black mb-2">
            Deskripsi Program
          </h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {advocacyCentre.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">
            Requirement Program
          </h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {advocacyCentre.requirement.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">Benefit Program</h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {advocacyCentre.benefits.map((ben, i) => (
              <li key={i}>{ben}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-black mb-2">Narahubung</h2>
          <hr className="mb-2" />
          <ul className="list-disc pl-5 space-y-1 text-black text-sm">
            {advocacyCentre.contactInfo.map((info, i) => (
              <li key={i}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
