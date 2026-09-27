# Prarthana HS - Developer Portfolio Website

A modern, high-quality, authentic developer portfolio website tailored for **Prarthana HS**, a 3rd-semester BTech Computer Science & Engineering student at **REVA University, Bangalore**.

Designed with a minimal, elegant, premium developer aesthetic suitable for software internships, placement drives, hackathons, and GitHub profiles.

---

## 🚀 Tech Stack

- **React 18** – Modular, component-driven UI architecture
- **Vite** – Lightning-fast build tooling and local development server
- **Tailwind CSS** – Utility-first responsive design, dark/light theme tokens, and typography
- **Lucide React** – Clean, modern, accessible iconography
- **JavaScript (ES6+)** – Modern standard practices

---

## ✨ Features & Structure

1. **Sticky Navigation Bar (`Navbar.jsx`)**
   - Brand logo with developer badge
   - Smooth navigation anchors: *About*, *Education*, *Skills*, *Projects*, *Activities*, *Journey*, *Participation*, *Contact*
   - Interactive Dark/Light mode toggle
   - Direct GitHub button with external link
   - Responsive mobile navigation drawer

2. **Hero Section (`Hero.jsx`)**
   - Exact authentic headline: *"Hi, I'm Prarthana HS"*
   - Title: *"Computer Science Engineering Student & Aspiring Software Developer"*
   - Supporting mission statement: *"Passionate about building practical software projects, solving programming problems, learning new technologies, and developing strong foundations in software engineering."*
   - CTAs: *View My Projects*, *View GitHub*, *Contact Me*
   - Interactive developer profile code card with copy-to-clipboard functionality

3. **About Me (`About.jsx`)**
   - BTech CSE student at REVA University, Bangalore (3rd semester)
   - Genuine student focus: low-level memory operations, algorithmic logic, practical repositories
   - Core interests: Software development, DSA, DBMS, Web development, Problem solving, Git/GitHub, Cloud computing, Learning Python & Java

4. **Education (`Education.jsx`)**
   - REVA University, Bangalore
   - BTech in Computer Science and Engineering (3rd Semester)
   - Expected graduation: 2027
   - Semester 1–3 relevant coursework cards: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Computer Architecture, Discrete Mathematics, Operating Systems

5. **Technical Skills (`Skills.jsx`)**
   - Organized into 4 categories:
     - **Programming**: C, C++, Java, Python
     - **Web Development**: HTML, CSS, JavaScript, React, Vite, Tailwind CSS
     - **Databases**: MySQL, DBMS
     - **Tools**: Git, GitHub, GitHub CLI, VS Code, GitLens, Live Share
   - Filterable tabs
   - Focus descriptions without fake percentage bars

6. **Featured Projects (`Projects.jsx`)**
   - **Simple Line Editor in C**: Command-line line editor featuring pointer-based line buffers, dynamic operations (insert, delete, print), and file persistence. Includes an interactive CLI simulation preview.
   - **LeetCode Practice & Solutions**: Repository documenting algorithmic practice and problem solving ([GitHub Link](https://github.com/prarthana08prarthu/leetcode-solutions)).
   - **Personal Developer Portfolio**: Responsive React + Vite + Tailwind CSS showcase.
   - Zero fake URLs or exaggerated claims.

7. **Portfolio Activities (`Activities.jsx`)**
   - Academic & technical activity cards:
     - Programming Artifact – C/C++
     - Git & GitHub
     - GitLens & Live Share Collaboration
     - LeetCode Practice
     - Coding Profile Development
     - Hackathon Preparation
     - Technical Portfolio Development
   - Evidence badges and repository links.

8. **Learning Journey (`LearningJourney.jsx`)**
   - Step-by-step roadmap showing active semester priorities, core foundational topics, and future milestones.

9. **Achievements & Participation (`Achievements.jsx`)**
   - Smart India Hackathon participation & preliminary ideation
   - Collegiate coding contests & DSA challenges
   - Departmental technical workshops & Git sessions
   - Transparent "Participation" labels without fake awards.

10. **Dedicated GitHub Section (`GitHubSection.jsx`)**
    - `@prarthana08prarthu` spotlight
    - Direct link to `https://github.com/prarthana08prarthu`
    - Visual Git commit activity heatmap representation
    - Selected public repositories showcase

11. **Contact Section (`Contact.jsx`)**
    - Email placeholder with one-click copy
    - GitHub link
    - LinkedIn placeholder
    - Location: Bangalore, India
    - Responsive, validated contact form with confirmation feedback

12. **Footer (`Footer.jsx`)**
    - `"© 2026 Prarthana HS. Built with React & Tailwind CSS."`
    - Social links and smooth scroll-to-top button

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended; verified on Node v24)
- npm (v9 or higher)

### Installation & Run

1. Navigate to the project directory:
   ```bash
   cd "C:\Users\PRARTHANA H S\.gemini\antigravity\scratch\prarthana-portfolio"
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The compiled static assets will be output to the `dist/` directory.

---

## 🛠️ Customization

All personal details, coursework, project descriptions, and repository links are centralized in:
```
src/data/portfolioData.js
```
To update your email, LinkedIn URL, or add new projects as your semesters progress, simply modify the data objects in that file!
