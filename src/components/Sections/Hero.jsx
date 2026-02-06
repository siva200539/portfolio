import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { FaGithub,FaLinkedin } from "react-icons/fa"
const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    gsap.from(el.querySelectorAll(".animate"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
    })
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl md:text-4xl font-bold mb-9 animate typewriter">
          Hi, I'm<br />
          <span className="text-amber-400">Siva Bharathi</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 animate ">
          Front-End Developer
        </h2>
        

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 animate">
          <a href="#skills">
            <Button className="bg-white text-purple font-semibold hover:bg-purple-700 hover:text-white rounded-lg px-6 py-3 shadow-md transition-all">
              View Skills
            </Button>
          </a>
        <div className="flex justify-center md:justify-start space-x-4 animate">
          <a href="#projects">
            <Button className="bg-white text-purple font-semibold hover:bg-purple-700 hover:text-white rounded-lg px-6 py-3 shadow-md transition-all">
              Projects            </Button>
          </a>
        </div>
        <div className="flex items-center gap-6 mt-20 md:justify-start space-x-5 animate-bounce relative left-[-250px]">
          <a href="https://github.com/siva200539" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-purple-500 transition"><FaGithub/></a>
          <a href="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-500 transition"><FaLinkedin/></a>

        </div>
      

        </div>
      </div>

     
    </section>
  )
}

export default Hero
