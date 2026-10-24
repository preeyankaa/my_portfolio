
import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <h2 className="section-heading">Skills & Technologies</h2>

      <p className="section-subtitle">
        Technologies and tools I use to build applications.
      </p>

      <div className="skills-list">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">
              {category}
            </h3>

            <div className="skills-pills">
              {items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
