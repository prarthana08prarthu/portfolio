import React, { useState } from 'react';
import { Cpu, Globe, Database, Wrench, CheckCircle, Terminal, Layers, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Databases & Data Management':
        return <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Developer Tools & Workflow':
        return <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Skills &amp; Developer Toolchain
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Categorized technical stack cultivated through academic labs, algorithmic practice, and hands-on project implementations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50'
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setActiveTab('programming')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'programming'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50'
            }`}
          >
            Programming Languages
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'web'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'database'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50'
            }`}
          >
            Databases &amp; DBMS
          </button>
          <button
            onClick={() => setActiveTab('tool')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'tool'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50'
            }`}
          >
            Tools &amp; Workflow
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-soft hover:shadow-soft-lg transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {group.skills.length} core technologies
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Items with Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-teal-500/40 hover:bg-slate-100/70 dark:hover:bg-slate-900 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-60 group-hover:opacity-100" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      {skill.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>
              <strong>Authentic Skill Representation:</strong> We deliberately present practical competencies and active study areas instead of arbitrary percentage bars.
            </span>
          </div>
          <span className="font-mono text-[11px] text-teal-600 dark:text-teal-400">
            Current: Semester 3
          </span>
        </div>
      </div>
    </section>
  );
}
