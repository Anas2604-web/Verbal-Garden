import React, { useState } from "react";
import GardenScene from "./GardenScene";
import Popup from "./Popup";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import plantsData from "../data/plants";

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [aiPopupOpen, setAiPopupOpen] = useState(false); // NEW
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState("");

  const handleSave = (plant) => {
    setBookmarks((s) => {
      if (s.find(p => p.id === plant.id)) return s;
      return [...s, plant];
    });
    alert(`${plant.name} saved to bookmarks`);
  };

  const handleSearchSelect = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const found = plantsData.find(p => p.name.toLowerCase().includes(q));
    if (found) setSelectedPlant(found);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-200 to-green-300">
      <div className="mt-8 text-center text-5xl font-bold text-green-900">
        <h3>Welcome To Virtual Tour</h3>
      </div>
      <TopBar
        search={search}
        setSearch={(val) => {
          setSearch(val);
          if (val.length > 1) handleSearchSelect(val);
        }}
      />

      <div className="h-[95vh] w-[100vw]">
        <GardenScene
          onSelectPlant={(p) => setSelectedPlant(p)}
          isAIPopupOpen={aiPopupOpen} // PASS AI popup state
        />
      </div> 

      {selectedPlant && (
        <div className="absolute top-38 right-6 z-50 w-90 max-h-[86.9vh] overflow-y-auto border-2 border-green-400 bg-green-200 rounded-2xl shadow-lg p-4 scrollbar-hide">
          <Popup
            plant={selectedPlant}
            onClose={() => setSelectedPlant(null)}
            onSave={handleSave}
            setAiPopupOpen={setAiPopupOpen}
          />
        </div>
      )}

      
      <div className="mb-5 ml-10">
        <BottomBar
        onOpenBookmarks={() =>
          alert("Bookmarks:\n" + bookmarks.map((b) => b.name).join(", "))
        }
      />
      </div>
    </div>
  );
}
