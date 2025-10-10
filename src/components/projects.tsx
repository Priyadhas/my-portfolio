// type Project = { title: string; description: string; tags: string[] };

// const projects: Project[] = [
//   { title: "Zoom App Clone", description: "Replication of Zoom features (video-call UI, meeting creation, participants).", tags: ["React", "WebRTC", "Node.js", "Socket.io"] },
//   { title: "Recipe App", description: "Searchable recipe manager with CRUD and friendly UI.", tags: ["React", "Node.js", "Express", "PostgreSQL"] },
//   { title: "DOS Attack Detection", description: "Deep learning approach to detect denial-of-service attacks.", tags: ["Python", "TensorFlow", "Scikit-learn"] },
//   { title: "Plant Disease Prediction", description: "ML model to detect plant diseases from leaf images.", tags: ["Python", "Keras", "OpenCV"] },
// ];

// function Card({ p }: { p: Project }) {
//   return (
//     <article className="bg-white p-5 rounded-lg shadow-sm">
//       <h4 className="font-semibold">{p.title}</h4>
//       <p className="mt-2 text-slate-700 text-sm">{p.description}</p>
//       <div className="mt-3 flex flex-wrap gap-2">
//         {p.tags.map((t) => <span key={t} className="text-xs px-2 py-1 border rounded-full text-slate-600">{t}</span>)}
//       </div>
//     </article>
//   );
// }

// export default function Projects() {
//   return (
//     <section id="projects" className="mt-12">
//       <h3 className="text-2xl font-semibold">Projects</h3>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((p) => <Card key={p.title} p={p} />)}
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Zoom App Clone",
    description:
      "Built a functional Zoom-inspired app supporting live video calls, meeting creation, and participant management with real-time synchronization.",
    tags: ["React", "WebRTC", "Node.js", "Socket.io"],
  },
  {
    title: "Recipe App",
    description:
      "Developed a full-stack recipe management system with search, CRUD operations, and an interactive, mobile-friendly UI.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "DOS Attack Detection",
    description:
      "Implemented a deep learning model to detect denial-of-service (DoS) attacks, improving cybersecurity response efficiency.",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Plant Disease Prediction",
    description:
      "Created an ML model using image recognition to identify plant diseases from leaf images, aiding farmers in early diagnosis.",
    tags: ["Python", "Keras", "OpenCV"],
  },
];

function Card({ p }: { p: Project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg border border-slate-100 transition-all duration-300"
    >
      <h4 className="text-lg font-semibold text-slate-900 mb-2 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text">
        {p.title}
      </h4>
      <p className="text-slate-700 text-sm leading-relaxed">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full font-medium bg-gradient-to-r from-indigo-50 to-pink-50 text-slate-700 ring-1 ring-indigo-100 hover:ring-pink-200 transition"
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
    <section id="projects" className="mt-20 px-4 md:px-8 lg:px-16">
      <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
        Projects
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </motion.div>

      {/* Optional: subtle footer note */}
      <div className="text-center text-sm text-slate-500 mt-10">
        <p>✨ Explore my projects — blending creativity, performance, and clean architecture.</p>
      </div>
    </section>
  );
}
