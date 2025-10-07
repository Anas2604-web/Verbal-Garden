import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";
import plants from "../data/plants"; 

/* Load plant model */
function PlantModel({ modelPath, position, scale = 0.8 }) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} position={position} scale={[scale, scale, scale]} />;
}

/* Marker label for plant */
function PlantMarker({ position, label, onClick }) {
  return (
    <Html position={position} center>
      <div
        onClick={onClick}
        style={{
          background: "rgba(255,255,255,0.9)",
          padding: "6px 10px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
          color: "#2a2a2a",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.2)"
        }}
      >
        {label}
      </div>
    </Html>
  );
}

export default function GardenScene({ onSelectPlant, isAIPopupOpen }) {

  // Only show first 20 plants for performance
  const plantsToShow = plants.slice(0, 20);

  return (
    <div className="border-2 border-green-500 rounded-2xl bg-green-300" style={{ height: "87vh", width: "64%", marginTop: 35, marginLeft: 53, marginBottom:10}}>
      <Canvas camera={{ position: [0, 2.2, 5], fov: 60 }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        <Suspense fallback={null}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <meshStandardMaterial color="#7cc57c" />
          </mesh>

          {/* Render only plant models */}
          {plantsToShow.map((p) => (
            <PlantModel key={p.id} modelPath={p.model} position={p.position} />
          ))}

          {/* Render markers only if popup is NOT open */}
          {!isAIPopupOpen &&
            plantsToShow.map((p) => (
              <PlantMarker
                key={p.id}
                position={[p.position[0], p.position[1] + 1.2, p.position[2]]}
                label={p.name}
                onClick={() => onSelectPlant(p)}
              />
            ))
          }

          <Environment preset="forest" />
        </Suspense>

        <OrbitControls enablePan enableZoom />
      </Canvas>
    </div>
  );
}
