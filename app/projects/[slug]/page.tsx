import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Yugandhar Narravula`,
    description: project.shortDescription,
  };
}

const colorAccent: Record<string, { badge: string; dot: string; btn: string; border: string }> = {
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
    dot: "bg-cyan-400",
    btn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
    border: "border-cyan-500/30",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/25",
    dot: "bg-purple-400",
    btn: "bg-purple-500 hover:bg-purple-400 text-white",
    border: "border-purple-500/30",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    dot: "bg-blue-400",
    btn: "bg-blue-500 hover:bg-blue-400 text-white",
    border: "border-blue-500/30",
  },
  green: {
    badge: "bg-green-500/10 text-green-400 border-green-500/25",
    dot: "bg-green-400",
    btn: "bg-green-500 hover:bg-green-400 text-slate-950",
    border: "border-green-500/30",
  },
};

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mb-4 flex items-center gap-3">
      <span className="h-px flex-1 bg-slate-800" />
      {title}
      <span className="h-px flex-1 bg-slate-800" />
    </h2>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const colors = colorAccent[project.color] ?? colorAccent.cyan;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top nav */}
      <div className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>
          <div className="flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${colors.btn}`}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              <GithubIcon size={14} /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${colors.badge}`}>
              {project.category}
            </span>
            <span className="text-slate-600 text-xs">Case Study</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/70 border border-slate-700/60 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results highlights */}
        <div className={`mb-16 p-6 bg-slate-900/60 border ${colors.border} rounded-2xl`}>
          <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Key Results
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.results.map((result) => (
              <div key={result} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${colors.dot.replace("bg-", "text-")}`} />
                {result}
              </div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="mb-14">
          <SectionHeading title="Overview" />
          <p className="text-slate-300 leading-relaxed text-base">{project.overview}</p>
        </div>

        {/* Problem */}
        <div className="mb-14">
          <SectionHeading title="Problem" />
          <div className="p-5 bg-red-500/5 border border-red-500/15 rounded-xl">
            <p className="text-slate-300 leading-relaxed text-base">{project.problem}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-14">
          <SectionHeading title="Solution" />
          <div className="p-5 bg-green-500/5 border border-green-500/15 rounded-xl">
            <p className="text-slate-300 leading-relaxed text-base">{project.solution}</p>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-14">
          <SectionHeading title="Architecture & Pipeline" />
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <ol className="space-y-3">
              {project.architecture.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className={`shrink-0 w-6 h-6 rounded-full ${colors.dot} text-slate-950 text-xs font-bold flex items-center justify-center mt-0.5`}>
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* My Contribution */}
        <div className="mb-14">
          <SectionHeading title="My Contribution" />
          <ul className="space-y-3">
            {project.myContribution.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <ChevronRight size={15} className={`shrink-0 mt-0.5 ${colors.dot.replace("bg-", "text-")}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-14">
          <SectionHeading title="Challenges & How I Solved Them" />
          <div className="space-y-5">
            {project.challenges.map((item, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-800 bg-red-500/5">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-slate-300">{item.challenge}</p>
                </div>
                <div className="px-5 py-4 bg-green-500/5">
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">
                    Solution
                  </p>
                  <p className="text-sm text-slate-300">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-14">
          <SectionHeading title="Key Highlights" />
          <div className="grid sm:grid-cols-2 gap-4">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-sm text-slate-300"
              >
                <span className={`shrink-0 mt-1 w-2 h-2 rounded-full ${colors.dot}`} />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`p-8 bg-slate-900/60 border ${colors.border} rounded-2xl text-center`}>
          <h3 className="text-white font-bold text-xl mb-2">
            {project.demoUrl ? "Try it live" : "Explore the code"}
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            {project.demoUrl
              ? "Interact with the deployed application or explore the source code."
              : "Browse the source code, architecture, and implementation on GitHub."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all hover:scale-105 ${colors.btn}`}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all hover:scale-105"
            >
              <GithubIcon size={16} /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
