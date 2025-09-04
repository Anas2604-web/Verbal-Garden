import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function About() {
    return(
        <>
        <Navbar/>
        
        {/* //main body */}

    <div className="pt-10 min-h-screen bg-gradient-to-b from-green-200 to-green-100 text-green-900">
         {/* Header */}
        <div className="text-center py-12">
            <h1 className="text-5xl font-bold text-green-900 mb-4">About Virtual Herbal Garden</h1>
            <p className="text-lg max-w-3xl mx-auto text-green-700">
             A digital space where technology meets tradition. Explore medicinal plants in 3D, 
             learn their benefits, and connect with nature virtually.
            </p>
        </div>

        {/* Mission Section */}
        <div className="pl-30 w-full mx-auto grid md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4 text-green-900">🌿 Our Mission</h2>
                <p className="text-base text-green-700 leading-relaxed">
                The Virtual Herbal Garden aims to promote awareness of medicinal plants by 
                combining modern digital platforms with traditional herbal knowledge. 
                We provide interactive 3D models, detailed plant information, and engaging 
                multimedia to make learning fun and impactful.
                </p>
            </div>
            <div>
                <img 
                    src="./assets/Images/About.webp" 
                    alt="Herbal Mission" 
                    className="rounded-2xl shadow-lg bg-white h-[500px]"
                />
            </div>
        </div>

        {/* Features Section */}
        <div className="bg-green-200 py-12 mt-8">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-8">✨ Key Features</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-6">
                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-2">🌱 Virtual Tour</h3>
                <p className="text-green-700">Explore realistic 3D models of medicinal plants.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2">📚 Plant Information</h3>
                    <p className="text-green-700">Learn about uses, benefits, and traditional importance.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
                    <h3 className="text-xl font-semibold mb-2">🎧 Multimedia</h3>
                    <p className="text-green-700">Enjoy videos, audio narrations, and virtual tours.</p>
                </div>
            </div>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-green-800 mb-4">👩‍💻 Our Team</h2>
        <p className="text-green-700 max-w-2xl mx-auto mb-6">
          We are a passionate group of developers, designers, and researchers working 
          together to bridge the gap between technology and Ayurveda.
        </p>
      </div>
    </div>


        <Footer/>
        
        </>
    )
};