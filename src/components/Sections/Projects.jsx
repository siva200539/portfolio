import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React, Tailwind, and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/siva200539/portfolio",
    live: "https://yourwebsite.com/",
  },
  {
    title: "Aura Food",
    description:
      "Full hotel management with cart, login, payments, and order page the orders are stored on mogodb.",
    tech: ["React", "Redux", "Node.js","mongodb"],
    github: "https://github.com/siva200539/Siva-foods",
    live: "https://yourwebsite.com/",
  },
  {
    title: "Breast cancer deteaction",
    description:
      "Full website based on detection and segmentation of the predting stage cancer",
    tech: ["Python","React"],
    github: "https://github.com/siva200539/Breast-cancer-detection",
    live: "https://yourwebsite.com/",
  },
];

export default function Projects() {
  return (
    <section className="page-content px-10 py-20 text-white" id="projects">
      {/* Heading */}
      <motion.h2
        id="#projects"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 text-sm">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/20"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-blue-400"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-sm hover:text-green-400"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
