import React from "react";
import { useState } from "react";
import Login from "./login";
import plants from "../data/plants.json";
import SearchBar from "../Components/Searchbar"
import PlantCard from "./PlantCard";


const navitems = [
  { name: "Home", href: "/" },
  { name: "Plants", href: "/plants" },
  // { name: "Bookmarks", href: "/bookmarks" },
  { name: "VirtualTour", href: "/tour" },
  {name:"About", href:"/About"}
];



const Navbar = () => {
  const [Searchterm, setSearchterm]=useState("");
   
  //filter the plants based on search tree
  const FilteredPlants= plants.filter((p) => 
    p.name.toLowerCase().includes(Searchterm.toLowerCase())      //p is plant object  name is a propoerty of plant object tolowercase convert data name into lowercase and searchterm is user inout which is also converted to lowercase and includes is used to check whether the name is present in searching in plants or not
  );

  return (
    <nav className="fixed bg-white top-0 left-0 w-full z-40 py-3 shadow-md">
      <div className="w-full  flex items-center justify-between">
        <a className="text-2xl font-bold flex items-center px-6 pl-14" href="/">
          <span className="ml-1">🌿Virtual Herbal Garden</span>
        </a>
        <div className="sm:flex space-x-4 px-3">
          {navitems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 rounded-3xl transition-transform duration-300 bg-transparent hover:bg-green-300 hover:scale-110"
            >
              {item.name}
            </a>
          ))}
          
          <div className="pt-1 pr-20">
            <SearchBar Searchterm={Searchterm} setSearchTerm={setSearchterm} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




