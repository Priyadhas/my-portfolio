"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="mt-24">
      <div className="flex flex-col items-center mb-16">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-white/5 border border-white/10 rounded-2xl mb-5 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
        >
            <EnvelopeIcon className="w-6 h-6 text-blue-400" />
        </motion.div>
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h3>
        <div className="w-24 h-1 bg-blue-500 rounded-full mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h4 className="text-2xl font-bold text-zinc-50 mb-4">Get in Touch</h4>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Feel free to reach out — I’m open to new opportunities, collaborations, and short-term contracts.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group/item">
              <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-colors">
                <EnvelopeIcon className="h-6 w-6 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Email</div>
                <div className="text-sm font-medium text-zinc-200">priyabergithlibin@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group/item">
              <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-colors">
                <PhoneIcon className="h-6 w-6 text-blue-400 group-hover/item:text-purple-300 transition-colors" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Phone</div>
                <div className="text-sm font-medium text-zinc-200">+971 568351016</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group/item">
              <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-colors">
                <MapPinIcon className="h-6 w-6 text-blue-400 group-hover/item:text-cyan-300 transition-colors" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Location</div>
                <div className="text-sm font-medium text-zinc-200">Dubai, UAE</div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="mailto:priyabergithlibin@gmail.com"
              className="inline-flex w-full justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
            >
              Send an Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h4 className="text-xl font-bold text-zinc-50 mb-3 flex items-center gap-2">
             Languages & Availability
          </h4>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8">
            English, Tamil, Hindi, Malayalam — Open to relocation, onsite roles in Dubai, and remote opportunities.
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl p-5 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">Availability & Visa</div>
              <div className="text-sm font-medium text-zinc-200">Immediate | Spouse Visa</div>
            </div>

            <div className="rounded-2xl p-5 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">Preferred Roles</div>
              <div className="text-sm font-medium text-zinc-200 leading-relaxed">Full Stack Developer • Frontend Developer • Backend Developer</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
