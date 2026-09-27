import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data";

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-black/10 py-16"
    >
      <div>
        <p className="mb-6 text-[1.2rem] font-bold text-neutral-900">
          Projects
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="project-card group flex min-h-[235px] flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1.05rem] font-semibold tracking-tight text-neutral-900">
                    {project.title}
                  </h3>

                  <div className="flex shrink-0 gap-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub - ${project.title}`}
                      className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
                    >
                      <Github size={16} />
                    </a>

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Live demo - ${project.title}`}
                        className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-[0.86rem] leading-6 text-neutral-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-[0.72rem] font-medium text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;