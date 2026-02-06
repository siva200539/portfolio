import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

export default function Experience() {
  return (
    <div className="page-content px-10 py-20 text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-14"
      >
    Experience
      </motion.h2>

      {/* Main Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white/10 border border-white/20 
        rounded-2xl p-10 shadow-xl backdrop-blur-lg"
      >
        {/* Company Info */}
        <div className="flex items-center gap-4 mb-6">
          <FaBuilding className="text-3xl text-blue-400" />

          <div>
            <h3 className="text-2xl font-semibold">
              MERN Stack Developer Intern
            </h3>
            <p className="text-gray-300">
             App Innovation Technologies • June 2025 -September 2025
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          Worked on real-time React applications, built responsive UI components,
          and improved frontend development skills.
        </p>

        {/* Projects Count Section */}
        <h4 className="text-xl font-semibold mb-6">
          🚀 Projects Completed
        </h4>

        {/* Small Count Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-black/40 border border-white/10 
              rounded-xl p-6 text-center shadow-md"
            >
              <p className="text-3xl font-bold text-blue-400">
                
              </p>
              <p className="text-sm bg-blue-50 h-[40px] p-3 text-black mt-2">4
              </p>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
