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
      <div className="h-[2px] w-full bg-transparent">
        <div
          aria-hidden
          style={{ width: `${scrollPct}%` }}
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-[width] duration-150"
        />
      </div>

      <div className="backdrop-blur-xl bg-[#0b0f19]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  <div className="absolute inset-0 rounded-full overflow-hidden bg-white/0 p-[2px]">
                    <img
                      src="/assets/Profile_image.jpeg"
                      alt="PRIYA M D"
                      className="w-full h-full rounded-full object-cover ring-2 ring-[#0b0f19]"
                    />
                  </div>
                </motion.div>

                <div className="leading-tight">
                  <h1 className="text-sm font-semibold tracking-tight text-zinc-50">
                    PRIYA M D
                  </h1>
                  <p className="text-xs text-zinc-400">
                    Software Engineer
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
                    className={`relative text-sm font-medium px-2 py-1 transition-colors duration-200 ${isActive ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="group inline-block relative">
                      <span className="relative z-10">{l.label}</span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            layoutId="active-nav-link"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute -inset-x-2 -inset-y-1 z-0 bg-white/5 rounded-md"
                          />
                        )}
                      </AnimatePresence>
                      <motion.span
                        layout
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        className={`absolute left-0 right-0 -bottom-[6px] h-[2px] rounded-full ${isActive ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-transparent"
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
                className="p-2 rounded-md inline-flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition text-zinc-200"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="md:hidden overflow-hidden border-t border-white/10 bg-[#0b0f19]/95 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-1">
                {links.map((l) => {
                  const isActive = active === l.href;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive
                          ? "bg-white/10 text-zinc-50 font-medium"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                        }`}
                    >
                      {l.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
