import React from "react";

export default function TopBar({ search, setSearch }) {
  return (
    <div className="flex">
      <div className="ml-10 mt-7 mb-1 w-fit h-10 ">
        <input placeholder="    Search plant..." value={search} onChange={(e)=>setSearch(e.target.value)} 
        className="border-2 border-white rounded-2xl pl-5 md:w-96 px-4 py-2 focus:outline-none focus:ring-3 focus:ring-green-500 placeholder-gray-500" />
      </div>
    </div>
  );
}

