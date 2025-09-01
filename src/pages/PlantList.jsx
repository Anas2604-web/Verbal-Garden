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
      

      
      <div className="mt-1 pt-14 w-cover bg-green-400 h-[1770px]"> {/* Add enough top padding to clear navbar */}
        {/* Sticky Search Header */}
        <div className="fixed w-full bg-green-300 bg-no-repeat bg-cover h-27 pl-23">
          <h1 className="text-green-950 text-2xl font-bold mb-3 pt-3 ">All Plants</h1>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        

        {/* Plant Cards */}
        <div className="mt-30 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pl-22 pr-22">
            {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant}/>
          ))}
          </div>
          
        </div>
  

      {/* //footer */}
      <Footer/>
    </>
  );
};

export default PlantList;
