"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Code } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex flex-col md:flex-row items-center justify-between gap-14 px-6 md:px-16 lg:px-24 py-24 overflow-hidden"
        >
      
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950"></div>
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-purple-400/20 to-pink-500/20 blur-[120px] rounded-full -z-10"></div>

    
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="space-y-6 text-center md:text-left"
            >
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
                    Hey there, I’m{" "}
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Priya MariaDhas
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
                    A passionate{" "}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        Full Stack Developer
                    </span>{" "}
                    crafting clean, scalable, and high-performance web apps. I love turning complex
                    ideas into beautiful, functional, and user-focused digital experiences.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="mailto:priyabergithlibin@gmail.com"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-indigo-500/40 transition"
                    >
                        <Mail className="w-4 h-4" />
                        Contact Me
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#projects"
                        className="inline-flex items-center gap-2 border border-indigo-400 text-indigo-600 dark:text-indigo-300 px-6 py-3 rounded-full hover:bg-indigo-50 dark:hover:bg-slate-800 transition"
                    >
                        <Code className="w-4 h-4" />
                        View Projects
                    </motion.a>
                </div>
            </motion.div>

                            
            <motion.aside
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-3xl border border-slate-200/30 dark:border-slate-700/50 p-10 shadow-2xl w-full max-w-sm flex flex-col items-center text-center hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300"
            >
                <div className="relative">
                    <motion.img
                        src="/assets/image.JPG"
                        alt="Priya"
                        className="w-44 h-44 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
                        whileHover={{ rotate: 2, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-indigo-500 to-pink-500 p-3 rounded-full shadow-md">
                        <Code className="w-5 h-5 text-white" />
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Priya Maria Dhas</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700 dark:text-gray-300 w-full">
                    <div>
                        <dt className="font-semibold text-indigo-600 dark:text-indigo-400">Role</dt>
                        <dd>Full Stack Developer</dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-indigo-600 dark:text-indigo-400">Experience</dt>
                        <dd>Amadis Technologies</dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-indigo-600 dark:text-indigo-400">Languages</dt>
                        <dd>English, Tamil, Hindi</dd>
                    </div>
                    <div>
                        <dt className="font-semibold text-indigo-600 dark:text-indigo-400">Status</dt>
                        <dd>Open to Opportunities </dd>
                    </div>
                </dl>
            </motion.aside>
        </section>
    );
}
