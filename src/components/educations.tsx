"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function EducationCerts() {
  const educations = [
    {
      degree: "M.E – Communication Systems",
      school: "Maria College of Engineering",
      year: "2022 – 2024",
      grade: "CGPA: 8.39",
    },
    {
      degree: "B.E – Electronics and Communication Engineering",
      school: "Francis Xavier Engineering College",
      year: "2018 – 2022",
      grade: "CGPA: 8.95",
    },
  ];

  const certifications = [
    {
      title: "One Million Prompters – Prompt Engineering Certification",
      issuer: "Govt of UAE / Dubai Future Foundation",
      year: "2024",
    },
    {
      title: "Java Full Stack Development",
      issuer: "Various (Java, HTML, CSS, JavaScript, React.js, Spring Boot)",
      year: "2023",
    },
    {
      title: "Strategic Leadership Workshop for Young Leaders",
      issuer: "Leadership Institute",
      year: "2022",
    },
  ];

  return (
    <section id="education" className="mt-24 scroll-mt-24">
      <div className="flex flex-col items-center mb-16">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h3>
        <div className="w-24 h-1 bg-blue-500 rounded-full mt-4"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <GraduationCap className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-2xl font-bold text-zinc-50">Education</h4>
          </div>

          <div className="space-y-6">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-lg hover:border-blue-500/30 transition-colors duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex justify-between items-start gap-4">
                  <div>
                    <h5 className="font-bold text-lg text-zinc-50 tracking-tight">{edu.degree}</h5>
                    <p className="text-blue-400 font-medium text-sm mt-1">{edu.school}</p>
                    <p className="text-zinc-400 text-sm mt-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {edu.grade}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-white/5 text-zinc-300 whitespace-nowrap border border-white/5">
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Award className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-2xl font-bold text-zinc-50">Certifications</h4>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-xl p-5 rounded-2xl border border-white/5 shadow-lg hover:border-blue-500/30 transition-colors duration-300 relative group overflow-hidden flex items-start gap-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                
                <div className="relative z-10 flex-grow">
                    <h5 className="font-bold text-zinc-50 leading-snug">{cert.title}</h5>
                    <div className="flex items-center justify-between mt-2 gap-4">
                        <p className="text-zinc-400 text-sm">{cert.issuer}</p>
                        <span className="text-xs font-medium text-blue-400/80 bg-blue-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                            {cert.year}
                        </span>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
