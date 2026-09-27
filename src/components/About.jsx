import React from 'react';
import { BookOpen, Code, Database, Globe, Cpu, GitBranch, Cloud, Sparkles, Binary, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const interests = [
    {
      title: "Software Development",
      desc: "Building clean, maintainable, and practical software solutions from command-line utilities to interactive apps.",
      icon: Code,
      badge: "Architecture & Code Quality"
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Practicing algorithmic thinking, time and space complexity optimization, and core data representations.",
      icon: Binary,
      badge: "Problem Solving"
    },
    {
      title: "Database Management Systems",
      desc: "Understanding relational database design, normalization, ACID guarantees, and SQL query optimization.",
      icon: Database,
      badge: "Data Systems"
    },
    {
      title: "Web Development",
      desc: "Creating responsive, modern, and accessible user interfaces with React, JavaScript, and Tailwind CSS.",
      icon: Globe,
      badge: "Frontend Engineering"
    },
    {
      title: "Problem Solving",
      desc: "Breaking down complex computational problems methodically and writing structured, testable solutions.",
      icon: Sparkles,
      badge: "Logic & Critical Thinking"
    },
    {
      title: "Git and GitHub",
      desc: "Practicing version control workflows, repository management, clean commits, and collaborative developer practices.",
      icon: GitBranch,
      badge: "Version Control"
    },
    {
      title: "Cloud Computing",
      desc: "Exploring cloud infrastructure paradigms, modern hosting platforms, and deployment workflows for web applications.",
      icon: Cloud,
      badge: "Future Exploration"
    },
    {
      title: "Learning Python and Java",
      desc: "Expanding language versatility with Java for Object-Oriented Programming and Python for algorithmic scripting.",
      icon: Cpu,
      badge: "Multi-Language Growth"
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering Foundations with a Passion for Practical Problem Solving
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a BTech Computer Science and Engineering student at{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">REVA University, Bangalore</strong>,
            currently navigating my <strong className="text-slate-900 dark:text-white font-semibold">3rd semester</strong>.
            My primary motivation is rooted in understanding how computers work from the ground up—from low-level memory operations in C to building modular web applications in React.
          </p>
        </div>

        {/* Narrative & Focus Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 bg-white dark:bg-slate-800/70 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-soft">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <span>My Approach to Learning &amp; Engineering</span>
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Rather than treating computer science as mere theoretical coursework, I enjoy turning concepts into working software artifacts. Whether implementing a command-line line editor in C, analyzing algorithmic patterns on LeetCode, or building component-driven interfaces, I actively document my progress and embrace continuous improvement.
              </p>
              <p>
                I believe that solid fundamentals in Data Structures, Object-Oriented Design, and Database Management form the bedrock of an adaptable software engineer. I am actively seeking opportunities such as hackathons, open collaborative projects, and software internships where I can contribute actively and learn from experienced engineering teams.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>Authentic student developer mindset</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>Rigorous daily git commit habits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>Dedicated problem-solving practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>Open for collaborative peer learning</span>
              </div>
            </div>
          </div>

          {/* Quick Academic Snapshot Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-50 to-slate-50 dark:from-slate-800 dark:to-slate-850 p-6 sm:p-8 rounded-2xl border border-teal-200/70 dark:border-slate-700 shadow-soft flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-700 dark:text-teal-400">
                Current Snapshot
              </span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Student Profile Highlights
              </h4>
              <dl className="mt-5 space-y-3.5 text-sm">
                <div className="flex justify-between pb-2 border-b border-slate-200/80 dark:border-slate-700/80">
                  <dt className="text-slate-500 dark:text-slate-400">University</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200 text-right">REVA University</dd>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200/80 dark:border-slate-700/80">
                  <dt className="text-slate-500 dark:text-slate-400">Department</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200 text-right">Computer Science &amp; Engg</dd>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200/80 dark:border-slate-700/80">
                  <dt className="text-slate-500 dark:text-slate-400">Current Semester</dt>
                  <dd className="font-semibold text-teal-600 dark:text-teal-400 text-right">3rd Semester</dd>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200/80 dark:border-slate-700/80">
                  <dt className="text-slate-500 dark:text-slate-400">Primary Location</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200 text-right">Bangalore, Karnataka, IN</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500 dark:text-slate-400">Active Learning Goal</dt>
                  <dd className="font-semibold text-slate-800 dark:text-slate-200 text-right">DSA &amp; Web Architectures</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 italic">
              "Building solid theoretical roots and applying them through tangible code repositories."
            </div>
          </div>
        </div>

        {/* Areas of Interest Grid */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Core Technical Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800/80 rounded-xl p-5 border border-slate-200/90 dark:border-slate-700/80 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-200 shadow-soft-sm hover:shadow-soft group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 dark:text-teal-400 tracking-wide uppercase">
                    {item.badge}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
