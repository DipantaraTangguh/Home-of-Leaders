import React, { useState } from "react";

const centers = {
  alumni: {
    title: "Alumni Center",
    content: (
      <ul className="list-disc pl-5">
        <li>
          Berfokus untuk pembaharuan data alumni melalui link{" "}
          <a
            href="https://bit.ly/UpdatePendataanAlumniBCF"
            className="text-blue-600 font-semibold"
          >
            bit.ly/UpdatePendataanAlumniBCF
          </a>{" "}
          untuk <strong>mempermudah pemetaan alumni</strong> dalam kegiatan BCF
        </li>
        <li>
          <strong>Pencatatan milestone alumni</strong> untuk keterlibatan dan
          pencapaian
        </li>
        <li>
          <strong>Gathering Nasional dan Leaders Townhall</strong> tiap tahun
        </li>
        <li>
          Leadership and <strong>Sustainability Training</strong>
        </li>
        <li>
          <strong>#CallforFellows</strong> untuk sharing informasi peluang
          alumni
        </li>
      </ul>
    ),
  },
  commdev: {
    title: "CommDev Center",
    content: (
      <div>
        <p>
          Berfokus pada pengembangan kapasitas alumni yang merupakan pegiat
          sosial atau memiliki komunitas sosial pada isu SDGs untuk tetap
          berdampak luas di masyarakat, melalui:{" "}
        </p>
        <ul className="list-disc pl-5">
          <li>
            Penempatan lembaga sosial dari alumni LEAD Indonesia untuk mahasiswa
            magang dari Campus Leaders Program
          </li>
          <li>
            Pelibatan alumni sebagai Mentor Cluster maupun Mentor Desain Program
            dalam LEAD Indonesia
          </li>
          <li>
            Pelatihan bagi alumni terkait dengan Leadership and Sustainability
            yang juga menjadi implementasi dari Alumni Center
          </li>
        </ul>
      </div>
    ),
  },
  business: {
    title: "Business Center",
    content: (
      <p>
        Bertujuan untuk menghubungkan alumni yang memiliki usaha sosial
        (sociopreuneurship) dengan usaha maupun mitra strategis eksternal yang
        memiliki concern terkait. Fokus ini juga menjadi bagian dari
        implementasi Alumni Center dalam mengembangkan jaringan dan kolaborasi
        bagi alumni.
      </p>
    ),
  },
  research: {
    title: "Research Center",
    content: (
      <p>
        Berfokus pada pengembangan{" "}
        <strong>pengembangan penelitian dan kajian</strong> terkait{" "}
        <strong>Sustainable Developement Goals (SDGs)</strong>, khususnya{" "}
        <strong>
          isu kesehatan, pendidikan, dan lingkungan oleh para alumni
        </strong>{" "}
        dengan latar belakang terkait (khususnya akademisi).{" "}
        <strong>Mengupayakan skema kolaborasi</strong> dengan dunia usaha,
        lembaga nasional dan internasional, universitas dan Sekretariat SDGs
        Bapennas melalui SDGs Hub yang dikembangkan bersama divisi Sustainable
        Development Initiative.
      </p>
    ),
  },
  advocacy: {
    title: "Advocacy Center",
    content: (
      <div>
        <p>
          Berfokus untuk berperan{" "}
          <strong>
            dalam memberikan pengaruh pada level kebijakan daerah maupun
            nasional terkait permasalahan sosial yang diintervensi.
          </strong>{" "}
          implementasinya melalui:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Perlibatan alumni dengan latar belakang kompetensi dan perhatian
            pada isu terkait sebagai tim perumus Seminar Nasional mengenai SDGs,
            hingga perumusan rekomendasi kebijakan.
          </li>
          <li>
            Perlibatan alumni dengan kompetensi pada isu terkait sebagai
            pembicara, moderator/MC pada forum diskusi publik (Seminar Nasional
            (mulai tahun ini) bernama Indonesia Youth Sustainability Forum), dan
            kegiatan eksternal.{" "}
          </li>
        </ul>
      </div>
    ),
  },
};

const BidangFokus = () => {
  const [activeCenter, setActiveCenter] = useState("alumni");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Bidang Fokus</h2>
      <hr className="border-t border-gray-300 mb-4" />

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
    </div>
  );
};

export default BidangFokus;
