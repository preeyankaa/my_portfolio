import { motion } from "framer-motion";
import { skills } from "../data";

function Skills() {
  const allSkills = Object.values(skills).flat();

  return (
    <section
      id="skills"
      className="border-t border-black/10 py-8"
    >
      <div>
        <p className="mb-5 text-[1.7rem] font-bold tracking-tight text-neutral-900">
          Skills
        </p>

        <div className="flex flex-wrap gap-1.5">
          {allSkills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;