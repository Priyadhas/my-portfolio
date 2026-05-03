"use client";
import { motion } from "framer-motion";
import { Layout, Server, Database, Cloud, Code2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native (Expo)", "TanStack Query", "GraphQL"],
      color: "blue"
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      skills: ["Node.js", "Express.js", "Spring Boot", "ASP.NET", "Microservices", "REST APIs"],
      color: "purple"
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB (Mongoose)", "Redis", "Advanced SQL"],
      color: "cyan"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      skills: ["AWS", "Docker", "CI/CD Pipelines", "GitHub Actions", "Vercel", "Render"],
      color: "blue"
    },
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript"],
      color: "purple"
    }
  ];

  return (
    <section id="skills" className="mt-24">
      <div className="flex flex-col items-center mb-16">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal
        </motion.h3>
        <div className="w-24 h-1 bg-blue-500 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-900/50 backdrop-blur-xl p-6 rounded-3xl border border-white/5 shadow-2xl hover:border-white/10 transition-colors duration-300 relative group overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                {category.icon}
              </div>
              <h4 className="font-bold text-lg text-zinc-50 tracking-tight">{category.title}</h4>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium bg-[#0b0f19] text-zinc-300 border border-white/5 rounded-lg hover:border-blue-500/30 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
