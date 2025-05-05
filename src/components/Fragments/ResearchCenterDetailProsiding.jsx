import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  CalendarDays,
  Download as DownloadIcon,
  Eye,
  ExternalLink,
  ArrowLeft,
  FileText,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import prosidingData from "../../assets/data/prosidingData";
import Navbar from "../Layouts/Navbar";
import { Footer } from "../Layouts/Footer";

const ResearchCenterDetailProsiding = () => {
  const INITIAL_COUNT = 6;
  const { slug } = useParams();
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'penyusun' or 'penulis'

  const research = prosidingData.find((item) => item.slug === slug);
  if (!research) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-red-600">Publikasi tidak ditemukan.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 inline-flex items-center gap-2 text-blue-700"
        >
          <ArrowLeft size={16} /> Kembali
        </button>
      </div>
    );
  }

  const { articles, teamPenyusun, teamPenulis } = research;

  const handleSeeMore = () =>
    setVisibleCount((prev) => Math.min(prev + INITIAL_COUNT, articles.length));
  const handleSeeLess = () => setVisibleCount(INITIAL_COUNT);

  const openTeamModal = (type) => {
    setModalType(type);
    setShowTeamModal(true);
  };
  const closeTeamModal = () => setShowTeamModal(false);

  const modalTitle =
    modalType === "penyusun"
      ? "Tim Penyusun Prosiding 2025"
      : "Tim Penulis Prosiding 2025";
  const modalList = modalType === "penyusun" ? teamPenyusun : teamPenulis;

  return (
    <>
      <Navbar />
      <section className="container mx-auto py-6 px-4 lg:px-15 pb-20">
        <Link
          to="/research-center/prosiding"
          className="text-2xl font-bold text-blue-800 flex items-center mb-8"
        >
          <img
            src="/images/icon/Back-Button.png"
            className="w-7 mr-2"
            alt="Back"
          />
          Detail Karya Ilmiah
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: main prosiding details */}
          <div className="flex-shrink-0 text-center">
            <img
              src={research.image}
              alt={research.title}
              className="w-64 rounded-lg shadow-lg mx-auto"
            />
            <button className="mt-4 inline-flex items-center justify-center w-64 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
              <DownloadIcon size={16} className="mr-2" /> Download
            </button>
            <div className="mt-6 text-left">
              <span className="block font-medium mb-1">Link Dokumen</span>
              <a
                href={research.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <ExternalLink size={16} className="mr-1" />
                {research.documentLink}
              </a>
            </div>
          </div>

          {/* Right column: metadata and content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {research.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <Eye size={18} className="mr-1" />
                <span>{research.views?.toLocaleString() ?? 0}</span>
              </div>
              <div className="flex items-center">
                <DownloadIcon size={18} className="mr-1" />
                <span>{research.downloads?.toLocaleString() ?? 0}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-4 text-sm text-gray-700">
              {/* Author */}
              <div className="flex flex-col items-start">
                <span className="font-semibold text-xl mb-2">Prosiding</span>
                <div className="flex items-center text-lg">
                  <img
                    src={research.avatar}
                    alt={research.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{research.author}</span>
                </div>
              </div>

              {/* Program */}
              <div className="flex flex-col items-start md:items-center border-r border-l px-4">
                <span className="font-semibold text-xl md:mb-3">Program</span>
                <span className="bg-purple-100 text-purple-800 px-5 py-1 rounded-full text-md">
                  {research.program || "-"}
                </span>
              </div>

              {/* Date */}
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

            {/* Overview */}
            {research.gambaranUmumProsiding && (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  Gambaran Umum Prosiding
                </h2>
                <hr className="border-gray-300" />
                <p className="text-gray-700 leading-relaxed text-justify">
                  {research.gambaranUmumProsiding}
                </p>
              </div>
            )}

            {/* Articles list from the prosiding data */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Artikel Prosiding Lembaga Penempatan
              </h2>
              <hr className="border-gray-300" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
                {articles.slice(0, visibleCount).map((art) => (
                  <button
                    key={art.slug}
                    onClick={() =>
                      navigate(`/research-center/prosiding/artikel/${art.slug}`)
                    }
                    className="flex items-center bg-gray-100 hover:bg-gray-200 transition-colors rounded-2xl py-2 px-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="p-2 bg-white rounded-full shadow flex-shrink-0">
                      <FileText className="w-5 h-5 text-indigo-600" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {art.title}
                    </span>
                  </button>
                ))}
              </div>
              {visibleCount < articles.length && (
                <div className="mt-6 text-center">
                  <button
                    onClick={handleSeeMore}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 focus:outline-none"
                  >
                    <span className="text-sm font-medium cursor-pointer">
                      See more
                    </span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
              {visibleCount > INITIAL_COUNT && (
                <div className="mt-6 text-center">
                  <button
                    onClick={handleSeeLess}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 focus:outline-none"
                  >
                    <span className="text-sm font-medium cursor-pointer">
                      See less
                    </span>
                    <ChevronUp className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
            </div>

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

            {research.citationLink && (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  Link Sitasi
                </h2>
                <ul className="text-blue-600 space-y-1">
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

            {/* Team buttons */}
            {(teamPenyusun || teamPenulis) && (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  Tim Penulis & Penyusun
                </h2>
                <hr className="border-gray-300 my-4" />
                <div className="flex gap-4">
                  {teamPenyusun && (
                    <button
                      onClick={() => openTeamModal("penyusun")}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 cursor-pointer"
                    >
                      Tim Penyusun Prosiding 2025
                    </button>
                  )}
                  {teamPenulis && (
                    <button
                      onClick={() => openTeamModal("penulis")}
                      className="px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 cursor-pointer"
                    >
                      Tim Penulis Prosiding 2025
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Overlay */}
        {showTeamModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
              <button
                onClick={closeTeamModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X size={20} className="cursor-pointer" />
              </button>
              <h3 className="text-lg font-semibold mb-4">{modalTitle}</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                {modalList.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ResearchCenterDetailProsiding;
