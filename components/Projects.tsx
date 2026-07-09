"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

const colorMap = {
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
    glow: "hover:shadow-cyan-500/8",
    accent: "bg-cyan-500",
    border: "hover:border-cyan-500/30",
    button: "text-cyan-400 hover:text-cyan-300",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/25",
    glow: "hover:shadow-purple-500/8",
    accent: "bg-purple-500",
    border: "hover:border-purple-500/30",
    button: "text-purple-400 hover:text-purple-300",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    glow: "hover:shadow-blue-500/8",
    accent: "bg-blue-500",
    border: "hover:border-blue-500/30",
    button: "text-blue-400 hover:text-blue-300",
  },
  green: {
    badge: "bg-green-500/10 text-green-400 border-green-500/25",
    glow: "hover:shadow-green-500/8",
    accent: "bg-green-500",
    border: "hover:border-green-500/30",
    button: "text-green-400 hover:text-green-300",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Featured Projects
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
            Production AI{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #67e8f9 0%, #a78bfa 100%)" }}
            >
              systems.
            </span>
          </h2>
          <p className="text-slate-400 max-w-sm text-right hidden md:block">
            Real-world AI products — not demos. Every project ships with a live backend, clean
            architecture, and documented results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative flex flex-col bg-slate-900/60 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${colors.border} ${colors.glow}`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${colors.badge}`}>
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                      title="View source code"
                    >
                      <GithubIcon size={16} />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                        title="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-50 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.shortDescription}
                </p>

                {/* Highlights */}
                <ul className="mb-5 space-y-1.5">
                  {project.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.accent}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-slate-400 bg-slate-800/70 border border-slate-700/50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="px-2 py-0.5 text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 rounded">
                      +{project.techStack.length - 6} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-sm font-medium ${colors.button} transition-colors`}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} /> Source Code
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors ml-auto"
                  >
                    Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
