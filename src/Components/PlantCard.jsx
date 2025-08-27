// export default function PlantCard({ plant }) {
//   return (
//     <div className="border rounded shadow p-4">
//       <img src={plant.image} alt={plant.name} className="h-40 w-full object-cover rounded" />
//       <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
//       <p className="text-gray-600">{plant.scientificName}</p>
//     </div>
//   );
// }



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
      <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition-colors">
        View Details
      </button>
    </div>
  );
}
