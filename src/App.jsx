
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

      <main className="portfolio-main w-full pb-32 pt-20">
        <div className="hero-band">
          <Hero />
        </div>

        <div className="section-band">
          <About />
        </div>

        <div className="section-band">
          <Experience />
        </div>

        <div className="section-band">
          <Education />
        </div>

        <div className="section-band">
          <Skills />
        </div>

        <div className="section-band">
          <Projects />
        </div>

        {/* Contact without an outer section-band block */}
        <Contact />
      </main>

      <footer className="portfolio-footer">
        <div className="footer-content">
          <p className="footer-copyright">
            © 2026 Priyanka Bhandari. Crafted with curiosity for AI/ML.
          </p>
        </div>
      </footer>

      <SocialBar />
    </div>
  );
}

export default App;
