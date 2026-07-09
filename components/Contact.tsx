"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const links = [
  {
    icon: Mail,
    label: "Send an Email",
    sub: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/25 hover:border-cyan-500/40",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    sub: "View my repos & open source",
    href: personalInfo.github,
    color: "text-white",
    bg: "bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-slate-600",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    sub: "Connect professionally",
    href: personalInfo.linkedin,
    color: "text-blue-400",
    bg: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/25 hover:border-blue-500/40",
  },
  {
    icon: Download,
    label: "Download Resume",
    sub: "PDF — latest version",
    href: personalInfo.resumeUrl,
    color: "text-purple-400",
    bg: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/25 hover:border-purple-500/40",
    download: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #020617 0%, #080e1c 60%, #020617 100%)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Let&apos;s build something{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #67e8f9 0%, #a78bfa 100%)" }}
          >
            intelligent.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-400 text-lg leading-relaxed mb-14 max-w-2xl mx-auto"
        >
          I&apos;m actively looking for AI/ML engineering roles. If you&apos;re building something ambitious
          with GenAI, agentic systems, or ML — I&apos;d love to connect. Open to full-time,
          contract, and consulting opportunities.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download || undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`group flex items-center gap-4 p-5 border rounded-2xl transition-all duration-250 ${link.bg}`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon size={20} className={link.color} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-white text-sm">{link.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{link.sub}</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
              </motion.a>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-slate-600 text-sm"
        >
          Typically respond within 24 hours · Open to remote, hybrid, and on-site roles
        </motion.p>
      </div>
    </section>
  );
}
