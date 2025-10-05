import React from "react";

export default function TopBar({ search, setSearch }) {
  return (
    <div className="">
      <div className="ml-10 mt-4 w-fit h-7">
        <input placeholder="       Search plant..." value={search} onChange={(e)=>setSearch(e.target.value)} className="border-2 border-white rounded-2xl pl-5" />
      </div>
    </div>
  );
}
