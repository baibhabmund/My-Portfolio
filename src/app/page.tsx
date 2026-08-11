import Backdrop from "@/components/Backdrop";
import Nav from "@/components/Nav";
import ScrollOrbit from "@/components/ScrollOrbit";
import TreeSpine from "@/components/TreeSpine";
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
      <ScrollOrbit />
      <Hero />

      {/* Everything from here down grows off one continuous spiral vine */}
      <div className="relative">
        <TreeSpine />
        <main className="relative flex-1">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <CertsAndEducation />
        </main>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}