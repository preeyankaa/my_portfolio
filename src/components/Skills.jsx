import { motion } from "framer-motion";
import { skills } from "../data";

function Skills() {
  const allSkills = Object.values(skills).flat();

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-black/10 py-16"
    >
      <div>
        <p className="mb-5 text-[1.7rem] font-bold text-neutral-900">
          Skills
        </p>

        <div className="flex flex-wrap gap-1.5">
          {allSkills.map((skill) => (
            <span
              key={skill}
              className="skill-pill"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;