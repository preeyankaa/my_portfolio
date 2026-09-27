import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "../data";

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-black/10 py-16"
    >
      <div>
        {/* Section heading */}
        <p className="mb-5 text-[1.7rem] font-bold text-neutral-900">
          Work Experience
        </p>

        {/* Experience list */}
        <div className="space-y-">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[40px_minmax(0,1fr)_150px] items-start gap-4"
            >
              {/* Company Logo */}
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md">
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

                <p className="mt-1 max-w-2xl text-[0.88rem] leading-6 text-neutral-700">
                  {item.description}
                </p>
              </div>

              {/* Timeline */}
              <p className="text-right text-[0.82rem] leading-5 text-neutral-500">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;