import Navbar from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";
import { MyResearchData } from "../../assets/data/MyResearchData";
import ResearchCenterTotalResearch from "../../components/Elements/ResearchCenterTotalResearch";
import ResearchCenterSearchInput from "../../components/Fragments/ResearchCenterSearchInput";
import ResearchCenterCardList from "../../components/Fragments/ResearchCenterCardList";
import ResearchCenterModal from "../../components/Fragments/ResearchCenterModal";
import Container from "../../components/Layouts/Container";
import useResearchCenterModal from "../../hooks/useResearchCenterModal";

const ResearchCenterMyResearchPage = () => {
  const {
    isModalOpen,
    formData,
    handleOpen,
    handleClose,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useResearchCenterModal();

  return (
    <section>
      <Navbar />
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-[#0D4690]">My Research</h1>
        </div>

        {/* Total Research */}
        <ResearchCenterTotalResearch total={MyResearchData.length} />

        {/* Search & Add */}
        <ResearchCenterSearchInput addOnClick={handleOpen} />

        {/* Daftar Kartu Publikasi */}
        <ResearchCenterCardList
          data={MyResearchData}
          detailPathPrefix="/research-center/my-research"
          showStatus
        />

        {/* Modal */}
        <ResearchCenterModal
          isOpen={isModalOpen}
          onClose={handleClose}
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleChange}
          onFileChange={handleFileChange}
        />
      </Container>
      <Footer />
    </section>
  );
};

export default ResearchCenterMyResearchPage;
