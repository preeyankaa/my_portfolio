import { motion } from "framer-motion";
import { education } from "../data";

function Education() {
  return (
    <section
      id="education"
      className="border-t border-black/10 py-8"
    >
      <div>
        <p className="mb-5 text-[1.7rem] font-bold text-neutral-900">
          Education
        </p>

        <div className="space-y-5">
          {education.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[44px_minmax(0,1fr)_155px] items-start gap-2"
            >
              {/* Institution Logo */}
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white">
                <img
                  src={item.image}
                  alt={`${item.institution} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Institution + Education */}
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

                <p className="mt-1 text-[0.86rem] leading-5 text-neutral-700">
                  {item.result}
                </p>
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

export default Education;
