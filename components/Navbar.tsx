"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-tight hover:text-cyan-400 transition-colors"
        >
          <span className="text-cyan-400">Y</span>ugandhar
          <span className="text-slate-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Download size={14} />
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 min-h-screen">
          <nav className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-colors"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
