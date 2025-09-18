import { useState } from 'react';
import plants from '../data/plants'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

export default function VirtualTour() {
  const [index, setIndex] = useState(0);
  const plant = plants[index];

  const next = () => setIndex((i) => (i + 1) % plants.length);
  const prev = () => setIndex((i) => (i - 1 + plants.length) % plants.length);

  return (
    <>
    <Navbar/>
        
    {/* //main body */}
    <div className="pt-10 min-h-screen bg-gradient-to-b from-green-200 to-green-100 text-green-900">
         {/* Header */}
        <div className="text-center py-12">
            <h1 className="text-5xl font-bold text-green-900 mb-4">Virtual Herbal Tour Garden</h1>
            <p className="text-lg max-w-3xl mx-auto text-green-700">
             Embark on a serene virtual journey through our meticulously designed herbal garden. Explore in immersive 3D, listen to the soothing sounds of nature, and uncover the secrets of therapeutic Ayurveda. 
            </p>
            <button className='mt-10 bg-amber-50 w-30 h-10 rounded-3xl text-center font-medium'>
              <Link to="/GardenScene">Start Tour</Link>
            </button>
        </div>

        {/* Mission Section */}
        <div className="pl-70 w-full mx-auto grid md:grid-cols-2 gap-8 p-8">

            <div className="flex flex-col justify-center">
              <div className="bg-green-200 py-7  rounded-2xl">
                <h2 className="text-3xl font-bold text-center text-green-900 mb-5">✨ Key Features</h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 pl-10 p-4">

                  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                    <h3 className="text-2xl font-semibold">🌱 Healing Herbs</h3>
                  </div>
                  

                  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                    <h3 className="text-2xl font-semibold "></h3>
                  </div>

                  <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                    <h3 className="text-2xl font-semibold">🌱Culinary Herbs</h3>
                  </div>

                  <div className='bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105'>
                    <h3 className='text-2xl font-semibold'>
                    🌱 Ayurvedic Treasures
                    </h3>
                  </div>

                  <div className='bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105'>
                    <h3 className='text-2xl font-semibold'>
                    🌱 Aromatic Plants
                    </h3>
                  </div>

                  <div className='bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105'>
                    <h3 className='text-2xl font-semibold'>
                    🌱 Rare medical plants
                    </h3>
                  </div>
                  

                </div>
              </div>
                
            </div>

            {/* image */}
            <div>
                <img 
                    src="./assets/Images/About.webp" 
                    alt="Herbal Mission" 
                    className="rounded-2xl shadow-lg bg-white h-[500px]"
                />
            </div>
          </div>

          {/* Highlights */}
          <div className='pt-5 pl-30 flex flex-col justify-center pb-8 pr-30'>
            <div className='bg-green-200 rounded-2xl py-7'>
              <h3 className='text-3xl font-bold mx-8 mb-5'>Highights Plants</h3>
              <div className='max-w-6xl mx-auto grid md:grid-cols-5 gap-6 px-9'>

                <Link>
                <div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link>
                <div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link>
                <div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link><div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link><div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link><div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>
                

                <Link><div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link><div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link><div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>

                <Link><div className='p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition'>
                  <img src="./assets/Images/1.jpg" alt="Tulsi Image" className='h-24 w-full items-center'/>
                  <h3>Tulsi</h3> 
                </div>
                </Link>
              </div>
            </div>
          </div>
    </div>


     
     


    {/* //footer */}
    <Footer/>
    </>
  );
}
