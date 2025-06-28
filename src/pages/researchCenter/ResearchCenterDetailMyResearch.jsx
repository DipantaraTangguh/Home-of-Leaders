import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Layouts/Navbar";
import { MyResearchData } from "../../assets/data/MyResearchData";
import { Footer } from "../../components/Layouts/Footer";
import {
  ResearchCenterDetailBackButton,
  ResearchCenterDetailMain,
} from "../../components/Fragments/ResearchCenterDetailSection";

const ResearchCenterDetailMyResearch = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Cari data berdasarkan slug dari myresearchData
  const research = MyResearchData.find((item) => item.slug === slug);

  if (!research) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-red-600">Publikasi tidak ditemukan.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 inline-flex items-center gap-2 text-[#0D4690]"
        >
          <ArrowLeft size={16} /> Kembali
        </button>
      </div>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <section className="container mx-auto py-6 px-15 pb-20">
        <ResearchCenterDetailBackButton link={"/research-center/my-research"} />

        <ResearchCenterDetailMain research={research} />
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default ResearchCenterDetailMyResearch;
