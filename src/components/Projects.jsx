import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Terminal, Code2, BookMarked, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'line-editor-c':
        return <Terminal className="w-4 h-4" />;
      case 'leetcode-solutions':
        return <Code2 className="w-4 h-4" />;
      case 'hello-world':
        return <BookMarked className="w-4 h-4" />;
      default:
        return <FolderGit2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work &amp; Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Key Software &amp; Coding Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Authentic coursework projects and coding repositories covering C systems programming, LeetCode problem solving, and modern web interfaces.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-7 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
            >
              <div>
                {/* Project Header Tag & Type */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 border border-teal-200/60 dark:border-teal-800/60">
                    {project.type}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {getProjectIcon(project.id)}
                  </div>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Main Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Implementation Key Points */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-200/80 dark:border-slate-700/80">
                  {project.details.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Action Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-700/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:border dark:border-slate-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <Github className="w-4 h-4" />
                      <span>{project.githubLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {/* Terminal preview button for C Line Editor */}
                  {project.id === 'line-editor-c' && (
                    <button
                      onClick={() => setSelectedDemo(selectedDemo === 'cli' ? null : 'cli')}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200/80 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Terminal className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span>{selectedDemo === 'cli' ? 'Hide CLI' : 'Preview CLI'}</span>
                    </button>
                  )}
                </div>

                {/* Interactive CLI simulation preview */}
                {project.id === 'line-editor-c' && selectedDemo === 'cli' && (
                  <div className="mt-4 p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-[11px] leading-relaxed border border-slate-800 animate-fadeIn">
                    <div className="text-slate-500 mb-1">$ ./line_editor sample.txt</div>
                    <div className="text-emerald-400">&gt; INSERT 1 "First line of text"</div>
                    <div className="text-emerald-400">&gt; INSERT 2 "Data structures lab artifact"</div>
                    <div className="text-teal-400">&gt; PRINT 1 2</div>
                    <div className="text-slate-300">1: First line of text</div>
                    <div className="text-slate-300">2: Data structures lab artifact</div>
                    <div className="text-amber-400">&gt; SAVE sample.txt</div>
                    <div className="text-slate-400">// Buffer written to sample.txt successfully</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
