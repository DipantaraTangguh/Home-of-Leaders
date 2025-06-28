import { Download } from "lucide-react";

export function Jumbotron() {
  return (
    <section id="jumbotron">
      <div className="landing-page container mx-auto ">
        <div className="jumbotron w-full ">
          <img
            src="/images/landing-page/banner2.png"
            alt="Landing Banner"
            className="w-full object-cover pt-4 md:py-4 px-6"
          />
        </div>
      </div>
    </section>
  );
}

export function ProgramDescription() {
  return (
    <section id="program-description" className="container mx-auto">
      <div className="deskripsi-program py-10 px-6">
        {/* Section Program Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/deskripsi-program/deskripsi-program.png"
            className="w-2xl"
          />

          {/* Section Deskripsi */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[#0D4690] text-2xl font-bold mb-2">
                Deskripsi Program
              </h2>
              <hr className="border-t border-gray-300 mb-4" />
              <p className="text-justify text-lg">
                Forum ikatan alumni lintas generasi – Home of Leaders dari
                program-program Bakrie Center Foundation (Bakrie Graduate
                Fellowship, LEAD Indonesia, dan Campus Leaders Program), untuk
                dapat saling berkolaborasi dan menjalin kerja sama strategis
                dalam mencapai percepatan Tujuan Pembangunan Berkelanjutan
                (Sustainable Development Goals (SDGs)) melalui cluster utama
                yang menjadi concern Bakrie Center Foundation.
              </p>
            </div>

            {/* Visi dan Misi */}
            <div className="text-lg">
              <div className="bg-orange-50 border-l-4 border-[#E89229] px-4 py-7 rounded-xl w-full">
                <h3 className="text-[#E89229] font-bold text-lg mb-2">Visi</h3>
                <p>
                  Terciptanya alumni BCF yang berdaya melalui kolaborasi
                  penanganan isu kesehatan, pendidikan, dan lingkungan secara
                  berkelanjutan di tingkat nasional.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-[#E89229] px-4 py-7 rounded-xl w-full my-5">
                <h3 className="text-[#E89229] font-bold text-lg mb-2">Misi</h3>
                <p>
                  Peningkatan kontribusi dan solidaritas alumni BCF dalam
                  pembinaan kapasitas penggiat sosial dan pengembangan
                  penelitian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { GrayLine } from "../Elements/GrayLine";
import centers from "../../assets/data/focusAreaData";

export function FocusArea() {
  const [activeCenter, setActiveCenter] = useState("alumni");

  return (
    <section id="FocusArea" className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-[#0D4690] mb-4">Bidang Fokus</h2>
      <GrayLine extraClasses="mb-4" />

      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar Button */}
        <div className="flex md:flex-col gap-4 overflow-x-auto pb-2">
          {Object.keys(centers).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCenter(key)}
              className={`min-w-[200px] whitespace-nowrap cursor-pointer p-4 rounded-xl text-lg font-bold text-center shadow-md transition-all duration-300  ${
                activeCenter === key
                  ? "bg-blue-100 text-[#0D4690]"
                  : "bg-white text-[#0D4690] hover:bg-blue-50"
              }`}
            >
              {centers[key].title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.25)] p-6 flex-1 text-[#6C757D] text-lg ">
          <h3 className="text-2xl font-bold text-[#0D4690] mb-4">
            {centers[activeCenter].title}
          </h3>
          {centers[activeCenter].content}
        </div>
      </div>
    </section>
  );
}

import { SeminarDetailData } from "../../assets/data/SeminarDetailData";

export function SeminarRecomendation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SeminarDetailData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + SeminarDetailData.length) % SeminarDetailData.length
    );
  };

  return (
    <section id="seminar-recomendation">
      <div className="header container mx-auto p-6">
        <h1 className="text-2xl font-bold text-[#0a3e91] mb-4">
          Rekomendasi Lanjutan Seminar 2023
        </h1>
        <GrayLine extraClasses="flex w-1/2" />
      </div>
      <div className="bg-[#e9f2ff] py-10">
        <div className="container mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-6">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-4">
                {SeminarDetailData[activeIndex].title}
              </h2>
              <div className="description text-justify">
                <p className="text-gray-700 mb-6 whitespace-pre-line min-h-70">
                  {SeminarDetailData[activeIndex].description}
                </p>
              </div>

              <div className="flex gap-4">
                <button className="bg-[#0D4690] text-white px-5 py-2 rounded-3xl font-semibold hover:bg-blue-800 cursor-pointer ">
                  Lihat Detail
                </button>
                <button className="border border-[#0D4690] text-[#0D4690] px-5 py-2 rounded-3xl font-semibold hover:bg-blue-100 cursor-pointer flex items-center justify-center">
                  <Download className="w-5 h-5 mr-1" />
                  Download
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={SeminarDetailData[activeIndex].image}
                alt="Seminar Cover"
                className="rounded-2xl shadow-xl w-[300px] lg:w-[340px]"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8 ">
            <button
              onClick={handlePrev}
              className="bg-[#0D4690] text-white px-2 py-2 rounded-full hover:bg-blue-800 cursor-pointer"
            >
              <span>
                <img src="/images/icon/arrow-left.png" alt="" />
              </span>
            </button>
            <button
              onClick={handleNext}
              className="bg-[#0D4690] text-white px-2 py-2 rounded-full hover:bg-blue-800 cursor-pointer"
            >
              <span>
                <img src="/images/icon/arrow-right.png" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CollaborationFlow() {
  return (
    <section id="collaboration-flow" className="py-5">
      <div className="container mx-auto p-6">
        <div className="header">
          <h1 className="text-2xl font-bold text-[#0a3e91] mb-4">
            Alur Kolaborasi
          </h1>
          <GrayLine extraClasses="flex w-1/2" />
        </div>
        <div className="content mt-10">
          <img
            src="images/Illustrations/collaboration-flow/alur-kolaborasi-2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

import { AlumniInformationsData } from "../../assets/data/AlumniInformationsData"
import { useNavigate } from "react-router-dom";

const badgeStyles = {
  BGF: "bg-[#CFF4FC] text-[#0AA2C0]",
  CLP: "bg-[#E2D9F3] text-[#59359A]",
  LEAD: "bg-[#FAEBE2] text-[#DB8A27]",
  DEFAULT: "bg-gray-200 text-gray-700",
};

export function AlumniSuccessStory() {
  const [selectedAlumni, setSelectedAlumni] = useState(AlumniInformationsData[0]);
  const navigate = useNavigate();

  return (
    <section id="alumni-success-story">
      <div className="header container mx-auto p-6 mt-5">
        <h2 className="text-4xl font-bold text-[#0a3e91] mb-4">
          Alumni Success Story
        </h2>
        <GrayLine extraClasses="flex w-1/2" />
      </div>

      <div className="background bg-[#F2F3F6] min-h-[400px] py-20 flex items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Bagian kiri */}
          <div className="flex items-stretch gap-6">
            <img
              src={selectedAlumni.image}
              alt={selectedAlumni.name}
              className="rounded-xl w-48 h-auto object-cover"
            />
            <div>
              <h3 className="text-3xl font-semibold mb-2">
                {selectedAlumni.name}
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                {selectedAlumni.title} |{" "}
                {selectedAlumni.badge && (
                  <span
                    className={`px-6 py-0.5 rounded-full ${
                      badgeStyles[selectedAlumni.badge] || badgeStyles.DEFAULT
                    }
                    `}
                  >
                    {selectedAlumni.badge}
                  </span>
                )}
              </p>
              <p className="text-gray-700 italic text-xl my-7">
                {selectedAlumni.quote}
              </p>
              <button
                onClick={() => navigate(`/alumni/${selectedAlumni.slug}`)}
                className="bg-[#E89229] hover:bg-orange-500 transition text-white px-4 py-2 rounded-3xl text-sm flex items-center cursor-pointer"
              >
                Baca Selengkapnya
                <span className="ml-1">
                  <img
                    src="/images/icon/right-up.png"
                    className="w-7"
                    alt="icon"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Bagian kanan  */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
            {AlumniInformationsData.map((alumni, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-2xl p-2 border-4 transition hover:bg-[#0d4690]/10 ${
                  selectedAlumni.name === alumni.name
                    ? "border-[#E89229]"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedAlumni(alumni)}
              >
                <div className="flex flex-col items-center text-center ">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-16 h-16 mb-2 object-cover object-top"
                  />
                  <p className="text-md font-semibold mb-1">{alumni.name}</p>
                  <p className="text-sm text-gray-500">{alumni.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DetailHomeofLeaders() {
  return (
    <section id="collaboration-flow" className="py-5">
      <div className="container mx-auto p-6">
        <div className="header">
          <h1 className="text-2xl font-bold text-[#0a3e91] mb-4">
            Detail Home of Leaders
          </h1>
          <GrayLine extraClasses="flex w-1/2" />
        </div>

        {/* Embedded Canva Presentation */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "56.25%",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAGg1qovC0A/8EpaI0BDWjCqSEJHVEbcHA/view?embed"
            allowFullScreen
            allow="fullscreen"
          />
        </div>

        <a
          href="https://www.canva.com/design/DAGg1qovC0A/8EpaI0BDWjCqSEJHVEbcHA/view?utm_content=DAGg1qovC0A&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
          className="text-blue-600 underline mt-2 inline-block"
        ></a>
      </div>
    </section>
  );
}
