"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 px-4 md:px-8 lg:px-16">
      <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
        Contact
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
        >
          <p className="text-slate-700 text-[15px] leading-relaxed">
            Feel free to reach out — I’m open to new opportunities, collaborations, and short-term contracts.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
                <EnvelopeIcon className="h-5 w-5 text-indigo-600" />
              </span>
              <div>
                <div className="text-xs text-slate-500">Email</div>
                <div className="text-sm font-medium text-slate-900">priyabergithlibin@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
                <PhoneIcon className="h-5 w-5 text-indigo-600" />
              </span>
              <div>
                <div className="text-xs text-slate-500">Phone</div>
                <div className="text-sm font-medium text-slate-900">+971 568351016</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
                <MapPinIcon className="h-5 w-5 text-indigo-600" />
              </span>
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="text-sm font-medium text-slate-900">Dubai, UAE</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="mailto:priyabergithlibin@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-medium px-4 py-2 rounded-full text-sm shadow hover:brightness-105 transition"
            >
              Email Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          whileHover={{ scale: 1.01 }}
          className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
        >
          <h4 className="text-lg font-semibold text-slate-900 mb-2">🗣️ Languages & Availability</h4>
          <p className="text-sm text-slate-700">
            English, Tamil, Hindi — Open to relocation, onsite roles in Dubai, and remote opportunities.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg p-3 bg-slate-50 flex flex-col">
              <div className="text-xs text-slate-500">Work Authorization</div>
              <div className="mt-1 font-medium text-slate-900">Willing to relocate to Dubai / UAE</div>
            </div>

            <div className="rounded-lg p-3 bg-slate-50 flex flex-col">
              <div className="text-xs text-slate-500">Preferred Roles</div>
              <div className="mt-1 font-medium text-slate-900">Full Stack Developer • Frontend Developer  • Backend Developer</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
