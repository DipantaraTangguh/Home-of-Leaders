import { CircleCheck } from "lucide-react";

export const SuccessPresencePopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-[482px] p-7 max-h-[350px] text-center">
        {/* ICONS */}
        <div className="flex justify-center mb-4">
          <CircleCheck size={100} className="text-[#198754]" />
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-[#1F1F1F] mb-2">Sukses!</h2>
        
        {/* INFORMATIONS */}
        <p className="text-sm text-[#1F1F1F] mb-6">
          Kamu berhasil Presensi
        </p>

        {/* BUTTON */}
        <button
          onClick={onClose}
          className="bg-white text-[#0D4690] px-6 py-2 rounded-md font-semibold hover:bg-[#0D4690] hover:text-white text-sm w-full"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};
