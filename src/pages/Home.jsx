import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import PlantCard from '../Components/PlantCard';
import Plants from "../data/plants.json"
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Background image section */}
      <div className="mt-17 w-cover h-[80px]">
        <img
        src="./assets/Images/bg2.png"
        alt="Virtual Herbal Garden"
        className="w-full h-[600px] object-fill"
        />
      </div>

      {/* Image content */}
      <div className='text-6xl pt-10 pr-120 pl-22 text-green-950'>
        <h1 className='font-bold leading-17'>Welcome to the Virtual Herbal Garden</h1>
      </div>
      <br/>
      <div className='text-6xl  pl-22 text-green-950'>
        <h1 className='font-bold'> </h1>
      </div>
      <br />
      <div className='text-2xl text-white pl-23 pr-140'>
        <p>Explore the Healing properties of Medical Plants in a serene Digital Garden</p>
      </div>

      <div className='pl-23 pt-9'>
        <button className='text-center text-white rounded-2xl w-50 h-15 text-2xl font-bold bg-gradient-to-b from-green-500 to-green-600'>Get Started</button>
      </div>


      {/* plant card components */}
      <div className='mt-12 pl-23'>
        <h3 className='font-bold text-4xl pb-7'>Featured Plants</h3>
         
      </div>   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pl-23 pr-23">
        {Plants.slice(0,3).map((plant) => (
          <PlantCard key={plant.id} plant={plant}/>
        ))}
      </div>   

      {/* About section */}
      <div className='flex'>
        <div className='ml-23 mt-10 mr-23'>
          <h3 className='text-3xl font-bold pb-9'>About</h3>
          <img className='rounded-xl h-70 w-100' src="./assets/Images/bg3.png" alt="" />
        </div>
        <div className='flex-1 mt-25 mr-23 text-sm'>
          <p className='leading-8'>Virtual Herbal Garden is a digital platform blending traditional herbal knowledge with modern technology, offering 30 plant models, scientific insights, and interactive learning features for students, researchers, and health enthusiasts. The platform serves as a bridge between ancient wisdom and modern science, helping users explore the medicinal value, growth patterns, and therapeutic applications of various herbs.Along with detailed plant information.</p>
          <button className='text-sm mt-8 rounded-lg w-60 h-9 font-bold bg-gray-100'><a href="/About">Learn More About Our Vision</a></button>
        </div>
      </div>
      {/* //footer */}
        <Footer/>
    </>
  );
}