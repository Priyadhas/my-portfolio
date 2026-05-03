"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "> Building real-time dashboards...\n> Improving performance by 25%...\n> Designing scalable backend systems...\n> Let’s build something impactful.";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(timer);
        }, 30);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative min-h-[85vh] flex items-center justify-center pt-20">
            {/* Dark Mode Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20"
            >
                {/* Text Content */}
                <div className="space-y-8 text-center md:text-left z-10 md:flex-1">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-2 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Available for new opportunities
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-[1.1]">
                            Hi, I'm <br />
                            <span className="text-blue-400">
                                PRIYA M D
                            </span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-medium text-zinc-400 tracking-wide">
                            Full Stack Developer
                        </h2>
                    </div>

                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                        Full Stack Developer with 2+ years of experience building scalable, cloud-based web applications using React.js, Node.js, ASP.NET, and AWS. Proven ability to design high-performance RESTful APIs, improve UI performance by 30%+, and deploy secure, scalable SaaS solutions. Strong background in Agile development, microservices architecture, and performance optimization.
                    </p>

                    {/* Terminal Snippet */}
                    <div className="bg-[#0b0f19] border border-white/10 rounded-lg p-4 font-mono text-xs sm:text-sm text-green-400 shadow-inner max-w-xl mx-auto md:mx-0 text-left h-32 overflow-hidden relative">
                        <div className="absolute top-2 left-2 flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="mt-4 whitespace-pre-wrap leading-relaxed opacity-90">
                            {text}<span className="animate-pulse">_</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="group relative px-8 py-3.5 bg-zinc-50 text-[#0b0f19] rounded-full font-bold text-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3.5 bg-white/5 text-zinc-50 border border-white/10 rounded-full font-bold text-sm transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-md"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Visual / Profile Side */}
                <motion.aside
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl border border-white/10 p-10 shadow-2xl w-full max-w-sm flex flex-col items-center text-center hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 z-10 group mt-12 md:mt-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                    <div className="relative">
                        <motion.div
                            className="absolute -inset-1 rounded-full bg-blue-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500"
                        ></motion.div>
                        <img
                            src="/assets/Profile_image.jpeg"
                            alt="PRIYA M D"
                            className="relative w-44 h-44 rounded-full object-cover border-4 border-[#0b0f19] shadow-2xl z-10"
                        />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-zinc-50 tracking-tight">PRIYA M D</h3>
                    <p className="text-blue-400 font-medium text-sm mt-1">Full Stack Developer</p>

                    {/* Stats/Tags in dark mode style */}
                    <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-zinc-300 w-full relative z-10 text-left">
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors">
                            <dt className="font-semibold text-blue-400 text-[10px] uppercase tracking-wider mb-1">Role</dt>
                            <dd className="font-medium text-zinc-200">Full Stack Dev</dd>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors">
                            <dt className="font-semibold text-blue-400 text-[10px] uppercase tracking-wider mb-1">Exp</dt>
                            <dd className="font-medium text-zinc-200">Amadis Tech</dd>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors col-span-2">
                            <dt className="font-semibold text-blue-400 text-[10px] uppercase tracking-wider mb-1">Status</dt>
                            <dd className="font-medium text-zinc-200 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                                Immediately available
                            </dd>
                        </div>
                    </dl>
                </motion.aside>
            </motion.div>
        </section>
    );
}
