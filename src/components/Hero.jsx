import React, { useState } from 'react';
import { ArrowDown, Github, Mail, FolderGit2, Terminal, Sparkles, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "Prarthana HS",
  degree: "BTech Computer Science & Engineering",
  semester: "3rd Semester",
  university: "REVA University, Bangalore",
  coreFocus: [
    "Data Structures & Algorithms",
    "Systems Programming (C/C++)",
    "Java OOP & Python Scripting",
    "Full-Stack Web (React & Tailwind)",
    "DBMS & Relational Modeling"
  ],
  passion: "Building practical software & clean code",
  status: "Open to Internships, Hackathons & Collaborations"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 dark:bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>REVA University • 3rd Semester BTech CSE</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Hi, I'm <span className="text-teal-600 dark:text-teal-400">Prarthana HS</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                Computer Science Engineering Student &amp; Aspiring Software Developer
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Passionate about building practical software projects, solving programming problems, learning new technologies, and developing strong foundations in software engineering.
            </p>

            {/* Quick Metrics / Key Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-2 pb-2 max-w-lg border-y border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Academics</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">3rd Sem CSE</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Primary Focus</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">DSA &amp; Systems</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">Bangalore, IN</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-sm border border-slate-800 dark:border-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Profile Card / Code Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500/20 to-indigo-500/20 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    <span>prarthana-profile.js</span>
                  </div>
                  <button
                    onClick={copyCode}
                    title="Copy code"
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
                  <div className="text-slate-500 italic mb-2">// Developer Profile &amp; Academic Focus</div>
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-teal-300">student</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-amber-300">"Prarthana HS"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">institution:</span>{' '}
                    <span className="text-amber-300">"REVA University, Bangalore"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">currentTerm:</span>{' '}
                    <span className="text-amber-300">"3rd Semester BTech CSE"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                  </p>
                  <p className="pl-8 text-teal-300">
                    <span className="text-amber-300">"C"</span>, <span className="text-amber-300">"C++"</span>, <span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"React"</span>
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">interests:</span> [
                  </p>
                  <p className="pl-8 text-slate-300">
                    <span className="text-amber-300">"Data Structures"</span>, <span className="text-amber-300">"DBMS"</span>, <span className="text-amber-300">"Git Workflows"</span>
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-400">aspiringGoal:</span>{' '}
                    <span className="text-emerald-400">"Software Engineering Internships"</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>Ready for collaborative engineering</span>
                    </span>
                    <span className="text-teal-400 font-semibold">ES6 / Node v24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
