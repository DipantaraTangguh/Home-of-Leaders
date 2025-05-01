import Navbar from "../components/Layouts/Navbar";
import { useState } from "react";
import { Footer } from "../components/Layouts/Footer";
import { AdvocacyCentreData } from "../assets/data/AdvocacyCentreData";
import { CircleArrowOutUpRight } from "lucide-react";
import { IYSFScrollableDetail, IYSFScrollableList } from "../components/Fragments/AlumniCenterDetailSection";

const AdvocacyCenter = () => {
  // STATE VARIABLES
  const [selectedId, setSelectedId] = useState(AdvocacyCentreData.id);

  return (
    <>
      <Navbar />
      <main>
        {/* BANNER IMAGE */}
        <div className="relative w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[400px]">
          {/* BANNER */}
          <img
            className="w-full h-full object-cover"
            src="/images/advocacy-center-iysf/cover-image-iysf.png"
            alt="Indonesia Youth Sustainability Forum"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 flex items-end mb-5">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-15">
              {/* TEXT LEFT */}
              <div className="flex flex-col text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  <span className="text-[#479F76]">Indonesia </span>
                  <span className="text-[#E89229]">Youth </span>
                  <span className="text-[#479F76]">Sustainability </span>
                  <span className="text-[#E89229]">Forum</span>
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                  Segera Daftarkan Dirimu, Rasakan pengalaman seru bersama kami!
                </p>
              </div>

              {/* BUTTON RIGHT */}
              <div className="mt-6 md:mt-0">
                <a
                  href="https://iysf.bcf.or.id/"
                  target="_blank" // buka di tab baru
                  rel="noopener noreferrer" // demi keamanan
                  className="flex gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-[#E89229] text-[#E89229] rounded-full hover:bg-[#E89229] hover:text-white transition font-semibold items-center text-sm sm:text-base"
                >
                  <CircleArrowOutUpRight size={20} /> Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="container mx-auto px-15 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* SCROLLABLE LIST LEFT */}
            <IYSFScrollableList
              advocacyCentre={AdvocacyCentreData}
              setSelectedId={setSelectedId}
            />

            {/* SCROLLABLE DETAILS RIGHT */}
            <IYSFScrollableDetail
              advocacyCentre={AdvocacyCentreData}
              selectedId={selectedId}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdvocacyCenter;
