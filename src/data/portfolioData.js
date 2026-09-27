export const personalInfo = {
  name: "Prarthana HS",
  role: "Computer Science Engineering Student & Aspiring Software Developer",
  university: "REVA University, Bangalore",
  program: "BTech – Computer Science and Engineering",
  semester: "3rd Semester",
  location: "Bangalore, India",
  tagline: "Passionate about building practical software projects, solving programming problems, learning new technologies, and developing strong foundations in software engineering.",
  githubUsername: "prarthana08prarthu",
  githubUrl: "https://github.com/prarthana08prarthu",
  linkedinUrl: "https://linkedin.com/in/prarthana-hs", // Placeholder for actual profile
  email: "prarthana.cse.student@reva.edu.in", // Placeholder for direct contact
};

export const educationData = {
  institution: "REVA University, Bangalore",
  degree: "BTech in Computer Science and Engineering",
  currentSemester: "3rd Semester",
  expectedGraduation: "Expected: 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / C++)",
    "Database Management Systems (DBMS)",
    "Computer Organization & Architecture",
    "Discrete Mathematical Structures",
    "Operating Systems Fundamentals",
    "Design & Analysis of Algorithms"
  ],
  academicFocus: "Building solid core foundations in algorithmic problem solving, software system architecture, database design, and collaborative development."
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages used for coursework, algorithmic problem-solving, and system programming.",
    skills: [
      { name: "C", focus: "Pointers, memory management, file I/O & command-line tools" },
      { name: "C++", focus: "Standard Template Library (STL) & algorithm implementation" },
      { name: "Java", focus: "Object-Oriented Programming principles, classes & inheritance" },
      { name: "Python", focus: "Scripting, rapid problem solving & algorithmic logic" }
    ]
  },
  {
    category: "Web Development",
    description: "Modern frontend technologies used to build responsive, accessible web applications.",
    skills: [
      { name: "HTML5", focus: "Semantic markup & web accessibility standards" },
      { name: "CSS3", focus: "Responsive layout design, Flexbox & Grid systems" },
      { name: "JavaScript", focus: "ES6+ syntax, asynchronous programming & DOM APIs" },
      { name: "React", focus: "Component architecture, hooks, state management & props" },
      { name: "Vite", focus: "Modern frontend tooling, fast HMR & optimized bundling" },
      { name: "Tailwind CSS", focus: "Utility-first design, dark mode & responsive UI systems" }
    ]
  },
  {
    category: "Databases & Data Management",
    description: "Relational database concepts, schema design, and SQL querying.",
    skills: [
      { name: "MySQL", focus: "Relational schema design, SQL queries, joins & constraints" },
      { name: "DBMS", focus: "Normalization, ACID properties, transactions & ER modeling" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    description: "Essential toolchain for version control, collaboration, and modern software engineering.",
    skills: [
      { name: "Git", focus: "Branching, committing, merge conflicts & workflow hygiene" },
      { name: "GitHub", focus: "Remote repositories, PRs, issue tracking & code hosting" },
      { name: "GitHub CLI", focus: "Command-line repo management, clones & PR workflows" },
      { name: "VS Code", focus: "Primary IDE, workspace setup & extensions ecosystem" },
      { name: "GitLens", focus: "Code authorship inspection, git blame & commit history" },
      { name: "Live Share", focus: "Real-time collaborative pair programming & debugging" }
    ]
  }
];

export const projectsData = [
  {
    id: "line-editor-c",
    title: "Simple Line Editor in C",
    subtitle: "Command-Line Text Manipulation System",
    description: "A command-line line editor developed in C that allows users to create, view, insert, delete, and modify text lines using line-based operations.",
    details: [
      "Implemented dynamic line management using low-level pointers and structured memory allocation.",
      "Engineered command parsing for line-based operations: insert, delete, update, and display.",
      "Applied structured file handling routines in C to load and save edited buffers to disk."
    ],
    technologies: ["C", "Command Line", "Data Structures", "File Handling", "Pointers"],
    githubUrl: "https://github.com/prarthana08prarthu",
    githubLabel: "View on GitHub",
    featured: true,
    type: "Systems / CLI Project"
  },
  {
    id: "leetcode-solutions",
    title: "LeetCode Practice & Solutions",
    subtitle: "Algorithmic Problem Solving Repository",
    description: "A GitHub repository documenting programming practice and problem-solving progress through coding problems.",
    details: [
      "Structured problem solutions classified by topics: Arrays, Strings, Two Pointers, and Linked Lists.",
      "Focus on time and space complexity analysis (Big-O optimization) across multiple attempts.",
      "Clean, documented code with explanatory logic and edge case test handling."
    ],
    technologies: ["C++", "Java", "Python", "Data Structures", "Algorithms", "Problem Solving"],
    githubUrl: "https://github.com/prarthana08prarthu/leetcode-solutions",
    githubLabel: "View Repository",
    featured: true,
    type: "Competitive Programming & DSA"
  },
  {
    id: "portfolio-website",
    title: "Personal Developer Portfolio",
    subtitle: "Modern Component-Driven Web Showcase",
    description: "A responsive developer portfolio built using React, Vite, and Tailwind CSS to showcase projects, technical skills, learning progress, and GitHub work.",
    details: [
      "Engineered with modular React component architecture and state-managed light/dark themes.",
      "Styled with Tailwind CSS for mobile-first responsiveness, typography hierarchy, and accessible contrast.",
      "Includes structured sections for academic milestones, live GitHub integration, and contact workflows."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/prarthana08prarthu",
    githubLabel: "Source Code",
    liveUrl: "#",
    liveLabel: "Live Preview",
    featured: true,
    type: "Frontend Engineering"
  }
];

export const activitiesData = [
  {
    title: "Programming Artifact – C/C++",
    category: "Systems & Low-Level Code",
    description: "Developed structured programs and CLI artifacts in C and C++, focusing on memory allocation, pointer manipulation, and foundational algorithms.",
    skillsLearned: ["Memory Management", "Pointers", "File I/O", "CLI Design"],
    evidenceText: "Verified C projects and CLI implementation",
    evidenceLink: "https://github.com/prarthana08prarthu"
  },
  {
    title: "Git & GitHub Workflow Mastery",
    category: "Version Control",
    description: "Established daily version control discipline: commit hygiene, meaningful messages, branch workflows, and remote repository synchronization.",
    skillsLearned: ["Git CLI", "Branching", "Merge Resolution", "Repo Management"],
    evidenceText: "GitHub Profile @prarthana08prarthu",
    evidenceLink: "https://github.com/prarthana08prarthu"
  },
  {
    title: "GitLens & Live Share Collaboration",
    category: "Developer Tooling",
    description: "Leveraged advanced VS Code extensions for collaborative pair programming, real-time debugging, and deep inspection of Git history and blame annotations.",
    skillsLearned: ["Pair Programming", "Real-Time Debugging", "Code Inspection", "VS Code Tooling"],
    evidenceText: "Team collaboration practices"
  },
  {
    title: "LeetCode Practice & Problem Solving",
    category: "Algorithms & DSA",
    description: "Consistent problem solving on LeetCode to build strong algorithmic intuition in arrays, strings, recursion, and search techniques.",
    skillsLearned: ["Algorithmic Intuition", "Time Complexity", "Space Complexity", "Edge Case Analysis"],
    evidenceText: "leetcode-solutions Repository",
    evidenceLink: "https://github.com/prarthana08prarthu/leetcode-solutions"
  },
  {
    title: "Coding Profile Development",
    category: "Professional Presentation",
    description: "Cultivated a clean, transparent online developer presence with organized repositories, structured READMEs, and authentic technical documentation.",
    skillsLearned: ["Technical Documentation", "README Crafting", "Open Source Hygiene"],
    evidenceText: "github.com/prarthana08prarthu",
    evidenceLink: "https://github.com/prarthana08prarthu"
  },
  {
    title: "Hackathon Preparation",
    category: "Innovation & Problem Solving",
    description: "Collaborated on problem statements, ideated real-world software solutions, and practiced rapid architecture planning for competitive hackathons.",
    skillsLearned: ["Problem Analysis", "Rapid Prototyping", "Team Brainstorming", "Pitch Structuring"],
    evidenceText: "Hackathon Track & Solutions Planning"
  },
  {
    title: "Technical Portfolio Development",
    category: "Frontend Engineering",
    description: "Designed and implemented a production-grade developer portfolio in React, practicing clean component separation, Tailwind styling, and accessibility.",
    skillsLearned: ["React Architecture", "Tailwind CSS", "Responsive Design", "Accessibility"],
    evidenceText: "Portfolio codebase on GitHub",
    evidenceLink: "https://github.com/prarthana08prarthu"
  }
];

export const learningJourney = [
  {
    stage: "Core Foundation",
    title: "C & C++ Systems Programming",
    status: "Active Practice",
    statusColor: "emerald",
    description: "Deepening understanding of memory pointers, structs, command-line arguments, and algorithmic logic.",
    topics: ["Pointer Arithmetic", "Dynamic Memory Allocation", "Standard Template Library (STL)", "File Handling"]
  },
  {
    stage: "Algorithmic Growth",
    title: "Data Structures & Algorithms",
    status: "Active Focus",
    statusColor: "teal",
    description: "Practicing data structures and computational complexity through LeetCode and academic coursework.",
    topics: ["Arrays & Linked Lists", "Stacks & Queues", "Trees & Graphs", "Sorting & Searching Algorithms"]
  },
  {
    stage: "Data Systems",
    title: "Database Management Systems (DBMS)",
    status: "In Progress",
    statusColor: "blue",
    description: "Studying relational data modeling, relational algebra, SQL querying, normalization, and ACID properties.",
    topics: ["SQL Queries & Joins", "ER Modeling", "Normalization (1NF-BCNF)", "Transaction Management"]
  },
  {
    stage: "Object-Oriented Design",
    title: "Java OOP",
    status: "Core Semester Study",
    statusColor: "indigo",
    description: "Mastering object-oriented paradigms, class hierarchies, interfaces, and exception handling in Java.",
    topics: ["Encapsulation & Inheritance", "Polymorphism & Abstraction", "Java Collections Framework", "Exception Handling"]
  },
  {
    stage: "Versatility & Scripting",
    title: "Python Programming",
    status: "Continuous Learning",
    statusColor: "amber",
    description: "Building Python proficiency for rapid scripting, data manipulation, and algorithmic prototyping.",
    topics: ["Python Data Structures", "Comprehensions & Modules", "File Operations", "Script Automation"]
  },
  {
    stage: "Interactive Applications",
    title: "Modern Web Development",
    status: "Active Building",
    statusColor: "cyan",
    description: "Constructing modern responsive web user interfaces using React, Vite, and utility-first Tailwind CSS.",
    topics: ["React Hooks & Components", "State Management", "Tailwind CSS Layouts", "Responsive Mobile Design"]
  },
  {
    stage: "Future Roadmap",
    title: "Cloud Computing Fundamentals",
    status: "Upcoming Goal",
    statusColor: "violet",
    description: "Exploring cloud fundamentals, deployment pipelines, virtualized environments, and serverless concepts.",
    topics: ["Cloud Architecture Basics", "Containerization Concepts", "Deployment & Hosting", "API Integration"]
  }
];

export const achievementsData = [
  {
    type: "Participation",
    badge: "Hackathon",
    title: "Smart India Hackathon (SIH) Participation",
    organization: "REVA University / SIH",
    description: "Participated in internal university hackathon ideation and preliminary rounds for Smart India Hackathon, brainstorming technical solutions for real-world civic and technological challenges.",
    highlights: ["Problem statement analysis", "Team collaboration", "Solution architecture blueprint"]
  },
  {
    type: "Participation",
    badge: "Competitive Coding",
    title: "Collegiate Coding Contests & DSA Challenges",
    organization: "Computer Science & Engineering Department",
    description: "Actively engaged in department coding challenges and online algorithmic problem-solving contests to strengthen coding speed and debugging under time constraints.",
    highlights: ["Algorithmic logic testing", "Edge-case handling", "Language fluency in C++ & Java"]
  },
  {
    type: "Participation",
    badge: "Technical Activities",
    title: "Technical Workshops & Hands-on Lab Sessions",
    organization: "REVA University",
    description: "Attended technical workshops covering version control with Git, modern web technologies, and database architecture to complement academic curriculum.",
    highlights: ["Hands-on Git/GitHub training", "DBMS laboratory practicals", "Peer code reviews"]
  },
  {
    type: "Academic",
    badge: "Academics",
    title: "Continuous 3rd Semester BTech Academic Pursuit",
    organization: "REVA University, Bangalore",
    description: "Maintaining consistent academic progression across core Computer Science subjects including Data Structures, Object-Oriented Programming, and Discrete Mathematics.",
    highlights: ["Core CS foundation", "Theory & practical lab synergy", "Consistent lab evaluations"]
  }
];
