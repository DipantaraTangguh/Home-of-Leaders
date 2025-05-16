import { Search, Plus } from "lucide-react";

export default function SearchInput({ addOnClick }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Cari Judul Research"
          className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <button
        onClick={addOnClick}
        className="flex items-center h-11 bg-[#0D4690] text-white rounded-full px-5 cursor-pointer focus:outline-none "
      >
        <Plus size={18} className="mr-2" /> Add
      </button>
    </div>
  );
}
