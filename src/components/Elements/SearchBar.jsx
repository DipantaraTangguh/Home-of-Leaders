import { Search } from "lucide-react";

export const SearchBar = ({ searchTerm, placeholder }) => {
  return (
    <div className="relative w-full sm:max-w-1/4 mb-6">
      <Search
        size={18}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
      <input
        type="text"
        placeholder={placeholder}
        onChange={searchTerm}
        className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};
