import { FaCertificate } from "react-icons/fa";
import { motion } from "motion/react";

export default function Certifications() {
  const certifications = [
    {
      title: "Google Cloud Computing Foundations[ELITE SILVER GAREDE]",
      platform: "NPTEL",
      year: "2025",
    },
    {
      title: "ZOHO young creator program",
      platform: "ZOHO",
      year: "2025",
    },
    {
      title: "Web Development-HTML,CSS,Javascript",
      platform: "Codetantra",
      year: "2024",
    },
    {
      title: "Mongodb",
      platform: "Codetantra",
      year: "2025",
    },
  ];

  return (
    <div className="page-content px-10 py-20 text-white" id="certificate">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-14"
      >
        Certifications
      </motion.h2>

      {/* Certification Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white/20 
            rounded-2xl p-8 shadow-lg backdrop-blur-lg"
          >
            {/* Icon */}
            <FaCertificate className="text-4xl text-blue-400 mb-5" />

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {cert.title}
            </h3>

            {/* Platform */}
            <p className="text-gray-300 text-sm mb-2">
              Platform: <span className="text-white">{cert.platform}</span>
            </p>

            {/* Year */}
            <p className="text-gray-400 text-sm">
              Year: <span className="text-white">{cert.year}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
