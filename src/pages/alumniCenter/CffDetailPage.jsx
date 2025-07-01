import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CallForFellowsData } from "../../assets/data/CallForFellowsData";
import { CFFScrollableDetail } from "../../components/Fragments/AlumniCenterDetailSection";

const CffDetailPage = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [fellowData, setFellowData] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH FELLOW DATA BY ID
  useEffect(() => {
    const fetchFellowData = () => {
      // Simulate API call - replace with actual API call later
      const fellow = CallForFellowsData.find(
        (item) => item.id.toString() === id
      );

      if (fellow) {
        setFellowData(fellow);
      } else {
        // If fellow not found, redirect to list page
        navigate("/alumni-center/call-for-fellows", { replace: true });
      }
      setLoading(false);
    };

    fetchFellowData();
  }, [id, navigate]);

  if (loading) {
    return (
      <main className="container mx-auto px-15 py-6 my-15">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg">Loading...</div>
        </div>
      </main>
    );
  }

  if (!fellowData) {
    return (
      <main className="container mx-auto px-15 py-6 my-15">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Fellow tidak ditemukan</h2>
          <Link
            to="/alumni-center/call-for-fellows"
            className="text-blue-600 hover:underline"
          >
            Kembali ke daftar Fellows
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-15 py-6 my-15">
      {/* BREADCRUMB / BACK BUTTON */}
      <div className="mb-6">
        <Link
          to="/alumni-center/call-for-fellows"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          ← Kembali ke Call For Fellows
        </Link>
      </div>

      {/* TITLE PAGE */}
      <h1 className="text-3xl font-bold mb-6 text-[#0D4690]">
        {fellowData.jobPosition} - {fellowData.companyName}
      </h1>

      {/* DETAIL SECTION */}
      <div className="w-full">
        <CFFScrollableDetail
          callForFellows={[fellowData]} // Pass single item as array
          selectedId={fellowData.id}
        />
      </div>
    </main>
  );
};

export default CffDetailPage;
