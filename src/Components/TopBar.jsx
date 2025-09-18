import React from "react";

export default function TopBar({ search, setSearch }) {
  return (
    <div className="topbar">
      <div className="search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#666" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <input placeholder="Search plant..." value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>

      <div className="right-controls">
        {/* <div className="pill">🗺️ Minimap</div> */}
        {/* <div className="pill">☰</div> */}
      </div>
    </div>
  );
}
