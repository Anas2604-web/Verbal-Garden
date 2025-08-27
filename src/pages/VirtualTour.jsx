import { useState } from 'react';
import plants from '../data/plants.json'; // Assuming the data is in this file
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function VirtualTour() {
  const [index, setIndex] = useState(0);
  const plant = plants[index];

  const next = () => setIndex((i) => (i + 1) % plants.length);
  const prev = () => setIndex((i) => (i - 1 + plants.length) % plants.length);

  return (
    <>
    <Navbar/>
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">{plant.name}</h1>
      <img src={plant.image} alt={plant.name} className="mx-auto h-60 my-4" />
      <p>{plant.description}</p>
      <div className="mt-4 flex justify-center gap-4">
        <button onClick={prev} className="btn">← Prev</button>
        <button onClick={next} className="btn">Next →</button>
      </div>

    </div>

    {/* //footer */}
    <Footer/>
    </>
  );
}
