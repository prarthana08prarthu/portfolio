import React from 'react';
import { Github, ExternalLink, GitBranch, BookMarked } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function GitHubSection() {
  const selectedRepos = [
    {
      name: "leetcode-solutions",
      url: personalInfo.leetcodeRepoUrl,
      description: "A GitHub repository documenting programming practice and problem-solving progress through coding problems.",
      languages: [
        { name: "C++", color: "#f34b7d" },
        { name: "Java", color: "#b07219" },
        { name: "Python", color: "#3572A5" }
      ],
      visibility: "Public",
      tag: "DSA Practice"
    },
    {
      name: "hello-world",
      url: personalInfo.helloWorldRepoUrl,
      description: "Foundational Git and GitHub artifact repository used to practice version control workflow, initial commits, and remote push.",
      languages: [
        { name: "Markdown", color: "#083fa1" },
        { name: "Git", color: "#f05032" }
      ],
      visibility: "Public",
      tag: "Course Artifact"
    },
    {
      name: "simple-line-editor",
      url: personalInfo.lineEditorRepoUrl,
      description: "Command-line line editor developed in C that allows users to create, view, insert, delete, and modify text lines using line-based operations.",
      languages: [
        { name: "C", color: "#555555" }
      ],
      visibility: "Public",
      tag: "Systems Programming"
    },
    {
      name: "portfolio",
      url: personalInfo.portfolioRepoUrl,
      description: "Responsive developer portfolio built using React, Vite, and Tailwind CSS to showcase course activities and programming projects.",
      languages: [
        { name: "JavaScript", color: "#f1e05a" },
        { name: "Tailwind CSS", color: "#38bdf8" },
        { name: "HTML", color: "#e34c26" }
      ],
      visibility: "Public",
      tag: "Portfolio Showcase"
    }
  ];

  // Visual representation of week commit blocks (7 days x 22 weeks)
  const commitWeeks = Array.from({ length: 22 }, (_, colIdx) =>
    Array.from({ length: 7 }, (_, rowIdx) => {
      const val = (colIdx * 3 + rowIdx * 5 + 2) % 6;
      if (val === 0) return 0;
      if (val === 1 || val === 2) return 1;
      if (val === 3 || val === 4) return 2;
      return 3;
    })
  );

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-teal-200 dark:bg-teal-900/60';
      case 2:
        return 'bg-teal-400 dark:bg-teal-700';
      case 3:
        return 'bg-teal-600 dark:bg-teal-500';
      default:
        return 'bg-slate-200 dark:bg-slate-800';
    }
  };

  return (
    <section id="github" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source &amp; Version Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            GitHub Profile &amp; Repositories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Transparent view of code repositories, daily commit workflow, and problem-solving logs on GitHub.
          </p>
        </div>

        {/* Profile Spotlight Banner */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-8 shadow-soft mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-center border border-slate-800 shadow-md">
                <Github className="w-9 h-9" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/60 font-mono">
                    @{personalInfo.githubUsername}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  BTech Computer Science &amp; Engineering &bull; REVA University, Bangalore
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border dark:border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Activity / Heatmap Area */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/80">
            <div className="flex items-center justify-between mb-3 text-xs">
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <GitBranch className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>Repository Commit Activity Overview</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-800 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-teal-200 dark:bg-teal-900/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-teal-400 dark:bg-teal-700 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-teal-600 dark:bg-teal-500 inline-block" />
                <span>More</span>
              </div>
            </div>

            {/* Heatmap visualization grid */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-flex gap-1.5 p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
                {commitWeeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3 h-3 rounded-sm transition-transform hover:scale-125 ${getHeatmapColor(level)}`}
                        title="Activity block"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
              <span>Consistent Git discipline across data structures, coursework, and personal projects.</span>
              <span className="font-mono text-teal-600 dark:text-teal-400 font-medium">github.com/{personalInfo.githubUsername}</span>
            </div>
          </div>
        </div>

        {/* Selected Repositories Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Selected Repositories
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Specific Repository Links
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedRepos.map((repo, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700/80 shadow-soft hover:shadow-soft-lg hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-200 group"
              >
                <div>
                  {/* Repo Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <BookMarked className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {repo.visibility}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                {/* Languages and Link */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-700/80">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      {repo.languages.map((lang, lIdx) => (
                        <div key={lIdx} className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: lang.color }}
                          />
                          <span>{lang.name}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      title={`Open ${repo.name} repository`}
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
