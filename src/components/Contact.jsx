import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/10 py-13"
    >
      <div className="text-center">
        <p className="contact-label mb-5 inline-flex rounded-full bg-black px-5 py-2 text-[1rem] font-bold text-white">
          Contact
        </p>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-[2rem] font-semibold leading-tight tracking-tight text-neutral-900">
            Get in Touch
          </h2>

          <p className="mt-3 text-[1rem] leading-7 text-neutral-600">
            Interested in AI, machine learning or building something useful?
            Feel free to reach out — I'd be happy to connect and explore
            opportunities to work together.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium italic text-neutral-900 transition hover:gap-3"
          >
            Send me an email
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;