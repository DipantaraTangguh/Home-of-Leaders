import Navbar from "../../components/Layouts/Navbar";
import { PublicationsDetailData } from "../../assets/data/PublicationsDetailData"
import { Footer } from "../../components/Layouts/Footer";
import { HeaderTitle } from "../../components/Elements/HeaderTitle";
import TotalResearch from "../../components/Elements/ResearchCenterTotalResearch";
import ResearchCenterSearchInput from "../../components/Fragments/ResearchCenterSearchInput";
import ResearchCenterCardList from "../../components/Fragments/ResearchCenterCardList";
import ResearchCenterModal from "../../components/Fragments/ResearchCenterModal";
import Container from "../../components/Layouts/Container";
import useResearchCenterModal from "../../hooks/useResearchCenterModal";

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
      <Container>
        {/* Header */}
        <HeaderTitle title={"Publikasi"} />

        {/* Total Research */}
        <TotalResearch total={PublicationsDetailData.length} />

        {/* Search & Add */}
        <ResearchCenterSearchInput addOnClick={handleOpen} />

        {/* List Publication Card  */}
        <ResearchCenterCardList
          data={PublicationsDetailData}
          detailPathPrefix="/research-center/publication"
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
    </main>
  );
};

export default ResearchCenterPublikasiPage;
