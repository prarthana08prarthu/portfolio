import React from 'react';
import { GraduationCap, MapPin, BookOpenCheck, Layers } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Academic Curriculum
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Acquiring formal foundations in computational theory, algorithm design, software architecture, and systems engineering.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="relative bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-10 shadow-soft overflow-hidden">
          {/* Subtle decoration accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Header info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {educationData.institution}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  {educationData.degree}
                </div>
                <div className="flex flex-wrap gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5 font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-md border border-teal-200/70 dark:border-teal-800/60">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{educationData.currentSemester}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{educationData.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {educationData.academicFocus}
              </p>
            </div>

            {/* Right Coursework Column */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 rounded-xl p-6 border border-slate-200/90 dark:border-slate-700/80">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Relevant Coursework &amp; Core Subjects
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Semester 1–3 Curriculum
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationData.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-teal-500/40 transition-colors"
                  >
                    <span className="text-teal-600 dark:text-teal-400 font-mono text-xs mt-0.5">0{idx + 1}.</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      {course}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-800/50 flex items-center gap-3 text-xs text-teal-900 dark:text-teal-200">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span>
                  Combines classroom theory with practical laboratory sessions, weekly programming assignments, and code verification.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
