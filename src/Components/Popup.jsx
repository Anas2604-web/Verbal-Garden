import React from "react";

export default function Popup({ plant, onClose, onSave }) {
  if (!plant) return null;

  return (
    <div className="" role="dialog" aria-labelledby="plant-title">
      <button className="close-btn" onClick={onClose}>✕</button>

      <h2 id="plant-title" className=" text-green-950 font-medium pl-3 pt-2">{plant.name}</h2>
      <div className=" text-green-950 w-50 font-medium pl-3">
        <em >{plant.scientificName}</em>
      </div>

      <img src={plant.image} alt={plant.name} className="h-[26vh] w-[100%] mt-1 pl-3 pr-3" />

      {/* model-viewer to show GLB */}
      <div style={{ marginBottom: 12,paddingLeft:15, paddingRight:15 }}>
        <model-viewer
          src={plant.model}
          alt={plant.name}
          auto-rotate
          camera-controls
          style={{ width: "100%", height: "220px", background: "#fff", }}
        />
      </div>

      <p className="text-sm pl-3">{plant.description}</p>

      <h4 className="font-medium mt-2 pl-3">Medicinal Uses:</h4>
      <ul className="text-sm pl-3 pb-5">
        {plant.uses.map((u, idx) => <li key={idx}>{u}</li>)}
      </ul>

      
    </div>
  );
}
