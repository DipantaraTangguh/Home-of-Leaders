import { FileCheck, CircleCheck } from "lucide-react";

// PRESENCE POPUP FOR MY ACTIVITY
// PRESENCE POPUP
export const PresencePopUp = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-[482px] max-h-[350px] p-7 relative">
        {/* ICONS */}
        <div className="flex justify-center mb-4">
          <FileCheck size={100} className="text-[#0D4690]" />
        </div>
        {/* TITLE */}
        <h2 className="text-center text-xl font-bold mb-2 text-[#1F1F1F]">
          Lakukan Presensi
        </h2>

        {/* QUOESTION POPUP */}
        <p className="text-center text-sm mb-4 text-[#1F1F1F]">
          Apa kamu yakin ingin melakukan presensi?
        </p>

        {/* BUTTON CANCEL & CONFIRM */}
        <div className="flex justify-center gap-2">
          <button
            onClick={onClose}
            className="bg-gray-200 text-[#6C757D] px-4 py-2 rounded-md text-sm font-semibold w-[150px] h-[40] hover:bg-red-500 hover:text-white"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md text-sm font-semibold w-[150px] h-[40] bg-[#0D4690] text-white hover:bg-[#216EFFB2]"
          >
            Ya. Yakin
          </button>
        </div>
      </div>
    </div>
  );
};

// SUCCESING POPUP WHEN PRESENCE POPUP WAS CLICKED
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
