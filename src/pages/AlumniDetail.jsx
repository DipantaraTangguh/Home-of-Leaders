import React from "react";
import Navbar from "../components/Layouts/Navbar";
import { Link, useParams } from "react-router-dom";
import alumniData from "../assets/data/alumniData";
import { Footer } from "../components/Layouts/Footer";

const AlumniDetail = () => {
  const { slug } = useParams();
  const alum = alumniData.find((a) => a.slug === slug);

  if (!alum) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-6">
          <p className="text-red-500">Alumni tidak ditemukan.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 md:px-15 py-10 pb-20">
        <div className="mb-8">
          <Link
            to="/landing-page"
            className="text-lg font-bold text-blue-800 flex items-center"
          >
            <span className="mr-1">
              <img
                src="/images/icon/Back-Button.png"
                className="w-7"
                alt="icon"
              />
            </span>
            Success Story Alumni
          </Link>
        </div>
        {/* Header */}
        <h2 className="text-3xl font-bold text-blue-800 mb-2">
          {alum.sectionTitle}
        </h2>
        <p className="text-2xl font-bold text-blue-800 mb-8">
          “{alum.sectionSubtitle}”
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image container: fixed max width, no shrink */}
          <div className="flex-shrink-0 w-full md:max-w-sm bg-gray-100 p-4 rounded-2xl">
            <img
              src={alum.image}
              alt={alum.name}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>

          <div className="flex-1 space-y-6 text-justify">
            {/* Nama & jabatan */}
            <div>
              <h1 className="text-4xl font-bold">{alum.name}</h1>
              <div className="flex items-center space-x-3 mt-2">
                <span className="text-gray-600">{alum.title}</span>
                {alum.badge && (
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full text-xs">
                    {alum.badge}
                  </span>
                )}
              </div>
            </div>

            {/* text content */}
            {alum.body.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {p}
              </p>
            ))}

            {/* Quote  */}
            <blockquote className="italic text-xl border-l-4 border-orange-400 pl-4 mt-4">
              “{alum.quote}”
            </blockquote>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AlumniDetail;
