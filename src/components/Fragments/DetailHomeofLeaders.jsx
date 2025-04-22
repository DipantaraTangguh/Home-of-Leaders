import React from "react";
import GrayLine from "../Elements/GrayLine";

const DetailHomeofLeaders = () => {
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
};

export default DetailHomeofLeaders;
