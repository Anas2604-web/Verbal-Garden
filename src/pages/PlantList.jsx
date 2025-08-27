import Navbar from "../Components/Navbar.jsx";
import plants from "../data/plants.json";
import PlantCard from "../Components/PlantCard.jsx";
import { useState } from "react";
import SearchBar from "../Components/Searchbar";
import Footer from "../Components/Footer.jsx";

const PlantList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-24 px-5"> {/* Add enough top padding to clear navbar */}
        {/* Sticky Search Header */}
        <div className="sticky top-19 z-30 bg-white py-3 shadow-md">
          {/* top-20 = below navbar (which is around 80px = 5rem) */}
          <h1 className="text-green-500 text-2xl font-bold mb-3">All Plants</h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        {/* Plant Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pl-22 pr-22">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>

      {/* //footer */}
      <Footer/>
    </>
  );
};

export default PlantList;
