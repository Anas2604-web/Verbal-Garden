import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

/* Plant Data */
const plantsData = [
  {
    id: 1,
    name: "Tulsi",
    scientific: "Ocimum tenuiflorum",
    image: "/Images/tulsi.webp",
    description:
      "Tulsi is a sacred herb, used in Ayurveda for centuries to boost immunity and treat respiratory issues.",
    uses: ["Boosts immunity", "Cures cough & cold", "Stress relief"],
    model: "/models/tulsi.glb",
    position: [-2, 0, -2],
  },
  {
    id: 2,
    name: "Aloe Vera",
    scientific: "Aloe barbadensis miller",
    image: "/images/aloe.jpg",
    description:
      "Aloe Vera is widely used for its soothing and healing properties, especially for skin and digestive health.",
    uses: ["Heals skin", "Aids digestion", "Boosts hydration"],
    model: "/models/aloe.glb",
    position: [2, 0, -1],
  },
  {
    id: 3,
    name: "Peppermint",
    scientific: "Mentha × piperita",
    image: "/images/peppermint.jpg",
    description:
      "Peppermint is known for its refreshing aroma and is used to ease digestion and relieve headaches.",
    uses: ["Eases digestion", "Relieves headache", "Freshens breath"],
    model: "/models/peppermint.glb",
    position: [0, 0, 2],
  },
];

/* Plant 3D Model Component */
function PlantModel({ plant, onSelect }) {
  const { scene } = useGLTF(plant.model);

  return (
    <group
      position={plant.position}
      onClick={() => onSelect(plant)}
      className="cursor-pointer"
    >
      <primitive object={scene} scale={0.8} />
      {/* Label above plant */}
      <Html position={[0, 1.5, 0]} center>
        <div className="bg-white px-2 py-1 rounded-lg shadow text-sm font-semibold">
          {plant.name}
        </div>
      </Html>
    </group>
  );
}

/* Popup Right Side */
function PlantPopup({ plant, onClose }) {
  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      className="absolute top-0 right-0 h-full w-96 bg-white shadow-2xl p-4 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="text-red-500 font-bold mb-2 text-xl"
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold">{plant.name}</h2>
      <p className="italic text-gray-500">{plant.scientific}</p>

      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-40 object-cover rounded-xl my-3"
      />

      <p className="text-gray-700">{plant.description}</p>

      <h3 className="mt-3 font-semibold">Medicinal Uses</h3>
      <ul className="list-disc ml-6">
        {plant.uses.map((use, i) => (
          <li key={i}>{use}</li>
        ))}
      </ul>

      {/* 3D Model Preview inside popup */}
      <div className="mt-4 h-60 bg-gray-100 rounded-xl">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls />
          <Suspense fallback={null}>
            <primitive object={useGLTF(plant.model).scene} scale={1.2} />
          </Suspense>
        </Canvas>
      </div>

      <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-xl shadow">
        🌱 Save this plant
      </button>
    </motion.div>
  );
}

/* Main Virtual Garden */
export default function VirtualGarden() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <div className="relative h-screen w-screen">
      {/* Search bar */}
      <div className="absolute top-4 left-4 w-96 z-10">
        <input
          type="text"
          placeholder="Search plant..."
          className="w-full rounded-xl px-4 py-2 shadow bg-white"
        />
      </div>

      {/* 3D Garden */}
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Suspense fallback={null}>
          {plantsData.map((plant) => (
            <PlantModel
              key={plant.id}
              plant={plant}
              onSelect={setSelectedPlant}
            />
          ))}
        </Suspense>
      </Canvas>

      {/* Popup on right */}
      {selectedPlant && (
        <PlantPopup plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </div>
  );
}
