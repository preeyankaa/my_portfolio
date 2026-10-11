import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data";

function Projects() {
  return (
    <section
      id="projects"
      className="portfolio-section"
    >
      <h2 className="section-heading">Featured Projects</h2>

      <p className="section-subtitle">
        A selection of projects focused on AI, data and practical software.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="project-card flex min-h-[220px] flex-col justify-between p-5"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-bold leading-6 tracking-tight text-neutral-900">
                  {project.title}
                </h3>

                <div className="flex shrink-0 items-center gap-1">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                      className="rounded-full p-2 text-neutral-500 transition hover:bg-black/5"
                    >
                      <Github size={17} />
                    </a>
                  )}

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live demo - ${project.title}`}
                      className="rounded-full p-2 text-neutral-500 transition hover:bg-black/5"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {project.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-2.5 py-1 text-[0.7rem] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;