import { education } from "../data";

function Education() {
  return (
    <section
      id="education"
      className="portfolio-section"
    >
      <h2 className="section-heading">Education</h2>

      <div className="flex flex-col gap-[35px]">
          {education.map((item, index) => (
          <div
            key={index}
                className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-start gap-3"                >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white p-1">
              <img
                src={item.image}
                alt={`${item.institution} logo`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <a
                href={item.website}
                target="_blank"
                rel="noreferrer"
                className="company-link"
              >
                <span>{item.institution}</span>
                <span className="company-arrow">&gt;</span>
              </a>

              <p className="mt-1 text-sm leading-6 text-neutral-600">
                {item.degree}
              </p>

              {/* <span className="mt-2 inline-flex rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-xs font-semibold text-neutral-700">
                {item.result}
              </span> */}
            </div>

            <p className="text-right text-xs font-medium leading-5 text-neutral-500">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;