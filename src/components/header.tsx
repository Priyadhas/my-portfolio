"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [

  { href: "#hero", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrollPct, setScrollPct] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.round((scrolled / height) * 100)) : 0;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50">
  
      <div className="h-1 w-full bg-transparent">
        <div
          aria-hidden
          style={{ width: `${scrollPct}%` }}
          className="h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 shadow-sm transition-[width] duration-150"
        />
      </div>

      <div className="backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-700/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3"
              >
              
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 shadow-md"
                >
                
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-white/0 p-[2px]">
                    <img
                      src="/assets/image.JPG"
                      alt="Priya Maria Dhas"
                      className="w-full h-full rounded-full object-cover ring-2 ring-white/80"
                    />
                  </div>
                </motion.div>

                <div className="leading-tight">
                  <h1 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                    Priya Maria Dhas
                  </h1>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300">
                    Full Stack Developer — React · Node · Cloud
                  </p>
                </div>
              </motion.div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`relative text-sm font-medium px-1 py-1 transition ${
                      isActive ? "text-indigo-600" : "text-slate-700 dark:text-slate-300"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="group inline-block relative">
                      <span className="relative z-10">{l.label}</span>
                      <motion.span
                        layout
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded-full ${
                          isActive ? "bg-gradient-to-r from-indigo-500 to-pink-500" : "bg-transparent"
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* mobile button */}
            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-lg inline-flex items-center justify-center bg-white/60 dark:bg-slate-800/60 ring-1 ring-slate-200/50 dark:ring-slate-700/40"
              >
                <svg className="h-6 w-6 text-slate-700 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="md:hidden px-4 pb-4"
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-2 mt-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition"
                    >
                      {l.label}
                    </a>
                  ))}

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
