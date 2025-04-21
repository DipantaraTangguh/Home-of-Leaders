import { Pointer, Section } from "lucide-react";
import GrayLine from "../Elements/GrayLine";
import { useState } from "react";

const seminarData = [
  {
    title: "SEMINAR NASIONAL 2023",
    description:
      'Tuberkulosis Paru (TBC Paru) adalah masalah serius di Indonesia, memengaruhi berbagai kelompok usia. Meskipun pengobatan gratis, pasien sering menghadapi kendala biaya, seperti transportasi dan akomodasi. Tingginya beban finansial ini dapat mencegah pengobatan. Indonesia memiliki beban TBC tertinggi kedua menurut WHO. Pada 2021, insiden TBC mencapai angka yang mencemaskan. Upaya penanggulangan termasuk inisiatif "END TB" dari WHO dan regulasi Perpres No. 67 Tahun 2021 di Indonesia. Namun, penanganan TBC memerlukan kolaborasi multisektor, termasuk keterlibatan korporasi, media, inovasi daerah, dan partisipasi pemuda. Seminar nasional "Sinergi Multisektor untuk Eliminasi TBC 2030" merupakan langkah penting.',
    image: "/images/rekomendasi-lanjutan-seminar/seminar-1.png",
  },
  {
    title:
      "SINERGI MULTISEKTOR DALAM UPAYA MEWUJUDKAN IMPLEMENTASI KEBIJAKAN TBC",
    description: `Tuberkulosis Paru (TBC Paru) adalah penyakit menular yang telah menjangkiti masyarakat Indonesia selama bertahun-tahun, memengaruhi berbagai kelompok usia, termasuk mereka yang berusia produktif dan anak-anak. Meskipun pengobatan untuk TBC gratis, pasien seringkali menghadapi kendala biaya transportasi, akomodasi, gizi, dan kehilangan pendapatan akibat ketidakmampuan untuk bekerja. Tingginya beban finansial ini dapat mencegah pasien memulai atau melanjutkan pengobatan, dan Indonesia merupakan negara dengan beban TBC tertinggi kedua menurut WHO.
Pada tahun 2021, insiden TBC di Indonesia mencapai angka yang mencemaskan. Upaya penanggulangan telah dilakukan, termasuk inisiatif "END TB" dari WHO, dan pemerintah Indonesia telah mengeluarkan regulasi seperti Perpres Nomor 67 Tahun 2021 untuk mengatasi masalah ini. Namun, penanganan TBC memerlukan kolaborasi multisektor, termasuk keterlibatan korporasi, media, inovasi daerah, dan juga partisipasi aktif pemuda Indonesia. Seminar nasional bertema "Sinergi Multisektor dalam Upaya Mewujudkan Implementasi Kebijakan TBC" adalah salah satu langkah dalam rangka mencapai tujuan Eliminasi TBC 2030.
`,
    image: "/images/rekomendasi-lanjutan-seminar/seminar-2.png",
  },
  {
    title:
      "FROM POLLUTION TO SOLUTION: MENDORONG KOMITMEN MULTISEKTOR MENUJU INDONESIA BEBAS POLUSI PLASTIK",
    description: `Di tingkat nasional, Indonesia adalah kontributor sampah plastik terbesar kedua di dunia, dengan 11,6 juta ton plastik di antara 68,5 juta ton sampah nasional. Upaya penanganan telah diamanatkan dalam undang-undang dan peraturan, tetapi implementasinya masih kurang efektif, terutama dari produsen plastik. Seminar Nasional "Sinergi Nasional dalam Katalisasi Pencapaian SDGs 2030" inisiasi oleh Bakrie Center Foundation (BCF) untuk membahas masalah sampah plastik dengan tiga perspektif utama: kebijakan, dunia usaha, dan masyarakat.

Perlunya anggaran yang memadai, normalisasi drainase, edukasi, serta perubahan perilaku masyarakat menjadi rekomendasi penting. Selain itu, pengenaan cukai plastik, kerjasama dengan negara lain, dan peran pendidikan lingkungan dianggap kunci dalam mengatasi krisis sampah plastik. Seminar ini mengkaji tiga subtopik yang mencakup regulasi, implementasi pajak dan izin usaha, serta peran masyarakat dalam pengelolaan sampah. Peran pemerintah, dunia usaha, dan kolaborasi antar negara dianggap vital untuk mengatasi permasalahan sampah plastik yang mendesak.`,
    image: "/images/rekomendasi-lanjutan-seminar/seminar-3.png",
  },
  {
    title:
      "OPTIMALISASI STANDAR PELAYANAN MINIMAL PENDIDIKAN (SPM) DALAM MENJAMIN PENDIDIKAN YANG SETARA DAN BERKUALITAS",
    description:
      "Pendidikan adalah sektor krusial dalam pembangunan suatu negara, mempengaruhi kualitas Sumber Daya Manusia (SDM) dan daya saing mereka di pasar kerja, serta berdampak pada angka pengangguran dan kemiskinan. Penanganan Anak Tidak Sekolah (ATS) menjadi fokus penting, membutuhkan komitmen lintas sektor, termasuk pemerintah, swasta, dan masyarakat. Seminar Nasional 2022 mengatasi masalah ini dan menyoroti peran Bappenas, Kemenko PMK, dan KSP dalam memperkuat kebijakan dan program pendukung ATS. Regulasi untuk pendanaan pendidikan inovatif juga diperlukan. Beberapa lembaga dan perusahaan telah memberikan solusi, seperti wakaf pendidikan, praktik CSR, dan LSM yang fokus pada anak putus sekolah. Strategi penanganan ATS berbasis kearifan lokal juga perlu diadopsi. Pentingnya kualitas pendidikan harus mendapat perhatian serius dari berbagai pihak, termasuk pemerintah, swasta, dan masyarakat, untuk mengatasi tantangan dalam pembangunan pendidikan, seperti pemenuhan Standar Nasional Pendidikan (SNP). Standar Pelayanan Minimal (SPM) menjadi langkah awal untuk mencapai SNP dan SPM difokuskan pada memastikan penyelenggara pendidikan dapat menyelenggarakan pembelajaran dengan maksimal.",
    image: "/images/rekomendasi-lanjutan-seminar/seminar-4.png",
  },
  {
    title: "ISU ENERGI TERBARUKAN",
    description:
      "Indonesia mengalami masalah serius dalam kualitas udara, dengan peringkat terburuk pada tahun 2023. Pencemaran udara terjadi di berbagai daerah, disebabkan oleh berbagai sumber emisi, termasuk kendaraan pribadi dan Pembangkit Listrik Tenaga Uap (PLTU). Penyumbang utama polusi adalah PLTU, meskipun upaya transisi energi ke kendaraan listrik telah dimulai. Perkembangan energi terbarukan, khususnya energi surya, menjadi fokus dalam upaya mengurangi polusi dan emisi karbon. Meskipun telah ada upaya seperti subsidi kendaraan listrik, masih ada perdebatan mengenai keberlanjutan kendaraan listrik dan penggunaan batu bara dalam baterai. Pemerintah berkomitmen untuk meningkatkan penggunaan energi bersih dan mendukung target bauran energi baru dan terbarukan. Seminar Nasional 2023 akan membahas energi surya sebagai solusi untuk mendukung Indonesia yang ramah lingkungan dan berkelanjutan, dengan melibatkan berbagai pemangku kepentingan.",
    image: "/images/rekomendasi-lanjutan-seminar/seminar-5.png",
  },
  {
    title: "POLICY BRIEF SEMINAR NASIONAL SDGS 2022",
    description:
      "Penelitian ini menganalisis transformasi metode pemasaran tradisional menjadi pemasaran digital di era modern, dengan fokus pada efektivitas strategi digital. Studi ini menggunakan data dari literatur, wawancara pakar, dan survei pelaku bisnis. Hasilnya menunjukkan bahwa platform digital seperti media sosial dan e-commerce menjadi saluran utama untuk menjangkau audiens, memungkinkan personalisasi dan analitik data untuk meningkatkan keterlibatan pelanggan serta memahami perilaku konsumen dengan lebih baik. Penelitian juga mengidentifikasi tantangan utama, seperti persaingan ketat dan privasi data, sekaligus peluang melalui adopsi teknologi seperti kecerdasan buatan (AI) dan otomatisasi pemasaran. Ditemukan bahwa strategi pemasaran yang sukses menggabungkan pendekatan berbasis data dengan fokus pada pengalaman pengguna. Temuan ini dapat menjadi panduan bagi perusahaan dalam merancang strategi yang relevan dan kompetitif di era digital.",
    image: "/images/rekomendasi-lanjutan-seminar/seminar-6.png",
  },
  {
    title: "PROSIDING 2023",
    description:
      "Pada Prosiding 2023, Isu Eliminasi TBC kembali mengangkat isu krusial yang didasari dari pengkajian hasil policy brief Seminar Nasional tahun lalu, untuk lebih memperkuat fokus bahasan pada efektivitas kebijakan pemerintah dalam penanggulangan TBC, serta penguatan peran kolaborasi hexa helix, khususnya pemuda, media, dan korporasi.",
    image: "/images/rekomendasi-lanjutan-seminar/seminar-7.png",
  },
];

const SeminarRecommendation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % seminarData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + seminarData.length) % seminarData.length
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
                {seminarData[activeIndex].title}
              </h2>
              <div className="description text-justify">
                <p className="text-gray-700 mb-6 whitespace-pre-line min-h-70">
                  {seminarData[activeIndex].description}
                </p>
              </div>

              <div className="flex gap-4">
                <button className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 cursor-pointer">
                  Lihat Detail
                </button>
                <button className="border border-blue-700 text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 cursor-pointer">
                  💾 Download
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={seminarData[activeIndex].image}
                alt="Seminar Cover"
                className="rounded-2xl shadow-xl w-[300px] lg:w-[340px]"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8 ">
            <button
              onClick={handlePrev}
              className="bg-blue-700 text-white px-2 py-2 rounded-full hover:bg-blue-800 cursor-pointer"
            >
              <span>
                <img src="/images/icon/arrow-left.png" alt="" />
              </span>
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-700 text-white px-2 py-2 rounded-full hover:bg-blue-800 cursor-pointer"
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
};

export default SeminarRecommendation;
