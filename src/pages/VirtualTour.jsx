import { useState } from "react";
import plants from "../data/plants.jsx";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function VirtualTour() {
  const [index, setIndex] = useState(0);
  const [selectedPlant, setSelectedPlant] = useState(null); // For popup

  const plant = plants[index];

  const next = () => setIndex((i) => (i + 1) % plants.length);
  const prev = () => setIndex((i) => (i - 1 + plants.length) % plants.length);

  return (
    <>
      <Navbar />

      {/* //main body */}
      <div className="pt-10 min-h-screen bg-gradient-to-b from-green-200 to-green-100 text-green-900">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            Virtual Herbal Garden Tour
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-green-700">
            Embark on a serene virtual journey through our meticulously designed
            herbal garden. Explore in immersive 3D, listen to the soothing sounds
            of nature, and uncover the secrets of therapeutic Ayurveda.
          </p>
          <button className="mt-10 bg-amber-50 w-30 h-10 rounded-3xl text-center font-medium">
            <Link to="/GardenScene">Start Tour</Link>
          </button>
        </div>

        {/* Mission Section */}
        <div className="pl-35 w-full mx-auto grid md:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col justify-center">
            <div className="bg-green-200 py-7 rounded-2xl">
              <h2 className="text-3xl font-bold text-center text-green-900 mb-5">
                ✨ Key Features
              </h2>
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 pl-5 p-4">
                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                  <h3 className="text-xl font-semibold">🌱 Healing Herbs</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                  <img
                    src="./assets/Images/key features center.png"
                    alt=""
                    className="rounded-md"
                  />
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                  <h3 className="text-xl font-semibold">🌱 Culinary Herbs</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105">
                  <h3 className="text-xl font-semibold">🌱 Ayurvedic Treasures</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105">
                  <h3 className="text-xl font-semibold">🌱 Aromatic Plants</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105">
                  <h3 className="text-xl font-semibold">🌱 Rare Medicinal Plants</h3>
                </div>
              </div>
            </div>
          </div>

          {/* image */}
          <div>
            <img
              src="./assets/Images/virtual image key features.jpg"
              alt="Herbal Mission"
              className="rounded-2xl shadow-lg bg-white h-[500px] mt-5"
            />
          </div>
        </div>

        {/* Highlight Plants */}
        <div className="pt-5 pl-30 flex flex-col justify-center pb-8 pr-30">
          <div className="bg-green-200 rounded-2xl py-7">
            <h3 className="text-3xl font-bold mx-8 mb-5">Highlight Plants</h3>

            <div className="max-w-6xl mx-auto grid md:grid-cols-5 sm:grid-cols-2 gap-6 px-9">
              {plants.slice(0, 10).map((plant) => (
                <div
                  key={plant.id}
                  onClick={() => setSelectedPlant(plant)}
                  className="cursor-pointer p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition"
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="h-24 w-full object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold">{plant.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🌿 Popup Modal */}
        {selectedPlant && (
          <div className="fixed inset-0 bg-green-100/60 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
                onClick={() => setSelectedPlant(null)}
              >
                ✕
              </button>

              {/* Plant Details */}
              <img
                src={selectedPlant.image}
                alt={selectedPlant.name}
                className="h-60 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                {selectedPlant.name}
              </h2>
              <p className="italic text-green-700 mb-3">
                {selectedPlant.scientificName}
              </p>
              <p className="text-gray-700">{selectedPlant.description}</p>

              <div className="mt-5 text-center">
                <Link
                  to={`/plant/${selectedPlant.id}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
