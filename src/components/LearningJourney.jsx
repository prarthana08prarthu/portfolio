import React from 'react';
import { Compass, CheckCircle2, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

export default function LearningJourney() {
  return (
    <section id="learning" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Curriculum &amp; Self-Paced Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Software Engineering Learning Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A transparent progression map of current semester priorities, technical subjects, and self-directed study milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-6">
            {learningJourney.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
              >
                {/* Milestone Node */}
                <div className="flex md:flex-col items-center gap-3 md:gap-0 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 group-hover:border-teal-500 text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex flex-col items-center justify-center font-mono text-sm font-bold shadow-soft transition-all">
                    <span>0{idx + 1}</span>
                    <span className="text-[10px] text-slate-400 font-normal">STEP</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-soft hover:shadow-soft-lg hover:border-teal-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                      {step.stage}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      <Clock className="w-3 h-3 text-teal-500" />
                      <span>{step.status}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Topics Chips */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                      Focal Concepts
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {step.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-800/50 flex items-start gap-3.5">
          <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <strong>Authentic Academic Disclosure:</strong> This roadmap accurately reflects the active learning progression of a 3rd-semester BTech CSE student. Topics marked as "Active Focus" or "In Progress" represent current university coursework and hands-on coding milestones.
          </div>
        </div>
      </div>
    </section>
  );
}
