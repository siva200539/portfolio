import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "./pic.jpeg";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    gsap.from(el.querySelectorAll(".animate"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 pt-28"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        
        {/* ✅ Typewriter Heading */}
        <h1 className="text-5xl font-bold animate typewriter">
          Hi, I'm <br />
          <span className="text-amber-400">Siva Bharathi</span>
        </h1>

        <h2 className="text-2xl font-semibold animate">
          Front-End Developer
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 animate">
          <a href="#skills">
            <Button className="bg-white text-black font-semibold hover:bg-purple-700 hover:text-white px-6 py-3 rounded-xl">
              View Skills
            </Button>
          </a>

          <a href="#projects">
            <Button className="bg-white text-black font-semibold hover:bg-purple-700 hover:text-white px-6 py-3 rounded-xl">
              Projects
            </Button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-3xl animate mt-6 p-6">
          <a
            href="https://github.com/siva200539"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition animate-bounce"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition animate-bounce"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 animate">
        <img
          src={profile}
          alt="Profile"
          className="w-[400px] h-[500px]  rounded-full shadow-lg"
        />
      </div>

      {/* ✅ Typewriter CSS */}
      <style>
        {`
          .typewriter {
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid white;
            width: fit-content;
            animation: typing 3s steps(25, end), blink 0.7s infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
