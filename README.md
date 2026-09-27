# Prarthana HS - Student Developer Portfolio

A modern, authentic developer portfolio website built for **Prarthana HS**, a 3rd-semester BTech Computer Science & Engineering student at **REVA University, Bangalore**, satisfying the Portfolio Building course rubric requirements.

---

## 🚀 Tech Stack

- **React 18** – Modular, component-driven UI architecture
- **Vite** – Fast build tooling and local development server
- **Tailwind CSS** – Utility-first responsive design, dark/light theme tokens, and typography
- **Lucide React** – Clean, modern, accessible iconography
- **JavaScript (ES6+)** – Modern standard practices

---

## ✨ Features & Structure

1. **Sticky Navigation Bar (`Navbar.jsx`)**
   - Brand logo and name linking to top (`#`)
   - Internal smooth scrolling anchors: `#about`, `#education`, `#skills`, `#projects`, `#activities`, `#learning`, `#achievements`, `#contact`
   - Dark/Light mode toggle
   - Direct button to verified GitHub profile
   - Responsive mobile navigation drawer

2. **Hero Section (`Hero.jsx`)**
   - Exact headline: *"Hi, I'm Prarthana HS"*
   - Title: *"Computer Science Engineering Student & Aspiring Software Developer"*
   - Supporting statement: *"Passionate about building practical software projects, solving programming problems, learning new technologies, and developing strong foundations in software engineering."*
   - Action buttons: *View My Projects* (`#projects`), *View GitHub* (external link), *Contact Me* (`#contact`)
   - Interactive developer profile code card

3. **About Me (`About.jsx`)**
   - BTech CSE student at REVA University, Bangalore (3rd semester)
   - Core interests: Software development, DSA, DBMS, Web development, Problem solving, Git/GitHub, Cloud computing, Learning Python & Java
   - Realistic student developer perspective without exaggerated claims

4. **Education (`Education.jsx`)**
   - REVA University, Bangalore
   - BTech in Computer Science and Engineering (3rd Semester)
   - Location: Bangalore, Karnataka, India
   - Semester 1–3 relevant coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), DBMS, Computer Organization & Architecture, Discrete Mathematical Structures, Operating Systems Fundamentals

5. **Technical Skills (`Skills.jsx`)**
   - Organized into 4 categories:
     - **Programming**: C, C++, Java, Python
     - **Web Development**: HTML, CSS, JavaScript, React, Vite, Tailwind CSS
     - **Databases**: MySQL, DBMS
     - **Tools**: Git, GitHub, GitHub CLI, VS Code, GitLens, Live Share
   - Practical focus areas without arbitrary percentage bars

6. **Featured Projects & Repositories (`Projects.jsx`)**
   - **Simple Line Editor in C**: Command-line line editor developed in C allowing users to create, view, insert, delete, and modify text lines using line-based operations and file handling.
   - **LeetCode Practice & Solutions**: Repository documenting programming practice and problem-solving progress ([Repository Link](https://github.com/prarthana08prarthu/leetcode-solutions)).
   - **Hello World Repository**: Foundational Git and GitHub artifact repository ([Repository Link](https://github.com/prarthana08prarthu/hello-world)).
   - **Personal Developer Portfolio**: Responsive React + Vite + Tailwind CSS student course portfolio ([Repository Link](https://github.com/prarthana08prarthu/portfolio)).

7. **Course Practical Activities (`Activities.jsx`)**
   - Clearly identifies all four course activities:
     - **Activity 1**: Programming Artifact / C-C++ Work
     - **Activity 2**: Git & GitHub Setup and Version Control (linking to Hello World Repository)
     - **Activity 3**: GitLens & Live Share Collaboration
     - **Activity 4**: LeetCode Practice & Portfolio Integration (linking to LeetCode Repository)

8. **Learning Journey (`LearningJourney.jsx`)**
   - Transparent progression map of current semester subjects and self-paced growth.

9. **Achievements & Participation (`Achievements.jsx`)**
   - Smart India Hackathon (SIH) internal university ideation and preliminary preparation
   - Departmental technical workshops and lab practical sessions
   - 3rd Semester BTech academic pursuit

10. **GitHub Profile & Repositories (`GitHubSection.jsx`)**
    - Verified profile: `https://github.com/prarthana08prarthu`
    - Specific repository links: `leetcode-solutions`, `hello-world`, `simple-line-editor`, and `portfolio`
    - Visual repository activity overview

11. **Contact & Collaboration (`Contact.jsx`)**
    - Verified GitHub link and Bangalore location
    - Functional interactive message form UI for academic collaboration and student opportunities
    - Zero fake or placeholder contact info

12. **Footer (`Footer.jsx`)**
    - `"© 2026 Prarthana HS. Built with React & Tailwind CSS."`
    - Verified GitHub link and back-to-top button

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended; verified on Node v24)
- npm (v9 or higher)

### Run the Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
Compiled static assets are generated in the `dist/` directory.
