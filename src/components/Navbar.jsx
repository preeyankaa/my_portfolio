
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data";

const links = [
  ["Home", "top"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");


useEffect(() => {
  const sectionIds = ["top", ...links.map(([, id]) => id)];
  let ticking = false;

  const updateActiveSection = () => {
    const activationLine = 160;
    let currentSection = "top";

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (!section) continue;

      const rect = section.getBoundingClientRect();

      if (rect.top <= activationLine) {
        currentSection = id;
      } else {
        break;
      }
    }

    // Only one section can be active at a time
    setActiveSection(currentSection);
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    }
  };

  const handleHashChange = () => {
    const id = window.location.hash.replace("#", "") || "top";
    if (sectionIds.includes(id)) {
      setActiveSection(id);
    }
    requestAnimationFrame(updateActiveSection);
  };

  updateActiveSection();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });
  window.addEventListener("resize", updateActiveSection);
  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", updateActiveSection);
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);


  const closeMenu = () => setOpen(false);

  return (
    <header className="site-navbar">
      <nav className="navbar-inner">
        <a
          href="#top"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Priyanka Bhandari - Home"
        >
          Priyanka Bhandari
        </a>

        {/* Desktop navigation */}
        <div className="navbar-links">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar-link ${
                activeSection === id ? "active" : ""
              }`}
              aria-current={
                activeSection === id ? "location" : undefined
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop Resume button */}
        <div className="navbar-resume">
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
            className="navbar-resume-button"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="navbar-menu-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="navbar-mobile-menu">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar-mobile-link ${
                activeSection === id ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
            className="navbar-mobile-resume-link"
            onClick={closeMenu}
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
