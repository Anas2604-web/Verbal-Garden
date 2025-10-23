import { useState } from "react";
import plants from "../data/plants";
import { Link } from "react-router-dom";

const navitems = [
  { name: "Home", href: "/" },
  { name: "Plants", href: "/plants" },
  { name: "VirtualTour", href: "/Virtualtour" },
  { name: "About", href: "/About" },
  { name: "Login", href: "/Login" },
];

const Navbar = () => {
  const [Searchterm, setSearchterm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Filter plants based on search term
  const FilteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(Searchterm.toLowerCase())
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          className="text-lg sm:text-2xl font-bold flex items-center text-green-800"
          href="/"
        >
          🌿 <span className="ml-1">Virtual Herbal Garden</span>
        </a>

        {/* Hamburger Button (Mobile) */}
        <button
          className="sm:hidden text-green-800 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-3 items-center">
          {navitems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-4 py-1.5 rounded-3xl text-green-800 transition-all duration-200 hover:bg-green-400 hover:text-white hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white shadow-lg border-t border-green-200 flex flex-col space-y-2 py-3 px-6 animate-slideDown">
          {navitems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)} // close menu after click
              className="block py-2 px-3 text-green-800 rounded-md hover:bg-green-400 hover:text-white transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
