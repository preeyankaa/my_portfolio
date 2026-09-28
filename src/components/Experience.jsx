import { motion } from "framer-motion";
import { experiences } from "../data";

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-black/10 py-8"
    >
      <div>
        <p className="mb-5 text-[1.7rem] font-bold text-neutral-900">
          Work Experience
        </p>

        <div className="space-y-5">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[44px_minmax(0,1fr)_155px] items-start gap-2"
            >
              {/* Company Logo */}
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white">
                <img
                  src={item.image}
                  alt={`${item.company} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Company + Experience */}
              <div>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="company-link"
                >
                  <span>{item.company}</span>
                  <span className="company-arrow">&gt;</span>
                </a>

                <p className="mt-0.5 text-[0.9rem] font-medium text-neutral-800">
                  {item.role}
                </p>

                <div className="mt-1 max-w-2xl text-[0.86rem] leading-5.5 text-neutral-700">
                  {item.description.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <p className="text-right text-[0.88rem] font-medium leading-5 text-neutral-500">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;