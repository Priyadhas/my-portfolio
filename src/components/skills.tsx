// // components/Skills.tsx
// export default function Skills() {
//   return (
//     <section id="skills" className="mt-12">
//       <h3 className="text-2xl font-semibold">Skills</h3>
//       <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-5 rounded-lg shadow-sm">
//           <h4 className="font-medium">Technical Skills</h4>
//           <ul className="mt-3 list-disc list-inside text-slate-700">
//             <li>Core Java, Python, C, TypeScript, JavaScript</li>
//             <li>React.js, HTML5, CSS3, RESTful APIs</li>
//             <li>Spring Boot, Node.js, Express.js</li>
//             <li>PostgreSQL, MySQL</li>
//             <li>AWS, Git, GitHub, VS Code</li>
//           </ul>
//         </div>

//         <div className="bg-white p-5 rounded-lg shadow-sm">
//           <h4 className="font-medium">Soft Skills</h4>
//           <ul className="mt-3 list-disc list-inside text-slate-700">
//             <li>Creativity</li>
//             <li>Problem Solving</li>
//             <li>Leadership</li>
//             <li>Collaboration</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Cloud, GitBranch, Lightbulb, Users, Sparkles, Brain } from "lucide-react";

export default function Skills() {
  const techSkills = [
    { icon: <Code className="w-5 h-5 text-indigo-600" />, name: "Core Java, Python, C, TypeScript, JavaScript" },
    { icon: <Cpu className="w-5 h-5 text-indigo-600" />, name: "React.js, HTML5, CSS3, RESTful APIs" },
    { icon: <Cloud className="w-5 h-5 text-indigo-600" />, name: "Spring Boot, Node.js, Express.js" },
    { icon: <GitBranch className="w-5 h-5 text-indigo-600" />, name: "PostgreSQL, MySQL" },
    { icon: <Sparkles className="w-5 h-5 text-indigo-600" />, name: "AWS, Git, GitHub, VS Code" },
  ];

  const softSkills = [
    { icon: <Lightbulb className="w-5 h-5 text-pink-600" />, name: "Creativity" },
    { icon: <Brain className="w-5 h-5 text-pink-600" />, name: "Problem Solving" },
    { icon: <Users className="w-5 h-5 text-pink-600" />, name: "Leadership" },
    { icon: <Sparkles className="w-5 h-5 text-pink-600" />, name: "Collaboration" },
  ];

  return (
    <section id="skills" className="mt-16">
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
        Skills
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h4 className="font-semibold text-lg text-indigo-700 mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5" /> Technical Skills
          </h4>
          <ul className="space-y-3 text-slate-700">
            {techSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h4 className="font-semibold text-lg text-pink-700 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" /> Soft Skills
          </h4>
          <ul className="space-y-3 text-slate-700">
            {softSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
