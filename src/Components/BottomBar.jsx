import React from "react";
import { Link } from "react-router-dom";

export default function BottomBar({ onOpenBookmarks }) {
  return (
    <div className="bottombar flex flex-col sm:flex-row gap-3 sm:gap-4 p-2 sm:p-4 justify-center sm:justify-start items-center sm:items-center">
      <Link
        to="/Virtualtour"
        className="bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition transform hover:scale-105 w-full sm:w-auto text-center"
      >
        ← Virtual Tour
      </Link>

      <Link
        to="/"
        className="bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition transform hover:scale-105 w-full sm:w-auto text-center"
      >
        ← Home
      </Link>
    </div>
  );
}
