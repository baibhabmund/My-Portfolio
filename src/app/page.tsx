import Backdrop from "@/components/Backdrop";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CertsAndEducation from "@/components/CertsAndEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <Backdrop />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CertsAndEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
