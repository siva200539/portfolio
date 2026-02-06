import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"
import { motion } from "motion/react";


const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Contact Me
      </motion.h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl w-full px-6">
        {/* Email */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-black border border-white/30 hover:scale-105 transition">
            <CardContent className="flex items-center gap-4 p-6">
              <FaEnvelope className="text-3xl text-red-400" />
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="font-medium">siva2005bharathi@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-black border border-white/30 hover:scale-105 transition">
            <CardContent className="flex items-center gap-4 p-6">
              <FaPhoneAlt className="text-3xl text-green-400" />
              <div>
                <p className="text-sm text-white/60">Phone</p>
                <p className="font-medium">+91 90433 09890</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
       

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-8 mt-12"
      >
        <a href="#" target="_blank">
          <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
            <FaLinkedin className="text-4xl text-blue-500" />
          </motion.div>
        </a>

         <a href="https://github.com/siva200539" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-purple-500 transition">
          <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
            <FaGithub className="text-4xl text-white" />
          </motion.div>
        </a>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Button className="px-8 py-6 text-lg rounded-xl">
          Let’s Work Together
        </Button>
      </motion.div>
    </section>
  )
}

export default Contact
