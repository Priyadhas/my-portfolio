// // components/EducationCerts.tsx
// export default function EducationCerts() {
//   return (
//     <section id="education" className="mt-12 grid md:grid-cols-2 gap-6">
//       <div>
//         <h3 className="text-2xl font-semibold">Education</h3>
//         <div className="mt-4 space-y-4">
//           <div className="bg-white p-5 rounded-lg shadow-sm">
//             <h4 className="font-medium">M.E - Communication Systems</h4>
//             <p className="text-sm text-slate-600">Maria College of Engineering — 2022–2024 — CGPA: 8.39</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-sm">
//             <h4 className="font-medium">B.E - Electronics & Communication Engineering</h4>
//             <p className="text-sm text-slate-600">Francis Xavier Autonomous Engineering College — 2018–2022 — CGPA: 8.95</p>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="text-2xl font-semibold">Certifications</h3>
//         <div className="mt-4 grid grid-cols-1 gap-3">
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <div className="font-medium">Java Full Stack Development</div>
//             <div className="text-sm text-slate-600">Online Course</div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <div className="font-medium">Strategic Leadership Workshop</div>
//             <div className="text-sm text-slate-600">Workshop</div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <div className="font-medium">Fundamentals in Telecom</div>
//             <div className="text-sm text-slate-600">Course</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";

export default function EducationCerts() {
  const edu = [
    {
      title: "M.E — Communication Systems",
      school: "Maria College of Engineering",
      period: "2022 – 2024",
      extra: "CGPA: 8.39",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: "B.E — Electronics & Communication Engineering",
      school: "Francis Xavier Autonomous Engineering College",
      period: "2018 – 2022",
      extra: "CGPA: 8.95",
      color: "from-pink-400 to-pink-600",
    },
  ];

  const certs = [
    { title: "Java Full Stack Development", issuer: "Online Course", date: "2024" },
    { title: "Strategic Leadership Workshop", issuer: "Workshop", date: "2023" },
    { title: "Fundamentals in Telecom", issuer: "Course", date: "2022" },
  ];

  return (
    <section id="education" className="mt-12 grid md:grid-cols-2 gap-8">
      {/* LEFT: Education timeline */}
      <div>
        <h3 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
          Education
        </h3>

        <div className="relative pl-6">
          {/* vertical line */}
          <div className="absolute left-3 top-4 bottom-0 w-[2px] bg-slate-100 rounded" />

          <div className="space-y-6">
            {edu.map((e, idx) => (
              <motion.article
                key={e.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                {/* dot */}
                <div className={`absolute -left-[26px] top-6 h-5 w-5 rounded-full bg-gradient-to-br ${e.color} ring-4 ring-white shadow`} />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{e.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{e.school}</p>
                    <div className="mt-2 text-sm text-slate-500 flex items-center gap-3">
                      <span className="px-2 py-1 rounded-md bg-slate-100 text-xs font-medium">{e.period}</span>
                      <span className="text-xs">{e.extra}</span>
                    </div>
                  </div>

                  <div className="md:text-right">
                    <div className="hidden md:inline-block text-xs text-slate-500">Degree</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Certifications */}
      <div>
        <h3 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-400">
          Certifications
        </h3>

        <div className="grid gap-4">
          {certs.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="flex items-center justify-between gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                {/* avatar circle with initials */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-200 to-indigo-400 text-indigo-800 font-semibold">
                  {c.title.split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase()}
                </div>

                <div>
                  <div className="font-medium text-slate-900">{c.title}</div>
                  <div className="text-sm text-slate-500">{c.issuer}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 hidden sm:inline">{c.date}</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
