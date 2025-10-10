"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Amadis Technologies",
      role: "Full Stack Developer",
      duration: "April 2024 — July 2025",
      points: [
        "Contributed to end-to-end development of CloudCadi (cloud cost optimization product).",
        "Developed frontend components in React.js and backend APIs using Node.js/Express.",
        "Designed RESTful APIs and real-time visualizations for cloud cost insights.",
        "Collaborated with cross-functional Agile teams to deliver and optimize features.",
      ],
    },
  ];

  return (
    <section id="experience" className="mt-16">
      <motion.h3
        className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h3>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/70 to-slate-100/70 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-xl border border-slate-200/30 shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                  {exp.company}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.role}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.duration}</p>
            </div>

            <ul className="mt-5 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i} className="hover:text-indigo-500 transition-colors duration-200">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
