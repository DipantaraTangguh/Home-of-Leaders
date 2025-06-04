import { useNavigate, useParams } from "react-router-dom";
import { AlumniCenterCardCFF, AlumniCenterCardBA, AlumniCenterCardIYSF } from "../Elements/AlumniCenterCard";
import { CallForFellowsData } from "../../assets/data/CallForFellowsData";
import { BondingActivitiesData } from "../../assets/data/BondingActivitiesData";
import { AdvocacyCentreData } from "../../assets/data/AdvocacyCentreData";

// CALL FOR FELLOWS SECTION WRAPPER
export const CallForFellowsSection = () => {

  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row bg-[#F5D6C0] rounded-[40px] py-12 px-6 lg:px-12 gap-5 mb-10">
      {/* INFO BOX */}
      <div className="bg-[#feeadc] rounded-[40px] p-15 lg:p-22 max-w-full lg:max-w-[480px] flex flex-col justify-between drop-shadow-lg">
        <h2 className="text-4xl font-bold text-[#F28C28] mb-4">
          Call For Fellows
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          Platform yang mendukung para alumni untuk mengakses peluang karier,
          beasiswa, dan pengembangan diri. Program ini membantu alumni terhubung
          dengan peluang yang relevan untuk menunjang perjalanan profesional
          mereka. Temukan peluang untuk memaksimalkan potensi dirimu di
          #CallForFellows!
        </p>
        <button onClick={() => navigate("/alumni-center/call-for-fellows/")}className="bg-[#E89229] hover:bg-[#feeadc] hover:text-[#E89229] transition text-[#FFFFFF] px-6 py-2 rounded-full text-sm font-semibold border border-[#E89229]">
          Lihat Detail
        </button>
      </div>

      {/* SCROLLABLE CARD WRAPPER */}
      <div className="w-full rounded-[40px] overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-5 px-6 py-8 w-fit scroll-ml-6">
          {CallForFellowsData.map((fellows) => (
            <AlumniCenterCardCFF
              key={fellows.id}
              fellows={fellows}
              disableButton={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// BONDING ACTIVITIES SECTION WRAPPER
export const BondingActivitiesSection = () => {

  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row bg-[#BEC4D5] rounded-[40px] py-12 px-6 lg:px-12 gap-5 mb-10">
      {/* SCROLLABLE CARD WRAPPER */}
      <div className="w-full rounded-[40px] overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-5 px-6 py-8 w-fit scroll-ml-6">
          {BondingActivitiesData.map((bonding) => (
            <AlumniCenterCardBA
              key={bonding.id}
              bonding={bonding}
              disableButton={false}
            />
          ))}
        </div>
      </div>

      {/* INFO BOX */}
      <div className="bg-[#F2F3F6] rounded-[40px] p-15 lg:p-20 max-w-full lg:max-w-[480px] flex flex-col justify-between drop-shadow-lg">
        <h2 className="text-4xl font-bold text-[#0D4690] mb-4">
          Bonding Activities
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          Program yang dirancang untuk mempererat silaturahmi antar alumni dan
          membangun hubungan yang lebih kuat di komunitas. Melalui berbagai
          kegiatan interaktif, alumni dapat saling berbagi pengalaman dan
          memperluas jaringan profesional. Inisiatif ini menjadi wadah yang
          memperkuat koneksi sekaligus menciptakan kolaborasi yang bermanfaat
          antar alumni.
        </p>
        <button onClick={() => navigate("/alumni-center/bonding-activities")} className="bg-[#0D4690] hover:bg-[#216EFFB2] transition text-white px-6 py-2 rounded-full text-sm font-semibold">
          Lihat Detail
        </button>
      </div>
    </section>
  );
};

// INDONESIA YOUTH SUSTAINABILITY FORUM SECTION WRAPPER
export const IYSFSection = () => {
  
  const navigate = useNavigate();

  return (
    <section className="flex flex-col lg:flex-row bg-[#479F76] rounded-[40px] py-12 px-6 lg:px-12 gap-5">
      {/* INFO BOX */}
      <div className="bg-[#F5FBF7] rounded-[40px] p-15 max-w-full lg:max-w-[480px] flex flex-col justify-between drop-shadow-lg">
        <h2 className="text-4xl font-bold text-[#479F76] mb-4 mt-4">
          Indonesia <span className="text-[#E89229]">Youth</span>{" "}
          Sustainabiliity <span className="text-[#E89229]">Forum</span>
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          Platform untuk melibatkan alumni sebagai bagian aktif dalam merancang
          dan mendukung keberlangsungan acara bertema keberlanjutan. Program ini
          memberikan kesempatan bagi alumni untuk berkontribusi dalam inisiatif
          yang mendorong perubahan positif di masyarakat. IYSF menjadi wadah
          kolaborasi bagi generasi muda untuk menciptakan dampak nyata dalam
          pembangunan berkelanjutan.
        </p>
        <button
          onClick={() => navigate("/advocacy-center/iysf")}
          className="bg-[#E89229] hover:bg-[#F5FBF7] hover:text-[#E89229] transition text-[#FFFFFF] px-6 py-2 rounded-full text-sm font-semibold border border-[#E89229]"
        >
          Lihat Detail
        </button>
      </div>

      {/* SCROLLABLE CARD WRAPPER */}
      <div className="w-full rounded-[40px] overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-5 px-6 py-8 w-fit">
          {AdvocacyCentreData.map((iysf) => (
            <AlumniCenterCardIYSF
              key={iysf.id}
              iysf={iysf}
              disableButton={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
