import React from 'react';
import { Award, Trophy, Code, Users, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'Hackathon':
        return <Trophy className="w-4 h-4 text-amber-500" />;
      case 'Competitive Coding':
        return <Code className="w-4 h-4 text-teal-500" />;
      case 'Technical Activities':
        return <Users className="w-4 h-4 text-indigo-500" />;
      default:
        return <Award className="w-4 h-4 text-cyan-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Honors &amp; Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Participation &amp; Technical Engagements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Documented participation across university hackathons, algorithmic contests, and engineering workshops without exaggerated claims.
          </p>
        </div>

        {/* Grid of Participation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-soft hover:shadow-soft-lg hover:border-teal-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag with Participation Label */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                    {getBadgeIcon(item.badge)}
                    <span>{item.badge}</span>
                  </div>

                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 border border-teal-200/70 dark:border-teal-800/70">
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>

                {/* Organization */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{item.organization}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  Key Learnings &amp; Highlights
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-200/70 dark:border-slate-700/60"
                    >
                      <CheckCircle2 className="w-3 h-3 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
