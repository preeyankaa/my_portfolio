import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";

function App() {
  return (
    <div className="page-background min-h-screen">
      <Navbar />

      <main className="mx-auto w-[calc(100%-32px)] max-w-[43rem] px-0 pb-24">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <SocialBar />
    </div>
  );
}

export default App;