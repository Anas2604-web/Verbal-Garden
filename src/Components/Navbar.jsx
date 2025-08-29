import React from "react";
import { useState } from "react";
import Login from "./login";
import plants from "../data/plants.json";
import SearchBar from "../Components/Searchbar"
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom";


const navitems = [
  { name: "Home", href: "/" },
  { name: "Plants", href: "/plants" },
  { name: "VirtualTour", href: "/tour" },
  {name:"About", href:"/About"},
  {name:"Login", href:"/Login"},
];



const Navbar = () => {
  const [Searchterm, setSearchterm]=useState("");
   
  //filter the plants based on search tree
  const FilteredPlants= plants.filter((p) => 
    p.name.toLowerCase().includes(Searchterm.toLowerCase())      //p is plant object  name is a propoerty of plant object tolowercase convert data name into lowercase and searchterm is user inout which is also converted to lowercase and includes is used to check whether the name is present in searching in plants or not
  );

  return (
    <nav className="fixed bg-white top-0 left-0 w-full py-3 shadow-md h-15">
      <div className="w-full  flex items-center justify-between">
        <a className="text-2xl font-bold flex items-center px-6 pl-14" href="/">
          <span className="ml-1">🌿Virtual Herbal Garden</span>
        </a>
        <div className="sm:flex space-x-3 px-20">
          {navitems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-3 pt-1.5  rounded-3xl transition-transform duration-200  hover:bg-green-400 hover:scale-105 h-9"
            >
              {item.name}
            </Link>
          ))}
           
           
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




