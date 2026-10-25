
function About() {
  const interests = [
    "Machine Learning",
    "Generative AI",
    "Backend Development",
  ];

  return (
    <section id="about" className="portfolio-section">
      <h2 className="section-heading">About Me</h2>

      <div className="about-content">
        <p className="about-intro">
          I'm an AI and Backend Developer.
        </p>

        <p className="about-description">
          I work with ML, Generative AI, RAG, FastAPI, and AWS to build applications
           and scalable systems that solve real problems efficiently. 
           I enjoy exploring how these technologies can be used in 
           practical projects and turning ideas into working solutions while continuously 
           improving my skills as a developer.
        </p>

        <div className="about-tags">
          {interests.map((interest) => (
            <span className="about-tag" key={interest}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
