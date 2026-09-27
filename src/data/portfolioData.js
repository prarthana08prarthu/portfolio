export const personalInfo = {
  name: "Prarthana HS",
  role: "Computer Science Engineering Student & Aspiring Software Developer",
  university: "REVA University, Bangalore",
  program: "BTech Computer Science and Engineering",
  semester: "3rd Semester",
  location: "Bangalore, Karnataka, India",
  tagline: "Passionate about building practical software projects, solving programming problems, learning new technologies, and developing strong foundations in software engineering.",
  githubUsername: "prarthana08prarthu",
  githubUrl: "https://github.com/prarthana08prarthu",

  // Verified repository URLs
  helloWorldRepoUrl: "https://github.com/prarthana08prarthu/hello-world",
  leetcodeRepoUrl: "https://github.com/prarthana08prarthu/leetcode-solutions",
  lineEditorRepoUrl: "https://github.com/prarthana08prarthu/simple-line-editor",
  portfolioRepoUrl: "https://github.com/prarthana08prarthu/portfolio",
};

export const educationData = {
  institution: "REVA University, Bangalore",
  degree: "BTech in Computer Science and Engineering",
  currentSemester: "3rd Semester",
  location: "Bangalore, Karnataka, India",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java / C++)",
    "Database Management Systems (DBMS)",
    "Computer Organization & Architecture",
    "Discrete Mathematical Structures",
    "Operating Systems Fundamentals"
  ],
  academicFocus: "Developing core academic foundations in computational logic, data structures, relational databases, and collaborative software development."
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages studied and practiced for coursework and problem-solving.",
    skills: [
      { name: "C", focus: "Pointers, memory management, file I/O & command-line tools" },
      { name: "C++", focus: "Standard Template Library (STL) & algorithm implementation" },
      { name: "Java", focus: "Object-Oriented Programming principles, classes & inheritance" },
      { name: "Python", focus: "Scripting, problem solving & algorithmic logic" }
    ]
  },
  {
    category: "Web Development",
    description: "Frontend technologies practiced for responsive web applications.",
    skills: [
      { name: "HTML5", focus: "Semantic markup & web accessibility standards" },
      { name: "CSS3", focus: "Responsive layout design, Flexbox & Grid systems" },
      { name: "JavaScript", focus: "ES6+ syntax, asynchronous programming & DOM APIs" },
      { name: "React", focus: "Component architecture, hooks & state management" },
      { name: "Vite", focus: "Modern frontend tooling & fast bundling" },
      { name: "Tailwind CSS", focus: "Utility-first design & responsive UI styling" }
    ]
  },
  {
    category: "Databases & Data Management",
    description: "Relational database concepts and SQL fundamentals.",
    skills: [
      { name: "MySQL", focus: "Relational schema design, SQL queries & constraints" },
      { name: "DBMS", focus: "Normalization, ACID properties, transactions & ER modeling" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    description: "Essential toolchain used for version control, collaboration, and code editing.",
    skills: [
      { name: "Git", focus: "Branching, committing & version control workflow" },
      { name: "GitHub", focus: "Remote repositories, commits & code hosting" },
      { name: "GitHub CLI", focus: "Command-line repository and authentication workflow" },
      { name: "VS Code", focus: "Primary IDE & developer extensions ecosystem" },
      { name: "GitLens", focus: "Code authorship inspection & commit history in editor" },
      { name: "Live Share", focus: "Real-time collaborative pair programming in VS Code" }
    ]
  }
];

export const projectsData = [
  {
    id: "line-editor-c",
    title: "Simple Line Editor in C",
    subtitle: "Command-Line Line-Based Text Editor",
    description: "A command-line line editor developed in C that allows users to create, view, insert, delete, and modify text lines using line-based operations.",
    details: [
      "Create, view, insert, delete, and modify text lines using line-based operations.",
      "Implementation using C programming, pointers, and structured memory management.",
      "File handling routines to load text files and save edited text back to disk."
    ],
    technologies: ["C", "Command Line", "File I/O", "Pointers"],
    githubUrl: personalInfo.lineEditorRepoUrl,
    githubLabel: "View Simple Line Editor",
    type: "Systems / CLI Project"
  },
  {
    id: "leetcode-solutions",
    title: "LeetCode Practice & Solutions",
    subtitle: "Programming Practice & Problem Solving",
    description: "A GitHub repository documenting programming practice and problem-solving progress through coding problems.",
    details: [
      "Practice solutions organized by problem-solving topics.",
      "Written primarily using C++, Java, and Python.",
      "Focus on practicing fundamental data structures and algorithmic thinking."
    ],
    technologies: ["C++", "Java", "Python", "Problem Solving", "Data Structures"],
    githubUrl: personalInfo.leetcodeRepoUrl,
    githubLabel: "View LeetCode Repository",
    type: "Algorithms & DSA"
  },
  {
    id: "hello-world",
    title: "Hello World Repository",
    subtitle: "Foundational Git & GitHub Artifact",
    description: "An introductory repository used to establish Git version control workflow, initial commit practices, and GitHub profile setup.",
    details: [
      "Initial setup of Git repository and remote repository connection.",
      "Practiced basic Git commands: git init, add, commit, and push.",
      "Demonstrates foundational repository setup and documentation."
    ],
    technologies: ["Git", "GitHub", "Markdown"],
    githubUrl: personalInfo.helloWorldRepoUrl,
    githubLabel: "View Hello World Repository",
    type: "Course Artifact"
  },
  {
    id: "portfolio-website",
    title: "Personal Developer Portfolio",
    subtitle: "React & Tailwind CSS Course Portfolio",
    description: "A responsive student developer portfolio built using React, Vite, and Tailwind CSS to showcase course activities, technical skills, and GitHub repositories.",
    details: [
      "Built as a student course portfolio using React and Tailwind CSS.",
      "Structured using modular, reusable React components with dark/light themes.",
      "Showcases course activities, technical skills, and verified GitHub repositories."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    githubUrl: personalInfo.portfolioRepoUrl,
    githubLabel: "View Portfolio Repository",
    type: "Web Development"
  }
];

export const activitiesData = [
  {
    activityNumber: "Activity 1",
    title: "Programming Artifact / C-C++ Work",
    category: "Course Activity 1",
    description: "Developed foundational programming artifacts in C and C++, focusing on line editor implementation, pointers, memory allocation, and command-line operations.",
    skillsLearned: ["C / C++ Basics", "Pointers", "Memory Allocation", "Command-Line File I/O"],
    evidenceText: "View Simple Line Editor",
    evidenceLink: personalInfo.lineEditorRepoUrl,
    isExternal: true
  },
  {
    activityNumber: "Activity 2",
    title: "Git & GitHub Setup and Version Control",
    category: "Course Activity 2",
    description: "Configured Git and GitHub workflow, created foundational repositories including the Hello World repository, and practiced commits and repository management.",
    skillsLearned: ["Git CLI", "Repository Management", "Commit Practices", "GitHub Setup"],
    evidenceText: "View Hello World Repository",
    evidenceLink: personalInfo.helloWorldRepoUrl,
    isExternal: true
  },
  {
    activityNumber: "Activity 3",
    title: "GitLens & Live Share Collaboration",
    category: "Course Activity 3",
    description: "Utilized VS Code extensions including GitLens for exploring commit history and authorship, and Live Share for collaborative pair programming and real-time code review.",
    skillsLearned: ["GitLens Inspection", "Live Share Collaboration", "Pair Programming", "VS Code Workflow"],
    evidenceText: "VS Code Tooling & Peer Review Practice",
    evidenceLink: null
  },
  {
    activityNumber: "Activity 4",
    title: "LeetCode Practice & Portfolio Integration",
    category: "Course Activity 4",
    description: "Consistent problem solving on LeetCode documented through a dedicated GitHub repository, and integrated into this personal portfolio for course evaluation.",
    skillsLearned: ["Problem Solving", "Algorithmic Practice", "GitHub Repository Integration", "Portfolio Documentation"],
    evidenceText: "View LeetCode Repository",
    evidenceLink: personalInfo.leetcodeRepoUrl,
    isExternal: true
  }
];

export const learningJourney = [
  {
    stage: "Core Foundation",
    title: "C & C++ Programming",
    status: "Active Study",
    description: "Understanding pointers, structs, command-line arguments, and algorithmic logic.",
    topics: ["Pointers & Memory", "Standard Template Library (STL)", "File Handling", "Algorithm Implementation"]
  },
  {
    stage: "Algorithmic Growth",
    title: "Data Structures & Algorithms",
    status: "Active Practice",
    description: "Practicing data structures and computational complexity through LeetCode practice and academic coursework.",
    topics: ["Arrays & Linked Lists", "Stacks & Queues", "Trees & Graphs", "Sorting & Searching"]
  },
  {
    stage: "Data Systems",
    title: "Database Management Systems (DBMS)",
    status: "Semester Coursework",
    description: "Studying relational data modeling, relational algebra, SQL querying, normalization, and ACID properties.",
    topics: ["SQL Queries & Joins", "ER Modeling", "Normalization", "Transaction Management"]
  },
  {
    stage: "Object-Oriented Design",
    title: "Java OOP",
    status: "Semester Coursework",
    description: "Studying object-oriented paradigms, classes, inheritance, interfaces, and exception handling in Java.",
    topics: ["Encapsulation & Inheritance", "Polymorphism & Abstraction", "Java Collections", "Exception Handling"]
  },
  {
    stage: "Scripting & Fundamentals",
    title: "Python Programming",
    status: "Learning & Practice",
    description: "Building Python proficiency for rapid scripting and algorithmic problem solving.",
    topics: ["Python Data Structures", "Functions & Modules", "File Operations", "Problem Solving"]
  },
  {
    stage: "Interactive Web",
    title: "Web Development",
    status: "Active Practice",
    description: "Constructing responsive web user interfaces using React, Vite, and utility-first Tailwind CSS.",
    topics: ["React Components & Hooks", "State Management", "Tailwind CSS Layouts", "Responsive Design"]
  }
];

export const achievementsData = [
  {
    type: "Participation",
    badge: "Hackathon",
    title: "Smart India Hackathon (SIH) – Internal Ideation & Participation",
    organization: "REVA University",
    description: "Participated in internal university-level ideation and preliminary preparation rounds for Smart India Hackathon, exploring software problem statements and team brainstorming.",
    highlights: ["Problem statement analysis", "Team brainstorming", "Initial solution ideation"]
  },
  {
    type: "Participation",
    badge: "Academic & Technical",
    title: "Departmental Technical Workshops & Lab Practical Sessions",
    organization: "REVA University",
    description: "Participated in university lab practicals and technical workshops covering programming foundations, Git, and database concepts.",
    highlights: ["Hands-on Git/GitHub training", "DBMS laboratory practicals", "Peer code reviews"]
  },
  {
    type: "Academic",
    badge: "Academics",
    title: "Continuous 3rd Semester BTech Academic Pursuit",
    organization: "REVA University, Bangalore",
    description: "Maintaining consistent academic progression across core Computer Science subjects including Data Structures, Object-Oriented Programming, and DBMS.",
    highlights: ["Core CS foundation", "Theory & practical lab synergy", "Regular lab practicals"]
  }
];
