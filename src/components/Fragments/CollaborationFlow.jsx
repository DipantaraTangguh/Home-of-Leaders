import React from "react";
import GrayLine from "../Elements/GrayLine";

const CollaborationFlow = () => {
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
};

export default CollaborationFlow;
