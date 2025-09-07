// import React, { useState, useEffect, useRef } from "react";
// import "aframe";

// export default function Tour() {
//   const [showPopup, setShowPopup] = useState(false);
//   const hotspotRef = useRef(null);

//   useEffect(() => {
//     // Hotspot par click event attach karna
//     if (hotspotRef.current) {
//       hotspotRef.current.addEventListener("click", () => {
//         setShowPopup(true);
//       });
//     }
//   }, []);

//   return (
//     <div className="w-full h-screen relative">
//       {/* 360° Garden Scene */}
//       <a-scene embedded vr-mode-ui="enabled: true">
//         {/* Background 360° image */}
//         <a-sky
//           src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
//           rotation="0 -130 0"
//         ></a-sky>

//         {/* Hotspot Marker */}
//         <a-entity
//           ref={hotspotRef}
//           geometry="primitive: sphere; radius: 0.3"
//           material="color: green; opacity: 0.9"
//           position="0 1.5 -3"
//         ></a-entity>

//         {/* Camera + Cursor */}
//         <a-entity camera look-controls position="0 1.6 0">
//           <a-cursor></a-cursor>
//         </a-entity>
//       </a-scene>

//       {/* Plant Popup */}
//       {showPopup && (
//         <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
//           <div className="bg-white rounded-2xl p-6 w-[600px] shadow-lg relative">
//             {/* Close button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
//             >
//               ✕
//             </button>

//             {/* Plant Info */}
//             <h2 className="text-2xl font-bold text-green-700">
//               🌱 Tulsi (Holy Basil)
//             </h2>
//             <p className="mt-2 text-gray-700">
//               <b>Scientific Name:</b> Ocimum tenuiflorum <br />
//               <b>Uses:</b> Boosts immunity, reduces stress, supports respiratory health.
//             </p>

//             {/* Plant Image */}
//             <img
//               src="/plants/tulsi.jpg"
//               alt="Tulsi Plant"
//               className="w-full h-64 object-cover rounded-lg mt-4"
//             />

//             {/* 3D Model Viewer */}
//             <div className="mt-4 border rounded-lg overflow-hidden">
//               <model-viewer
//                 src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
//                 alt="3D Plant Model"
//                 auto-rotate
//                 camera-controls
//                 style={{ width: "100%", height: "400px" }}
//               ></model-viewer>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
