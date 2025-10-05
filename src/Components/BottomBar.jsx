import React from "react";
import { Link } from "react-router-dom";

export default function BottomBar({ onOpenBookmarks }) {
  return (
    <div className="bottombar">
      <Link to="/">🏠 Home</Link>
    </div>
  );
}
