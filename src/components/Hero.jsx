import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data";

function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[70vh] items-center pt-30 pb-1"
    >
      <div className="grid w-full items-center gap-6 md:grid-cols-[1fr_190px]">

        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-xl font-medium text-neutral-500"
          >
            Hello, I'm <span className="text-lg">👋</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl md:text-7xl"
          >
            {personalInfo.name}.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl font-medium tracking-tight text-neutral-500 sm:text-3xl"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg"
          >
            I enjoy building useful software and AI applications that solve
            real problems and are actually meant to be used. I'm particularly
            interested in AI, machine learning, LLM applications and modern
            web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={16} />
            </a>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-black/20"
            >
              Resume
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <div className="h-40 w-40 overflow-hidden rounded-full border border-black/10 bg-neutral-100">
            <img
              src="/profile.jpeg"
              alt="Priyanshi"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;

