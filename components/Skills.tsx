"use client";

import { motion } from "framer-motion";
import { skillCategories, type SkillColor } from "@/lib/data";

const colorMap: Record<SkillColor, { header: string; badge: string; dot: string }> = {
  cyan: {
    header: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dot: "bg-cyan-400",
  },
  purple: {
    header: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    dot: "bg-purple-400",
  },
  blue: {
    header: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-400",
  },
  green: {
    header: "text-green-400",
    badge: "bg-green-500/10 text-green-300 border-green-500/20",
    dot: "bg-green-400",
  },
  orange: {
    header: "text-orange-400",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    dot: "bg-orange-400",
  },
  red: {
    header: "text-red-400",
    badge: "bg-red-500/10 text-red-300 border-red-500/20",
    dot: "bg-red-400",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a0f1e 50%, #020617 100%)" }}
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
            Technical Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Built for the{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #67e8f9 0%, #a78bfa 100%)" }}
          >
            AI era.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-400 text-lg mb-14 max-w-2xl"
        >
          From agentic orchestration and RAG pipelines to MLOps automation — a full-stack AI toolkit
          built across real production systems.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <h3 className={`font-semibold text-sm uppercase tracking-wider ${colors.header}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md border ${colors.badge} transition-all duration-200 group-hover:opacity-100`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tech list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl"
        >
          <p className="text-slate-500 text-sm font-medium mb-3 uppercase tracking-wider">
            Also proficient in
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Transformers",
              "MLflow",
              "Weights & Biases",
              "Matplotlib",
              "Plotly",
              "Jupyter",
              "Git",
              "VS Code",
              "Postman",
              "Linux",
              "Bash",
            ].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs text-slate-400 bg-slate-800/50 border border-slate-700/40 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
