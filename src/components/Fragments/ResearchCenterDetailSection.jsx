import { CalendarDays, Download, Eye, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Back Button
export function ResearchCenterDetailBackButton({ link }) {
  return (
    <Link
      to={link}
      className="text-2xl font-bold text-[#0D4690] flex items-center mb-8"
    >
      <span className="mr-1">
        <img src="/images/icon/Back-Button.png" className="w-7" alt="icon" />
      </span>
      Detail Karya Ilmiah
    </Link>
  );
}

export function ResearchCenterDetailMain({ research }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left side. Image, Document Link */}
      <div className="flex-shrink-0 text-center">
        <img
          src={research.image}
          alt={research.title}
          className="w-64 rounded-lg shadow-lg mx-auto"
        />

        {/* Download Button */}
        <button className="mt-4 inline-flex items-center justify-center w-64 px-4 py-2 border-2 border-[#0D4690] text-[#0D4690] rounded-full hover:border-[#216EFF] transition">
          <Download size={16} className="mr-2" /> Download
        </button>

        {/* Link Button */}
        <div className="mt-6 text-left">
          <span className="block font-medium mb-1">Link Dokumen</span>
          <a
            href={research.documentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D4690] hover:underline flex items-center"
          >
            <ExternalLink size={16} className="mr-1" /> {research.documentLink}
          </a>
        </div>
      </div>

      {/* Right Side Main Content */}
      <div className="flex-1 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">{research.title}</h1>

        {/* Count Views & Downloads */}
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center">
            <Eye size={18} className="mr-1" />
            <span>{research.views?.toLocaleString() || 200}</span>
          </div>
          <div className="flex items-center">
            <Download size={18} className="mr-1" />
            <span>{research.downloads?.toLocaleString() || 300}</span>
          </div>
        </div>

        {/* Penulis, Program, Tanggal Publish */}
        <div className="grid grid-cols-1 md:grid-cols-3 py-4 text-sm text-gray-700">
          {/* Penulis */}
          <div className="flex flex-col items-start">
            <span className="font-semibold text-xl mb-2">Penulis</span>
            <div className="flex items-center text-lg">
              <img
                src={research.avatar}
                alt={research.author}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>{research.author}</span>
            </div>
          </div>

          {/* Program (tetap row) */}
          <div className="flex flex-col items-start md:items-center border-r border-l">
            <span className="font-semibold text-xl md:mb-3">Program</span>
            <span className="bg-purple-100 text-purple-800 px-5 py-1 rounded-full text-md">
              {research.program || "-"}
            </span>
          </div>

          {/* Tanggal Publish (row) */}
          <div className="flex flex-col items-start md:items-center">
            <span className="font-semibold text-xl md:mb-3">
              Tanggal Publish
            </span>
            <div className="flex items-center text-lg">
              <CalendarDays size={18} className="mr-2 text-gray-600" />
              <span>{research.date}</span>
            </div>
          </div>
        </div>

        {/* Abstract */}
        {research.abstract && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Abstrak</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {research.abstract}
            </p>
            <hr className="border-gray-300" />
          </div>
        )}

        {/* Citation */}
        {research.citations && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Sitasi</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {research.citations.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
            <hr className="border-gray-300" />
          </div>
        )}

        {/* Citation Link */}
        {research.citationLink && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Link Sitasi</h2>
            <ul className="text-[#0D4690] space-y-1">
              {research.citationLink.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
