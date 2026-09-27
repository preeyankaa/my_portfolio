import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-black/10 py-16"
    >
      <div>
        <p className="mb-2 text-[1.7rem] font-bold text-neutral-900">
          About
        </p>

        <div className="max-w-3xl">
          <h2 className="text-[1.1rem] font-semibold leading-8 tracking-tight text-neutral-900">
            Building practical AI applications, not just experiments.
          </h2>
        
          <p className="mt-1 text-[1rem] font-normal leading-8 text-neutral-600">
            I'm an Artificial Intelligence & Data Science graduate interested
            in building useful software around AI, machine learning and modern
            web technologies. My interests include LLM applications, RAG,
            computer vision, backend APIs and deploying practical AI systems.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;