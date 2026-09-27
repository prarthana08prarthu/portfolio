import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Interested in discussing potential software internships, hackathon collaborations, or technical projects? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-soft space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    Email Address
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono truncate">
                      {personalInfo.email}
                    </span>
                    <button
                      onClick={copyEmail}
                      title="Copy email address"
                      className="p-1 rounded text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-teal-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
                    Academic email placeholder
                  </span>
                </div>
              </div>

              {/* GitHub Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-slate-200 flex items-center justify-center flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    GitHub Profile
                  </span>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline block mt-0.5 font-mono truncate"
                  >
                    github.com/{personalInfo.githubUsername}
                  </a>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
                    Primary coding &amp; project repository
                  </span>
                </div>
              </div>

              {/* LinkedIn Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    LinkedIn Network
                  </span>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 block mt-0.5 truncate"
                  >
                    linkedin.com/in/prarthana-hs
                  </a>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
                    Professional networking profile placeholder
                  </span>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    Current Location
                  </span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    {personalInfo.location}
                  </p>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-0.5">
                    REVA University Campus area
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
              <span>Available for 2024–2025 student hackathons, coding workshops, and summer internship inquiries.</span>
            </div>
          </div>

          {/* Right Column: Contact Form UI */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700/80 shadow-soft">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
              Have an internship query or project opportunity? Leave your note below.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Message Prepared Successfully
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>! In this client-side demonstration, you can also connect directly via email at <span className="font-mono text-teal-600 dark:text-teal-400 font-semibold">{personalInfo.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-2 px-4 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Recruiter Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note, feedback, or opportunity details here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
