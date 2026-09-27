import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-black/10 py-16"
    >
      <div className="text-center">
        <p className="mb-5 text-[1.7rem] font-bold text-neutral-900">
          Contact
        </p>

        <div className="mx-auto max-w-2xl">
          <h2 className="text-[1.8rem] font-semibold leading-tight tracking-tight text-neutral-900">
            Get in Touch
          </h2>

          <p className="mt-3 text-[1rem] leading-7 text-neutral-600">
            Interested in AI, machine learning or building something useful?
            Feel free to reach out — I'd be happy to connect and explore
            opportunities to work together.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-neutral-900 transition hover:gap-3"
          >
            Send me an email
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

