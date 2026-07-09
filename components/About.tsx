"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const stats = [
  { label: "AI Projects Built", value: "4+" },
  { label: "Agent Frameworks", value: "LangGraph\n+ LangChain" },
  { label: "LLM APIs Integrated", value: "OpenAI\n+ Groq" },
  { label: "Production Deploys", value: "CI/CD\nAutomated" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              I build AI systems that{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #67e8f9 0%, #a78bfa 100%)",
                }}
              >
                actually ship.
              </span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m an AI/ML Engineer focused on the intersection of <strong className="text-slate-200">Agentic AI</strong>,{" "}
                <strong className="text-slate-200">Generative AI</strong>, and{" "}
                <strong className="text-slate-200">production MLOps</strong>. My work centers on
                designing multi-agent systems with LangGraph, building RAG pipelines with real
                retrieval precision, and deploying automated ML pipelines that run reliably at scale.
              </p>
              <p>
                I don&apos;t just prototype — I architect systems end-to-end: from agent workflow design
                and vector database selection, to FastAPI backends, CI/CD automation, and live
                Streamlit dashboards. Every project I build runs in production.
              </p>
              <p>
                I&apos;m actively seeking roles as an <strong className="text-slate-200">AI Engineer</strong>,{" "}
                <strong className="text-slate-200">GenAI Engineer</strong>, or{" "}
                <strong className="text-slate-200">Applied AI Engineer</strong> where I can work on
                hard, high-impact AI problems with strong engineering practices.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={15} className="text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Zap size={15} className="text-cyan-400 shrink-0" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium rounded-lg border border-slate-700 transition-all duration-200"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium rounded-lg border border-slate-700 transition-all duration-200"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium rounded-lg border border-slate-700 transition-all duration-200"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 hover:border-slate-700 transition-colors"
              >
                <span className="text-2xl font-bold text-white whitespace-pre-line leading-snug">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500">{stat.label}</span>
              </motion.div>
            ))}

            {/* What I bring card */}
            <div className="col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Core Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Multi-Agent Orchestration",
                  "RAG Pipelines",
                  "LLM Integration",
                  "MLOps Automation",
                  "Vector Search",
                  "FastAPI Backends",
                  "CI/CD for ML",
                  "Prompt Engineering",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
