import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import LearningJourney from './components/LearningJourney';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('prarthana_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('prarthana_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('prarthana_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b1120] dark:text-slate-100 transition-colors duration-300">
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Portfolio Activities Section */}
        <Activities />

        {/* Learning Journey Roadmap Section */}
        <LearningJourney />

        {/* Achievements / Participation Section */}
        <Achievements />

        {/* Dedicated GitHub Section */}
        <GitHubSection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
