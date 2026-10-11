
function About() {
  const interests = [
    "Machine Learning",
    "Generative AI",
    "LLMs & RAG",
    "Backend Development",
  ];

  return (
    <section id="about" className="portfolio-section">
      <h2 className="section-heading">About Me</h2>

      <div className="about-content">
        <p className="about-intro">
          I'm an AI & Data Science graduate passionate about
          building practical, intelligent applications.
        </p>

        <p className="about-description">
          With experience in AI image processing and projects
          involving Generative AI, LLMs and retrieval-augmented
          generation, I enjoy exploring how technology can solve
          real-world problems. I'm focused on growing as an
          AI/ML Developer while strengthening my software
          development and problem-solving skills.
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
