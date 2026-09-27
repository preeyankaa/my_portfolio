import { motion } from "framer-motion";
import { education } from "../data";

function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-black/10 py-16"
    >
      <div>
        {/* Section heading */}
        <p className="mb-5 text-[1.7rem] font-bold text-neutral-900">
          Education
        </p>

        {/* Education list */}
        <div className="space-y-7">
          {education.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[40px_minmax(0,1fr)_150px] items-start gap-4"
            >
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={`${item.institution} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="company-link"
                >
                  <span>{item.institution}</span>
                  <span className="company-arrow">&gt;</span>
                </a>

                <p className="mt-0.5 text-[0.9rem] font-medium text-neutral-800">
                  {item.degree}
                </p>

                <p className="mt-1 text-[0.88rem] leading-6 text-neutral-700">
                  {item.result}
                </p>
              </div>

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

export default Education;