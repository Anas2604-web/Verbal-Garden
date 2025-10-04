import React, { useState } from "react";
import AIInfoPopup from "./AIInfoPopup";

export default function Popup({ plant, onClose, setAiPopupOpen }) {
  const [showAIInfoPopup, setShowAIInfoPopup] = useState(false);

  if (!plant) return null;

  const handleAIButtonClick = () => {
    setShowAIInfoPopup(true);
    setAiPopupOpen(true); // tell GardenScene to hide markers
  };

  const handleAIClose = () => {
    setShowAIInfoPopup(false);
    setAiPopupOpen(false); // show markers again
  };

  return (
    <div className="p-3" role="dialog" aria-labelledby="plant-title">
      <button className="float-right text-lg" onClick={onClose}>✕</button>

      <h2 id="plant-title" className="text-green-950 font-semibold">{plant.name}</h2>
      <em className="block text-green-800 mb-2">{plant.scientificName}</em>

      <button
        onClick={handleAIButtonClick}
        className="bg-green-600 text-white rounded-md px-3 py-1 mt-3 mb-2 cursor-pointer hover:bg-green-700 transition"
      >
        🌿 Ask AI about {plant.name}
      </button>

      <img src={plant.image} alt={plant.name} className="w-full h-44 rounded-md" />

      <div className="mt-2">
        <model-viewer
          src={plant.model}
          alt={plant.name}
          auto-rotate
          camera-controls
          style={{ width: "100%", height: "170px", background: "#fff" }}
        />
      </div>

      <p className="text-sm mt-1">{plant.description}</p>

      <h4 className="font-medium mt-1">Medicinal Uses:</h4>
      <ul className="text-sm list-disc ml-5">
        {plant.uses.map((u, idx) => <li key={idx}>{u}</li>)}
      </ul>

      <div>
        {showAIInfoPopup && (
          <AIInfoPopup
            plantName={plant.name}
            onClose={handleAIClose}
          />
        )}
      </div>
    </div>
  );
}
