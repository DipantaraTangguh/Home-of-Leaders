import React, { useState } from "react";
import GrayLine from "../Elements/GrayLine";
import centers from "../../assets/data/focusAreaData";

const FocusArea = () => {
  const [activeCenter, setActiveCenter] = useState("alumni");

  return (
    <section id="FocusArea" className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Bidang Fokus</h2>
      <GrayLine extraClasses="mb-4" />

      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar Button */}
        <div className="flex md:flex-col gap-4 overflow-x-auto pb-2">
          {Object.keys(centers).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCenter(key)}
              className={`min-w-[200px] whitespace-nowrap p-4 rounded-xl text-lg font-bold text-center shadow-md transition-all duration-300  ${
                activeCenter === key
                  ? "bg-blue-100 text-blue-800"
                  : "bg-white text-blue-800 hover:bg-blue-50"
              }`}
            >
              {centers[key].title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.25)] p-6 flex-1 text-gray-600 text-lg ">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            {centers[activeCenter].title}
          </h3>
          {centers[activeCenter].content}
        </div>
      </div>
    </section>
  );
};

export default FocusArea;
