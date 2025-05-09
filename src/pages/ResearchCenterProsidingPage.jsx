import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";
import prosidingData from "../assets/data/prosidingData";
import HeaderTitle from "../components/Elements/HeaderTitle";
import TotalResearch from "../components/Elements/ResearchCenterTotalResearch";
import ResearchCenterSearchInput from "../components/Fragments/ResearchCenterSearchInput";
import ResearchCenterCardList from "../components/Fragments/ResearchCenterCardList";
import ResearchCenterModal from "../components/Fragments/ResearchCenterModal";
import ResearchCenterContainer from "../components/Layouts/ResearchCenterContainer";
import useResearchCenterModal from "../hooks/useResearchCenterModal";

const ResearchCenterProsidingPage = () => {
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
        <HeaderTitle title="Prosiding" />

        {/* Total Research */}
        <TotalResearch total={prosidingData.length} />

        {/* Search & Add */}
        <ResearchCenterSearchInput addOnClick={handleOpen} />

        {/* List Prosiding Card */}
        <ResearchCenterCardList
          data={prosidingData}
          detailPathPrefix="/research-center/prosiding"
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

export default ResearchCenterProsidingPage;
