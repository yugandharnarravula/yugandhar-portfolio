"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="blob-float absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)" }}
        />
        <div
          className="blob-float-delayed absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/25 rounded-full text-cyan-400 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-dot" />
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.08] tracking-tight"
          >
            {personalInfo.name.split(" ")[0]}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #67e8f9 0%, #38bdf8 40%, #a78bfa 100%)",
              }}
            >
              {personalInfo.name.split(" ")[1]}
            </span>
          </motion.h1>

          {/* Role chips */}
          <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
            {personalInfo.roles.map((role) => (
              <span
                key={role}
                className="px-3 py-1 text-sm font-medium text-slate-300 bg-slate-800/70 border border-slate-700/60 rounded-full"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700/60 transition-all duration-200 hover:scale-105"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-slate-400 hover:text-cyan-400 font-medium transition-colors duration-200"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-200 group"
            >
              <GithubIcon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors duration-200 group"
            >
              <LinkedinIcon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
