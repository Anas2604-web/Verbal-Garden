import { useState } from "react";

export default function PlantCard({ plant }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Plant Card */}
      <div className="w-60 border rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 bg-white">
        {/* Image */}
        <div className="rounded-lg">
          <img
            src={plant.image}
            alt={plant.name}
            className="h-60 w-full rounded-lg bg-white object-cover"
          />
        </div>


        {/* Plant Info */}
        <h2 className="text-lg font-semibold">{plant.name}</h2>
        <p className="text-sm text-gray-500 italic">{plant.scientificName}</p>
        <p className="text-sm text-gray-600 mt-1 truncate">{plant.description}</p>
        


        {/* Button */}
        <button
          className="mt-3 bg-gray-100 text-black px-3 py-1 rounded-lg text-sm transition-colors hover:bg-gray-200"
          onClick={() => setIsOpen(true)}
        >
          View Detail
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-green-100/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)} // click outside to close
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-lg max-w-lg w-100 p-4">
            <button
              className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <div className="">
              <img
              src={plant.image}
              alt={plant.name}
              className=" ml-10 h-65 w-70 object-cover rounded-lg"
              />
            </div>
            
            <h2 className="text-xl font-bold">{plant.name}</h2>
            <p className="text-gray-500 italic mb-2 text-lg">{plant.scientificName}</p>
            <p className="text-gray-700">{plant.description}</p>
            <h4 className="font-medium mt-1">Medicinal Uses:</h4>
            <ul className="text-sm list-disc ml-5">
             {plant.uses.map((u, idx) => <li key={idx}>{u}</li>)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
