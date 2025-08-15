import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Work from "../components/Work";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}
