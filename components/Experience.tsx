"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Experience & Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 leading-tight"
        >
          The path{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #67e8f9 0%, #a78bfa 100%)" }}
          >
            here.
          </span>
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-slate-700/40 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 md:left-[26px] top-6 w-3 h-3 rounded-full border-2 ${
                    exp.type === "work"
                      ? "border-cyan-400 bg-slate-950"
                      : "border-purple-400 bg-slate-950"
                  }`}
                />

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.type === "work" ? (
                          <Briefcase size={14} className="text-cyan-400" />
                        ) : (
                          <GraduationCap size={14} className="text-purple-400" />
                        )}
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            exp.type === "work" ? "text-cyan-400" : "text-purple-400"
                          }`}
                        >
                          {exp.type === "work" ? "Work Experience" : "Education"}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-slate-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 sm:items-end shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <Calendar size={13} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span
                          className={`mt-2 w-1 h-1 rounded-full shrink-0 ${
                            exp.type === "work" ? "bg-cyan-400" : "bg-purple-400"
                          }`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-xs text-slate-400 bg-slate-800/60 border border-slate-700/50 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
