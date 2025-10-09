import React from "react";
import { Link } from "react-router-dom";

export default function BottomBar({ onOpenBookmarks }) {
  return (
    <div className="bottombar flex gap-4 p-1">
      <Link
        to="/Virtualtour"
        className="bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition transform hover:scale-105"
      >
        ← Virtual Tour
      </Link>

      <Link
        to="/"
        className="bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition transform hover:scale-105"
      >
        ← Home
      </Link>
    </div>
  );
}
