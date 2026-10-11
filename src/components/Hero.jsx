
import { personalInfo } from "../data";

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-content">
        
      <h1 className="hero-greeting hero-intro">
        <span className="hero-emoji">👋</span>
        Hi, I'm{" "}
        <span className="hero-name">
          Priyanka Bhandari
        </span>
      </h1>


        <h2 className="hero-role">AI/ML Developer</h2>

        <p className="hero-description">
          I build practical AI applications using Machine Learning,
          Generative AI, LLMs and RAG. I enjoy turning ideas into
          useful software that solves real-world problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-primary-button">
            View Projects
          </a>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
            className="hero-secondary-button"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
