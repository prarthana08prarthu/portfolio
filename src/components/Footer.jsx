import React from 'react';
import { Github, ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                &copy; 2026 Prarthana HS. Built with React &amp; Tailwind CSS.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                BTech Computer Science &amp; Engineering &bull; REVA University, Bangalore
              </p>
            </div>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub: @prarthana08prarthu"
            >
              <Github className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
