
import { experiences } from "../data";

function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <h2 className="section-heading">Experience</h2>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="experience-item"
          >
            <div className="experience-logo">
              <img
                src={item.image}
                alt={`${item.company} logo`}
              />
            </div>

            <div className="experience-details">
              <a
                href={item.website}
                target="_blank"
                rel="noreferrer"
                className="company-link"
              >
                <span>{item.company}</span>
                <span className="company-arrow">&gt;</span>
              </a>

              <p className="experience-role">{item.role}</p>

              <ul className="experience-bullets">
                {Array.isArray(item.description)
                  ? item.description.map((line, i) => (
                      <li key={i}>{line.replace(/^•\s*/, "")}</li>
                    ))
                  : item.description
                      .split("\n")
                      .filter((line) => line.trim() && !/^•?\s*Techstack:/i.test(line.trim()))
                      .map((line, i) => (
                        <li key={i}>{line.replace(/^•\s*/, "")}</li>
                      ))}
              </ul>

              {item.techStack?.length > 0 && (
                <div className="experience-tech-stack">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p className="experience-period">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
