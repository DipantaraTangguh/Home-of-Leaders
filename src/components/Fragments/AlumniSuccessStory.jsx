import React, { useState } from "react";
import alumniData from "../../assets/data/alumniData";
import { useNavigate } from "react-router-dom";
import GrayLine from "../Elements/GrayLine";

const AlumniSuccessStory = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(alumniData[0]);
  const navigate = useNavigate();

  return (
    <section id="alumni-success-story">
      <div className="header container mx-auto p-6 mt-5">
        <h2 className="text-4xl font-bold text-[#0a3e91] mb-4">
          Alumni Success Story
        </h2>
        <GrayLine extraClasses="flex w-1/2" />
      </div>

      <div className="background bg-[#e9f2ff] min-h-[400px] py-20 flex items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Bagian kiri */}
          <div className="flex items-stretch gap-6">
            <img
              src={selectedAlumni.image}
              alt={selectedAlumni.name}
              className="rounded-xl w-48 h-auto object-cover self-end"
            />
            <div>
              <h3 className="text-3xl font-semibold">{selectedAlumni.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {selectedAlumni.title}
                {selectedAlumni.badge && (
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full text-xs">
                    {selectedAlumni.badge}
                  </span>
                )}
              </p>
              <p className="text-gray-700 italic text-xl my-7">
                {selectedAlumni.quote}
              </p>
              <button
                onClick={() => navigate(`/alumni/${selectedAlumni.slug}`)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm flex items-center cursor-pointer"
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
          <div className="grid grid-cols-4 gap-2">
            {alumniData.map((alumni, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-2xl p-2 border-2 transition ${
                  selectedAlumni.name === alumni.name
                    ? "border-orange-400"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedAlumni(alumni)}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-16 h-16 mb-2 object-cover object-top"
                  />
                  <p className="text-sm font-semibold text-gray-800">
                    {alumni.name}
                  </p>
                  <p className="text-xs text-gray-500">{alumni.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccessStory;
