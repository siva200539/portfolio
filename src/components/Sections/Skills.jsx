import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaGitAlt,
  FaFigma,FaLinux,FaNodeJs,FaPhp
} from "react-icons/fa"
import { SiTailwindcss,SiCanva,SiMongodb,SiTypescript} from "react-icons/si"

const skills = [
  { icon: FaHtml5, color: "text-orange-500" },
  { icon: FaCss3Alt, color: "text-blue-500" },
  { icon: FaBootstrap, color: "text-purple-500" },
  { icon: SiTailwindcss, color: "text-sky-400" },
  { icon: FaJs, color: "text-yellow-400" },
  { icon: FaGitAlt, color: "text-red-500" },
  {icon:FaFigma,color:"text-orange-500"},
  {icon:FaLinux,color:"text-white-500"},
    {icon:SiCanva,color:"text-blue-500 "},
    {icon:FaNodeJs,color:"text-green-500"},
    {icon:FaPhp,color:"text-blue-400"},
    {icon:SiMongodb,color:"text-green-500"},
    {icon:SiTypescript,color:"text-blue-500"}
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My Skills and Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Card className="hover:scale-110 transition-all duration-300">
                  <CardContent className="flex items-center justify-center p-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`text-5xl ${skill.color}`} />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
