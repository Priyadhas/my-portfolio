"use client";
import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Doctor License Management App",
    problem: "Managing doctor licensing workflows, document verification, and approvals was a highly manual and error-prone process.",
    solution: "Built a full-stack platform with role-based access, automated approval pipelines, and robust document verification.",
    impact: "Optimized database queries and scalable REST APIs resulted in significantly faster application processing times.",
    tags: ["ASP.NET", "Next.js", "Tailwind CSS", "SQL"],
  },
  {
    title: "ATLAS Health Care App",
    problem: "Healthcare facilities required a secure, role-based system to manage sensitive patient and administrative data.",
    solution: "Developed a comprehensive MERN stack application featuring secure REST APIs and multi-tiered role-based authentication.",
    impact: "Ensured high data security and streamlined administrative workflows for healthcare providers.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Business Management Web App",
    problem: "Small businesses struggled to manage clients, invoices, and projects across fragmented, disconnected tools.",
    solution: "Created a centralized, highly scalable client, invoice, and project management system using modern web technologies.",
    impact: "Improved business operational efficiency by consolidating workflows into a single intuitive dashboard.",
    tags: ["React", "Spring Boot", "Tailwind CSS"],
  },
  {
    title: "Elite Driving School App",
    problem: "Scheduling classes and tracking instructor performance was difficult to visualize and manage effectively.",
    solution: "Developed advanced analytics dashboards for scheduling and real-time performance tracking.",
    impact: "Increased operational visibility and reduced scheduling conflicts significantly.",
    tags: ["React.js", "Node.js", "Analytics"],
  },
];

function Card({ p }: { p: Project }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300 relative group flex flex-col h-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="mb-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#0b0f19] rounded-xl border border-white/5 group-hover:border-blue-500/30 transition-colors">
                  <FolderGit2 className="w-6 h-6 text-blue-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-zinc-50 tracking-tight group-hover:text-blue-400 transition-all">
                {p.title}
              </h4>
          </div>
          <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" />
      </div>
      
      <div className="flex-grow space-y-6">
          <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Problem</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.problem}</p>
          </div>
          <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Solution</h5>
              <p className="text-zinc-300 text-sm leading-relaxed">{p.solution}</p>
          </div>
          <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Impact</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.impact}</p>
          </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-semibold px-3 py-1.5 rounded-md bg-[#0b0f19] border border-white/5 text-zinc-300 hover:border-blue-500/30 transition-colors tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-32">
      <div className="flex flex-col items-center mb-16">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Case Studies
        </motion.h3>
        <div className="w-24 h-1 bg-blue-500 rounded-full mt-4"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
