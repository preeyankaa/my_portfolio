
import {
  Github,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Twitter,
  Youtube,
  BookOpen,
  Home,
} from "lucide-react";

import { useEffect, useState } from "react";
import { personalInfo } from "../data";

function SocialBar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const background = dark ? "#111111" : "#f7f8fc";

    document.documentElement.style.background = background;
    document.body.style.background = background;
    document.body.style.color = dark ? "#edf0fa" : "#20243a";

    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const socials = [ 
    { name: "LinkedIn", icon: Linkedin, url: personalInfo.linkedin },
    // { name: "YouTube", icon: Youtube, url: personalInfo.youtube },
    { name: "GitHub", icon: Github, url: personalInfo.github },
  ];

  return (
    <div className="social-bar-container">
      <div className={`social-bar ${dark ? "social-bar-dark" : ""}`}>
        {socials.map((social) => {
          const Icon = social.icon;
          const isHome = social.name === "Home";

          return (
            <div key={social.name} className="social-wrapper">
              <span className="social-tooltip">{social.name}</span>

              <a
                href={social.url || "#"}
                target={isHome ? "_self" : "_blank"}
                rel={isHome ? undefined : "noreferrer"}
                aria-label={social.name}
                className="social-icon"
                onClick={(event) => {
                  if (!social.url || social.url === "#") {
                    event.preventDefault();
                  }
                }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </a>
            </div>
          );
        })}

        <span className="social-divider" />

        <div className="social-wrapper">
          <span className="social-tooltip">
            {dark ? "Light Mode" : "Dark Mode"}
          </span>

          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label="Toggle theme"
            className="social-icon"
          >
            {dark ? (
              <Sun size={18} strokeWidth={1.8} />
            ) : (
              <Moon size={18} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialBar;
