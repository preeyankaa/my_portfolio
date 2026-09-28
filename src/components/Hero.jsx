import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data";

function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[70vh] items-center pt-30 pb-1"
    >
      <div className="grid w-full items-center gap-8 md:grid-cols-[1fr_190px]">

        {/* Left Content */}
        <div>
          <p className="mb-3 text-base font-medium text-neutral-500 sm:text-lg">
            Hello, I'm <span className="text-base">👋</span>
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.045em] sm:text-6xl md:text-[4.2rem] md:leading-none">
            {personalInfo.name}.
          </h1>

          <h2 className="mt-3 text-xl font-medium tracking-tight text-neutral-500 sm:text-2xl">
            {personalInfo.role}
          </h2>

          <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-neutral-600 sm:text-base">
            I enjoy building useful software and AI applications that solve
            real problems and are actually meant to be used. I'm particularly
            interested in AI, machine learning, LLM applications and modern
            web technologies.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={16} />
            </a>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-black/20"
            >
              Resume
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="h-40 w-40 overflow-hidden rounded-full border border-black/10 bg-neutral-100">
            <img
              src="/profile.jpeg"
              alt="Priyanshi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
