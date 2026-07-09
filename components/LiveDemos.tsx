"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { projects } from "@/lib/data";

export default function LiveDemos() {
  return (
    <section
      id="demos"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #020617 0%, #080e1c 50%, #020617 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Live Demos
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Try them{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #67e8f9 0%, #a78bfa 100%)" }}
            >
              live.
            </span>
          </h2>
          <p className="text-slate-400 max-w-sm text-right hidden md:block">
            All projects are deployed and accessible. No signup required — just click and interact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.filter((p) => p.demoUrl).map((project, i) => (
            <motion.a
              key={project.slug}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col p-5 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 group-hover:border-slate-600 transition-colors">
                <Globe size={18} className="text-cyan-400" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-white text-sm mb-1.5 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 flex-1 leading-relaxed mb-4">
                {project.category} · Streamlit
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 group-hover:gap-2.5 transition-all duration-200">
                <span>Open Demo</span>
                <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
