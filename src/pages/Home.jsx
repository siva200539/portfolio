import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Certifications from "@/components/Sections/Certifications";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
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
