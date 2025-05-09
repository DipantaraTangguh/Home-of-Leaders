import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";
import myresearchData from "../assets/data/myresearchData";
import HeaderTitle from "../components/Elements/HeaderTitle";
import ResearchCenterTotalResearch from "../components/Elements/ResearchCenterTotalResearch";
import ResearchCenterSearchInput from "../components/Fragments/ResearchCenterSearchInput";
import ResearchCenterCardList from "../components/Fragments/ResearchCenterCardList";
import ResearchCenterModal from "../components/Fragments/ResearchCenterModal";
import ResearchCenterContainer from "../components/Layouts/ResearchCenterContainer";
import useResearchCenterModal from "../hooks/useResearchCenterModal";

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
      <ResearchCenterContainer>
        {/* Header */}
        <HeaderTitle title="My Research" />

        {/* Total Research */}
        <ResearchCenterTotalResearch total={myresearchData.length} />

        {/* Search & Add */}
        <ResearchCenterSearchInput addOnClick={handleOpen} />

        {/* Daftar Kartu Publikasi */}
        <ResearchCenterCardList
          data={myresearchData}
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
      </ResearchCenterContainer>
      <Footer />
    </section>
  );
};

export default ResearchCenterMyResearchPage;
