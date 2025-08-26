export default function PlantCard({ plant }) {
  return (
    <div className="border rounded shadow p-4">
      <img src={plant.image} alt={plant.name} className="h-40 w-full object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{plant.name}</h2>
      <p className="text-gray-600">{plant.scientificName}</p>
    </div>
  );
}
