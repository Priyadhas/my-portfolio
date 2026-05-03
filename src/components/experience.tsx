"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer | Internship",
      company: "Remote (Dubai)",
      period: "Sep 2025 – Jan 2026",
      desc: [
        "Designed and developed an educational platform using React.js, Tailwind CSS, and Spring Boot",
        "Improved UI responsiveness and reduced page load time by 35%",
        "Led development and mentored team members on frontend best practices",
      ],
    },
    {
      title: "Software Engineer",
      company: "Amadis Technologies (India)",
      period: "July 2023 – Aug 2025",
      desc: [
        "Developed full-stack features for CloudCadi, a multi-cloud cost analysis platform (AWS, Azure, GCP), using React.js, Node.js, and PostgreSQL.",
        "Designed and implemented RESTful APIs improving data response speed by 25%.",
        "Built interactive dashboards for real-time cloud usage metrics, reducing manual reporting time by 40%.",
        "Conducted RDS instance cost optimization, saving estimated 10–15% in cloud spend.",
        "Collaborated with cross-functional teams under Agile sprints using Git, Docker, and AWS CI/CD pipelines.",
      ],
    },
  ];

  return (
    <section id="experience" className="mt-24">
      <div className="flex flex-col items-center mb-16">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h3>
        <div className="w-24 h-1 bg-blue-500 rounded-full mt-4"></div>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 lg:ml-8 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative pl-8 md:pl-12 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform duration-300"></span>
            
            <div className="bg-zinc-900/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/5 shadow-xl hover:border-white/10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-zinc-50">{exp.title}</h4>
                        <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-zinc-300 whitespace-nowrap">
                        {exp.period}
                    </span>
                </div>
                
                <ul className="relative z-10 space-y-3">
                    {exp.desc.map((d, index) => (
                        <li key={index} className="text-sm md:text-[15px] text-zinc-400 leading-relaxed flex gap-3">
                            <span className="text-cyan-500 mt-1.5 flex-shrink-0">•</span>
                            <span>{d}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
