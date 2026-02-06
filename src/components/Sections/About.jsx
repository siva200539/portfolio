import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react";
import aimage from './project4.avif';
const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-32  px-6"
    >
      <div className="container  h-[400px]">
        <div className="p-6">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-yellow-300 text-center align-">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="py-10 text-2xl ">
              I'm a passionate Full-Stack Developer specializing in building  <br/>modern web
              applications using React, Next.js, Node.js, and<br/> Tailwind CSS  and I am keen eye for
              crafting initutive,responsive<br/>,visually compelling  and My goal is to build web applictions that <br/>solves the real world problem

            </div>
            <div className=" flex justify-end"><img src={aimage} className="w-[400px] -translate-y-40 mt-0"></img></div>
            
          </CardContent>
        </div>
      </div>
    </motion.section>
  )
}

export default About
