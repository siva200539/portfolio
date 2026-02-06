import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Certifications from "@/components/Sections/Certifications";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Experience/>
      <Certifications/>
    </>
  )
}

export default Home
