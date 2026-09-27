import React from 'react';
import { Activity, GitBranch, Terminal, Users, Code, ExternalLink, CheckCircle } from 'lucide-react';
import { activitiesData, personalInfo } from '../data/portfolioData';

export default function Activities() {
  const getActivityIcon = (title) => {
    if (title.includes('C-C++') || title.includes('Programming Artifact')) {
      return <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
    if (title.includes('Git & GitHub')) {
      return <GitBranch className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
    if (title.includes('GitLens')) {
      return <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
    if (title.includes('LeetCode')) {
      return <Code className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
    return <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
  };

  return (
    <section id="activities" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Course Practical Activities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Portfolio Course Activities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Hands-on technical artifacts and development routines aligned with semester course activities and engineering practice.
          </p>
        </div>

        {/* Activities Cards Grid - 4 Course Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activitiesData.map((activity, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-soft hover:shadow-soft-lg hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-200 group"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getActivityIcon(activity.title)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-teal-700 dark:text-teal-400 px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/80 border border-teal-200/70 dark:border-teal-800/70">
                    {activity.activityNumber}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {activity.description}
                </p>

                {/* Skills Learned */}
                <div className="mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Skills Developed
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activity.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Evidence / Repository Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
                {activity.evidenceLink ? (
                  <a
                    href={activity.evidenceLink}
                    target={activity.isExternal ? "_blank" : "_self"}
                    rel={activity.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:border dark:border-slate-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <span>{activity.evidenceText}</span>
                    {activity.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <span className="text-teal-400">&darr;</span>
                    )}
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{activity.evidenceText}</span>
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
