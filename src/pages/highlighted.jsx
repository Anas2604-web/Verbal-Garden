import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import plants from "../data/plants.jsx";

export default function HighlightedPlant() {
  const { id } = useParams();
  const plant = plants.find((p) => p.id === id);

  if (!plant) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center bg-green-50 text-green-800">
        <h1 className="text-4xl font-bold mb-4">🌿 Plant Not Found</h1>
        <Link
          to="/"
          className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Back to Garden
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-100 via-emerald-50 to-green-50 text-green-900 py-8 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-green-100"
        >
          {/* 🌿 Title + Image Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Plant Info */}
            <div>
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-bold text-green-800 mb-2 tracking-wide"
              >
                {plant.name}
              </motion.h1>

              <motion.h2
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="italic text-green-700 text-xl mb-1"
              >
                {plant.scientificName}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-700 leading-relaxed text-justify"
              >
                {plant.Longdescription.slice(0, 425) + (".")}
              </motion.p>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-[70%] h-[450px] object-cover rounded-2xl shadow-md bg-white"
              />
            </motion.div>
          </div>

          {/* 🌱 Description Below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <h3 className="text-3xl font-bold text-green-800 mb-4">
              🌿 About {plant.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              {plant.about}
            </p>
          </motion.div>

          {/* 🌿 Medical + Common Uses Side-by-Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 gap-6 my-10"
          >
            {/* 🌱 Medical Uses */}
            <div className="bg-green-100/70 p-6 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-3 text-green-800">
                🌱 Medical Uses
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {plant.uses?.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>

            {/* 🌿 Common Uses */}
            <div className="bg-green-100/70 p-6 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-3 text-green-800">
                🌿 Common Uses
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {plant.commonUses?.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 🔗 Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center mt-8"
          >
            <Link
              to="/Virtualtour"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition transform hover:scale-105"
            >
              ← Back to Garden
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
