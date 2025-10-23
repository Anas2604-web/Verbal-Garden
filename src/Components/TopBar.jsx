import React from "react";

export default function TopBar({ search, setSearch }) {
  return (
    <div className="flex justify-center w-full px-4 mt-4">
      <div className="w-full max-w-sm">
        <input
          placeholder="Search plant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 border-white rounded-2xl pl-5 pr-4 py-2 focus:outline-none focus:ring-3 focus:ring-green-500 placeholder-gray-500 transition-all"
        />
      </div>
    </div>
  );
}
