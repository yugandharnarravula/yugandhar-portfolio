import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yugandhar Narravula — AI Engineer | GenAI & Agentic AI",
  description:
    "Portfolio of Yugandhar Narravula — AI Engineer specializing in Agentic AI, GenAI, Multi-Agent Systems, RAG, LangGraph, and MLOps. Building intelligent systems that think, reason, and act.",
  keywords: [
    "AI Engineer",
    "GenAI Engineer",
    "Agentic AI",
    "Multi-Agent Systems",
    "LangGraph",
    "LangChain",
    "RAG",
    "Machine Learning Engineer",
    "MLOps",
    "Python",
    "OpenAI",
    "LLM",
    "Yugandhar Narravula",
  ],
  authors: [{ name: "Yugandhar Narravula" }],
  openGraph: {
    title: "Yugandhar Narravula — AI Engineer",
    description:
      "AI Engineer specializing in Agentic AI, GenAI, Multi-Agent Systems, and RAG. Building intelligent, production-ready AI applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yugandhar Narravula — AI Engineer",
    description: "AI Engineer · GenAI · Agentic AI · MLOps",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
