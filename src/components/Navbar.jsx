import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Education", "education"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-[50rem] -translate-x-1/2">
      <nav className="glass-navbar flex items-center justify-center px-3 py-2">
        
        {/* Desktop Navbar */}
          <div className="hidden items-center gap-1 text-sm min-[620px]:flex">
            {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 transition hover:bg-black/5 min-[620px]:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
         <div className="glass-mobile-menu mt-2 px-4 py-4 min-[620px]:hidden">
          <div className="flex flex-col gap-1 text-sm">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="mobile-nav-link rounded-lg px-3 py-3 text-neutral-600"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;