import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
      <input
        type="text"
        placeholder="Search plants..."
        className="w-[250px] h-8 px-5 pl-10 pr-2 py-2 bg-gray-100 rounded-3xl focus:outline-none focus:ring-5 focus:ring-green-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}