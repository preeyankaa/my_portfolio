import {ArrowUpRight, FileText, Github, Image as ImageIcon,} from "lucide-react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <h2 className="section-heading">Featured Projects</h2>

      <p className="section-subtitle">
        A collection of projects I've built through academic work, and hackathons.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card"
          >
            {/* Project image */}
            <div className="project-image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
              ) : (
                <div className="project-image-placeholder">
                  <ImageIcon size={34} strokeWidth={1.3} />
                  <span>Project Preview</span>
                </div>
              )}
            </div>

            {/* Project details */}
            <div className="project-content">
              <div className="project-heading">
                <h3>{project.title}</h3>

                <div className="project-actions">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                      title="View source code"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo - ${project.title}`}
                      title="View live demo"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  )}

                  {project.paper && project.paper !== "#" && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Research paper - ${project.title}`}
                      title="Read research paper"
                    >
                      <FileText size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;