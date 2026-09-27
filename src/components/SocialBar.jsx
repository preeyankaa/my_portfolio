import {
  Home,
  Github,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Twitter,
  Youtube,
  BookOpen,
} from "lucide-react";

import { useEffect, useState } from "react";
import { personalInfo } from "../data";

function SocialBar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.style.background = dark
      ? "#111111"
      : "#f7f7f5";

    document.body.style.background = dark
      ? "#111111"
      : "#f7f7f5";

    document.body.style.color = dark
      ? "#f5f5f5"
      : "#171717";
  }, [dark]);

  const socials = [
    {
    name: "Home",
    icon: Home,
    url: "#top",
   },
    {
      name: "Instagram",
      icon: Instagram,
      url: personalInfo.instagram,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: personalInfo.linkedin,
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: personalInfo.youtube,
    },
    {
      name: "GitHub",
      icon: Github,
      url: personalInfo.github,
    },
    {
      name: "Blog",
      icon: BookOpen,
      url: personalInfo.blog,
    },
    {
      name: "X",
      icon: Twitter,
      url: personalInfo.x,
    },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div
        className={`flex items-center gap-2 rounded-full border px-3 py-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          dark
            ? "border-white/10 bg-white/10 text-white"
            : "border-black/10 bg-white/85 text-black"
        }`}
      >
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <div
              key={social.name}
              className="social-wrapper"
            >
              <span className="social-tooltip">
                {social.name}
              </span>

              <a
                href={social.url}
                target={social.name === "Home" ? "_self" : "_blank"}
                rel={social.name === "Home" ? undefined : "noreferrer"}
                aria-label={social.name}
                className="social-icon"
              >
                <Icon size={17} />
              </a>
            </div>
          );
        })}

        <div
          className={`mx-1 h-5 w-px ${
            dark
              ? "bg-white/20"
              : "bg-black/10"
          }`}
        />

        <div className="social-wrapper">
          <span className="social-tooltip">
            {dark ? "Light Mode" : "Dark Mode"}
          </span>

          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            // className={`social-icon ${
            //   dark
            //     ? "hover:bg-white hover:text-black"
            //     : ""
            // }`}
            className="social-icon"
          >
            {dark ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialBar;