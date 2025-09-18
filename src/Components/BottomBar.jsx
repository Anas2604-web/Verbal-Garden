import React from "react";
// import { Link } from "react-router-dom";

export default function BottomBar({ onOpenBookmarks }) {
  return (
    <div className="bottombar">
      <button className="icon-pill">🏠 Home</button>
      <button className="icon-pill">🔊 Narration</button>
    </div>
  );
}
