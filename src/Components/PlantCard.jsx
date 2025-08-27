// export default function PlantCard({ plant }) {
//   return (
//     <div className="border rounded shadow p-4">
//       <img src={plant.image} alt={plant.name} className="h-40 w-full object-cover rounded" />
//       <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
//       <p className="text-gray-600">{plant.scientificName}</p>
//     </div>
//   );
// }

import { Link } from "react-router-dom";



export default function PlantCard({ plant }) {
  return (
    <div className=" border rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <img
        src={plant.image}
        alt={plant.name}
        className="h-40 w-full rounded-lg"
      />

      {/* Plant Info */}
      <h2 className="text-lg font-semibold mt-3">{plant.name}</h2>
      <p className="text-sm text-gray-500 italic">{plant.scientificName}</p>
      <p className="text-sm text-gray-600 mt-1">{plant.description}</p>

      {/* Button */}
      <button className="mt-3 bg-gray-100 text-black px-3 py-1 rounded-lg text-sm  transition-colors">
        <Link to="/plants">View Details</Link>
      </button>
    </div>
  );
}
