
import { ArrowUpRight, Mail } from "lucide-react";
import { personalInfo } from "../data";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Let's Connect</h2>

      <p className="contact-description">
        Interested in AI, machine learning or building something useful?
        Feel free to reach out. I'd be happy to connect and explore
        opportunities to work together.
      </p>

      <a
        href={`mailto:${personalInfo.email}`}
        className="contact-email-link"
      >
        <Mail size={17} />
        Send me an email
        <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

export default Contact;
