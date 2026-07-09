import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link href="/" className="text-white font-bold text-base tracking-tight">
            <span className="text-cyan-400">Y</span>ugandhar<span className="text-slate-500">.</span>
          </Link>
          <p className="text-slate-600 text-xs mt-1">AI Engineer · GenAI · Agentic AI · MLOps</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Yugandhar Narravula. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
