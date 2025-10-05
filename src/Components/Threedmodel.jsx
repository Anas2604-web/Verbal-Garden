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
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-b from-sky-100 to-green-100">
      <TopBar
        search={search}
        setSearch={(val) => {
          setSearch(val);
          if (val.length > 1) handleSearchSelect(val);
        }}
      />

      <div className="">
        <GardenScene
          onSelectPlant={(p) => setSelectedPlant(p)}
          isAIPopupOpen={aiPopupOpen} // PASS AI popup state
        />
      </div> 

      {selectedPlant && (
        <div className="absolute top-5 right-6 z-50 w-90 border-2 border-green-400 bg-green-200 rounded-2xl">
          <Popup
            plant={selectedPlant}
            onClose={() => setSelectedPlant(null)}
            onSave={handleSave}
            setAiPopupOpen={setAiPopupOpen} // PASS setter so Popup can open AI popup
          />
        </div>
      )}

      <BottomBar
        onOpenBookmarks={() =>
          alert("Bookmarks:\n" + bookmarks.map((b) => b.name).join(", "))
        }
      />
    </div>
  );
}
