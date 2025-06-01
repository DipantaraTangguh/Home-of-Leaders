import Navbar from "../components/Layouts/Navbar";
import { Footer } from "../components/Layouts/Footer";
import prosidingData from "../assets/data/prosidingData";
import HeaderTitle from "../components/Elements/HeaderTitle";
import TotalResearch from "../components/Elements/ResearchCenterTotalResearch";
import ResearchCenterSearchInput from "../components/Fragments/ResearchCenterSearchInput";
import ResearchCenterCardList from "../components/Fragments/ResearchCenterCardList";
import ResearchCenterModal from "../components/Fragments/ResearchCenterModal";
import Container from "../components/Layouts/Container";
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
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-[#0D4690]">Prosiding</h1>
        </div>

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
      </Container>
      <Footer />
    </section>
  );
};

export default ResearchCenterProsidingPage;
