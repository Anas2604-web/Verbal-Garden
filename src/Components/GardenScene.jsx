



import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sky, useGLTF, Html } from "@react-three/drei";
import plants from "../data/plants";

/* Load small plant model */
function PlantModel({ modelPath, position, scale = 0.8 }) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} position={position} scale={[scale, scale, scale]} />;
}

/* Load large decorative plants / trees */
function BackgroundPlant({ modelPath, position, scale = 2 }) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} position={position} scale={[scale, scale, scale]} />;
}

/* Marker label */
function PlantMarker({ position, label, onClick }) {
  return (
    <Html position={position} center>
      <div
        onClick={onClick}
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "6px 10px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
          color: "#2a2a2a",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {label}
      </div>
    </Html>
  );
}

export default function GardenScene({ onSelectPlant, isAIPopupOpen }) {
  const plantsToShow = plants.slice(0, 15);
  const radius = 3.8;

  const circlePlants = plantsToShow.map((plant, index) => {
    const angle = (index / plantsToShow.length) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return { ...plant, position: [x, 0, z] };
  });

  return (
    <div
      className="border-2 border-green-500 rounded-2xl shadow-lg"
      style={{
        height: "87vh",
        width: "64%",
        marginTop: 35,
        marginLeft: 53,
        marginBottom: 10,
        overflow: "hidden",
        background: "linear-gradient(180deg, #dfffe0 0%, #c3f7ff 100%)",
      }}
    >
      <Canvas camera={{ position: [0, 2.5, 9], fov: 60 }} shadows>
        {/* 🌤 Natural sky */}
        <Sky sunPosition={[100, 20, 100]} turbidity={8} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

        <Suspense fallback={null}>
          {/* 🌿 Plain 3D ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <meshStandardMaterial color="#88c67e" />
          </mesh>

          {/* 🌳 Background large plants / trees */}
          <BackgroundPlant
            modelPath="/assets/3D models/plant4.glb"
            position={[-6, 60, -4]}
            scale={2.5}
          />
          <BackgroundPlant
            modelPath="/assets/3D models/plant4.glb"
            position={[6, 60, -4]}
            scale={2.5}
          />

          {/* 🪴 Circular small plants */}
          {circlePlants.map((p) => (
            <PlantModel key={p.id} modelPath={p.model} position={p.position} />
          ))}

          {/* 🌼 Labels */}
          {!isAIPopupOpen &&
            circlePlants.map((p) => (
              <PlantMarker
                key={p.id}
                position={[p.position[0], p.position[1] + 1.2, p.position[2]]}
                label={p.name}
                onClick={() => onSelectPlant(p)}
              />
            ))}

          {/* 🌳 Realistic reflections */}
          <Environment preset="forest" />
        </Suspense>

        <OrbitControls enablePan enableZoom />
      </Canvas>
    </div>
  );
}                       