import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ResearchCard = ({
  item,
  detailPathPrefix = "/research-center/publikasi",
  showStatus = false,
  getStatusStyles = null,
}) => {
  const navigate = useNavigate();

  // Dapatkan warna status jika showStatus true
  const { bg, text } = getStatusStyles?.(item.status) || {};

  return (
    <div className="bg-white rounded-2xl shadow-md flex p-6 gap-6">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-44 object-cover rounded-md"
      />

      <div className="flex-1 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {item.title}
        </h2>

        <div className="grid grid-cols-2 text-sm text-gray-700 mb-4">
          {showStatus ? (
            <div>
              <span className="font-medium block mb-1">Status</span>
              <span className={`${bg} ${text} px-5 py-1 rounded-full text-md`}>
                {item.status || "-"}
              </span>
            </div>
          ) : (
            <div>
              <span className="font-medium block mb-1">Penulis</span>
              <div className="flex items-center gap-2">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-6 h-6 rounded-full"
                />
                <span>{item.author}</span>
              </div>
            </div>
          )}

          <div className="md:border-l-2 md:pl-5">
            <span className="font-medium block mb-1">Tanggal Publish</span>
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarDays size={16} />
              <span>{item.date}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate(`${detailPathPrefix}/${item.slug}`)}
          className="self-end border-2 border-[#0D4690] font-semibold text-[#0D4690] px-4 py-2 rounded-full hover:bg-[#0D4690] hover:text-white transition cursor-pointer"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

const ResearchCardList = ({ data, detailPathPrefix, showStatus = false }) => {
  const statusClasses = {
    checking: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
    },
    published: {
      bg: "bg-green-100",
      text: "text-green-800",
    },
    rejected: {
      bg: "bg-red-100",
      text: "text-red-800",
    },
    default: {
      bg: "bg-gray-100",
      text: "text-gray-800",
    },
  };

  const getStatusStyles = (status) => {
    const key = status?.toLowerCase() || "default";
    return statusClasses[key] || statusClasses.default;
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {data.map((item) => (
        <ResearchCard
          key={item.id}
          item={item}
          detailPathPrefix={detailPathPrefix}
          showStatus={showStatus}
          getStatusStyles={getStatusStyles}
        />
      ))}
    </div>
  );
};

export default ResearchCardList;
