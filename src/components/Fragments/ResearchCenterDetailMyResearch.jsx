import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Download,
  Eye,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Navbar from "../Layouts/Navbar";
import { Link } from "react-router-dom";
import myresearchData from "../../assets/data/myresearchData";

const ResearchCenterDetailMyResearch = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Cari data berdasarkan slug dari myresearchData
  const research = myresearchData.find((item) => item.slug === slug);

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

  return (
    <>
      <Navbar />
      <section className="container mx-auto py-6 px-15">
        <Link
          to="/research-center/my-research"
          className="text-2xl font-bold text-blue-800 flex items-center mb-8"
        >
          <span className="mr-1">
            <img
              src="/images/icon/Back-Button.png"
              className="w-7"
              alt="icon"
            />
          </span>
          Detail Karya Ilmiah
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 text-center">
            <img
              src={research.image}
              alt={research.title}
              className="w-64 rounded-lg shadow-lg mx-auto"
            />

            <button className="mt-4 inline-flex items-center justify-center w-64 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
              <Download size={16} className="mr-2" /> Download
            </button>

            <div className="mt-6 text-left">
              <span className="block font-medium mb-1">Link Dokumen</span>
              <a
                href={research.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <ExternalLink size={16} className="mr-1" />{" "}
                {research.documentLink}
              </a>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {research.title}
            </h1>

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

            {research.abstract && (
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">Abstrak</h2>
                <p className="text-gray-700 leading-relaxed">
                  {research.abstract}
                </p>
                <hr className="border-gray-300" />
              </div>
            )}

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
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchCenterDetailMyResearch;
