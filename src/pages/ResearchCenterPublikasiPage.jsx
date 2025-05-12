import Navbar from "../components/Layouts/Navbar";
import publikasiData from "../assets/data/publikasiData";
import { Footer } from "../components/Layouts/Footer";
import HeaderTitle from "../components/Elements/HeaderTitle";
import TotalResearch from "../components/Elements/ResearchCenterTotalResearch";
import ResearchCenterSearchInput from "../components/Fragments/ResearchCenterSearchInput";
import ResearchCenterCardList from "../components/Fragments/ResearchCenterCardList";
import ResearchCenterModal from "../components/Fragments/ResearchCenterModal";
import ResearchCenterContainer from "../components/Layouts/ResearchCenterContainer";
import useResearchCenterModal from "../hooks/useResearchCenterModal";

const ResearchCenterPublikasiPage = () => {
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
    <main>
      {/* Navbar */}
      <Navbar />
      {/* Container */}
      <ResearchCenterContainer>
        {/* Header */}
        <HeaderTitle title={"Publikasi"} />

        {/* Total Research */}
        <TotalResearch total={publikasiData.length} />

        {/* Search & Add */}
        <ResearchCenterSearchInput addOnClick={handleOpen} />

        {/* List Publication Card  */}
        <ResearchCenterCardList
          data={publikasiData}
          detailPathPrefix="/research-center/publikasi"
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
    </main>
  );
};

export default ResearchCenterPublikasiPage;
