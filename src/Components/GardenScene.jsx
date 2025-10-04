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
  return (
    <div className="border-2 border-green-500 rounded-2xl" style={{ height: "75vh", width: "65%", marginTop: 85, marginLeft: 20 }}>
      <Canvas camera={{ position: [0, 2.2, 5], fov: 60 }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        <Suspense fallback={null}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <meshStandardMaterial color="#7cc57c" />
          </mesh>

          {!isAIPopupOpen && plants.map((p) => (
            <React.Fragment key={p.id}>
              <PlantModel modelPath={p.model} position={p.position} />
              <PlantMarker
                position={[p.position[0], p.position[1] + 1.2, p.position[2]]}
                label={p.name}
                onClick={() => onSelectPlant(p)}
              />
            </React.Fragment>
          ))}

          <Environment preset="forest" />
        </Suspense>

        <OrbitControls enablePan enableZoom />
      </Canvas>
    </div>
  );
}

