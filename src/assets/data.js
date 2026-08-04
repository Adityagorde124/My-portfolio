import { ADITYA_PHOTO } from './profilePhoto.js';

export const PERSONAL_INFO = {
  name: "Aditya Suresh Gorde",
  shortName: "Aditya Gorde",
  dob: "05 April 2004",
  nationality: "Indian",
  titleRoles: [
    "Full Stack ERP Developer",
    "M.Sc. Computer Science Scholar",
    "React & Next.js Specialist",
    "3D Spatial Web Architect"
  ],
  summary: "Passionate Full Stack Developer and M.Sc. Computer Science student with hands-on experience in developing enterprise-level web applications using modern technologies. Skilled in designing scalable backend APIs, responsive frontend interfaces, database management, authentication systems, and role-based access control. Experienced in working on ERP/CRM applications and interested in building secure, real-world software solutions.",
  bio: "Full-Stack Web Developer & M.Sc. Computer Science student specializing in building scalable enterprise ERP systems, secure REST APIs, and immersive 3D spatial web applications with React, Next.js, Node.js, and Prisma/MySQL.",
  email: "adityagorde72@gmail.com",
  phone: "+91 7757968481",
  location: "Akole / Sangamner, Maharashtra, India",
  freelance: "Available for Hire / Full-time",
  profileImg: ADITYA_PHOTO || "/profile.jpg",
  fallbackAvatar: ADITYA_PHOTO || "/profile.jpg",
  socials: {
    github: "https://github.com/Adityagorde124",
    linkedin: "https://www.linkedin.com/in/aditya-gorde-1b002a34b",
    instagram: "https://www.instagram.com/aditya.gorde.108",
    whatsapp: "https://wa.me/917757968481"
  },
  careerObjective: "To work as a Full Stack Developer in a growth-oriented organization where I can apply my technical skills, contribute to impactful software solutions, and continuously enhance my knowledge in modern web development and scalable application architecture."
};

export const EDUCATION = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Sangamner College, Sangamner",
    university: "Savitribai Phule Pune University (SPPU)",
    status: "Currently in 3rd Semester",
    year: "2025 — Present",
    badge: "Master's Degree"
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Agasti Arts, Commerce & Dadasaheb Rupwate Science College, Akole",
    university: "Savitribai Phule Pune University (SPPU)",
    status: "Graduated",
    year: "Completed 2025",
    badge: "Bachelor's Degree"
  }
];

export const STATS = [
  { label: "ERP & Web Projects", value: "15+" },
  { label: "Backend API Endpoints", value: "50+" },
  { label: "Tech Stack Tools", value: "15+" },
  { label: "3D Render Speed", value: "60 FPS" }
];

export const SKILL_CATEGORIES = {
  languages: [
    { name: "JavaScript (ES6+)", level: 96, category: "Languages", icon: "FileCode" },
    { name: "TypeScript", level: 88, category: "Languages", icon: "Code2" },
    { name: "C#", level: 82, category: "Languages", icon: "Terminal" },
    { name: "SQL", level: 90, category: "Languages", icon: "Database" },
    { name: "HTML5 / CSS3", level: 98, category: "Languages", icon: "Layout" }
  ],
  frontend: [
    { name: "React.js", level: 95, category: "Frontend", icon: "Code2" },
    { name: "Next.js", level: 92, category: "Frontend", icon: "Layers" },
    { name: "Tailwind CSS", level: 96, category: "Frontend", icon: "Palette" },
    { name: "Three.js / @react-three/fiber", level: 85, category: "Frontend", icon: "Box" },
    { name: "Redux Toolkit", level: 88, category: "Frontend", icon: "Zap" },
    { name: "React Query & TanStack", level: 86, category: "Frontend", icon: "Sparkles" },
    { name: "Recharts & Data Viz", level: 84, category: "Frontend", icon: "BarChart" }
  ],
  backend: [
    { name: "Node.js", level: 90, category: "Backend", icon: "Server" },
    { name: "Express.js", level: 90, category: "Backend", icon: "Cpu" },
    { name: "REST API Architecture", level: 94, category: "Backend", icon: "Network" },
    { name: "JWT & Role-Based Auth (RBAC)", level: 92, category: "Backend", icon: "Lock" },
    { name: "Bcrypt & Nodemailer OTP", level: 90, category: "Backend", icon: "Key" }
  ],
  database: [
    { name: "MySQL", level: 92, category: "Database", icon: "Database" },
    { name: "Prisma ORM", level: 90, category: "Database", icon: "Layers" },
    { name: "MongoDB (Learning)", level: 80, category: "Database", icon: "Database" }
  ],
  tools: [
    { name: "Git & GitHub", level: 92, category: "Tools", icon: "GitBranch" },
    { name: "Postman API Testing", level: 90, category: "Tools", icon: "Terminal" },
    { name: "MySQL Workbench & Prisma Studio", level: 88, category: "Tools", icon: "Database" },
    { name: "Vite / Webpack / npm", level: 90, category: "Tools", icon: "Zap" }
  ]
};

export const PROJECTS = [
  {
    id: "ultra-smart-abacus-erp",
    title: "Ultra Smart Abacus Enterprise ERP",
    description: "Complete production ERP system developed for Smart Abacus centers. Features multi-role authentication (Admin, Franchise, Teacher, Student), Attendance Management with filters & reports, Salary Calculation with pay slips, Inventory Stock Tracking with low-stock alerts & CSV exports, Notification System with red-dot indicators, and Referral tracking.",
    tags: ["Next.js", "React", "Node.js", "Express.js", "Prisma ORM", "MySQL", "Tailwind CSS", "Redux Toolkit"],
    category: "ERP & Enterprise",
    github: "https://github.com/Adityagorde124",
    live: "https://adityagorde124.github.io/My-portfolio/",
    featured: true,
    accent: "#00f2fe",
    badge: "Enterprise ERP System",
    modules: [
      "JWT & OTP Authentication", "Admin & Franchise Dashboard", "Teacher & Student Management",
      "Attendance & Historical Reports", "Salary Slip & Bonus Engine", "Inventory Stock & Low-Stock Alerts",
      "Per-User Read Notification System", "CSV Export & Analytics"
    ]
  },
  {
    id: "exam-pro",
    title: "ExamPro – Secure LAN Examination System",
    description: "Secure college examination platform engineered for LAN environments. Features student authentication, live exam monitoring, automatic test evaluation, anti-cheating mechanisms, faculty and student dashboards, and real-time results powered by Socket.IO and MERN stack.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "JWT Auth", "Tailwind CSS"],
    category: "Full Stack & MERN",
    github: "https://github.com/Adityagorde124",
    live: "https://adityagorde124.github.io/My-portfolio/",
    featured: true,
    accent: "#f72585",
    badge: "Real-Time LAN Exam Engine",
    modules: [
      "Secure Student Login", "Live Exam Monitoring", "Automatic Test Evaluation",
      "Anti-Cheating Mechanisms", "Socket.IO Real-Time Engine", "Faculty & Student Analytics"
    ]
  },
  {
    id: "spatial-portfolio",
    title: "3D Spatial Depth Portfolio",
    description: "Production-ready frosted glass personal portfolio featuring a real-time 3D WebGL interactive background, mouse parallax tilt physics, spark particle bursts, animated skill matrix, and responsive glassmorphism aesthetics.",
    tags: ["React", "Three.js", "R3F", "Tailwind CSS", "Framer Motion"],
    category: "3D & Web",
    github: "https://github.com/Adityagorde124/My-portfolio",
    live: "https://adityagorde124.github.io/My-portfolio/",
    featured: true,
    accent: "#4facfe",
    badge: "Interactive 3D WebGL",
    modules: [
      "3D Glass Floating Scene", "Mouse Parallax Tilt Card", "Interactive Spark Particles",
      "Frosted Glass Design System"
    ]
  },
  {
    id: "responsive-webtask",
    title: "Responsive Web Task Suite",
    description: "Modern task management and workflow web application built with Next.js, React, and Tailwind CSS. Features dark glass aesthetics, dynamic filtering, and optimized state management.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    category: "Full Stack & MERN",
    github: "https://github.com/Adityagorde124/webtask.github.io.git",
    live: "https://adityagorde124.github.io/webtask.github.io/",
    featured: false,
    accent: "#38ef7d",
    badge: "Web App",
    modules: ["Task Workflow", "Responsive Glass UI", "State Optimization"]
  },
  {
    id: "weather-matrix",
    title: "Real-Time Weather Forecast Dashboard",
    description: "Interactive weather application delivering live climate data, temperature trends, location lookup, and 7-day forecast analytics.",
    tags: ["JavaScript", "OpenWeather API", "CSS3", "Async JS"],
    category: "Web Apps",
    github: "https://github.com/Adityagorde124",
    live: "https://adityagorde124.github.io/My-portfolio/",
    featured: false,
    accent: "#7928ca",
    badge: "API Integration",
    modules: ["Geolocation Lookup", "Live Weather API", "Async Data Stream"]
  }
];

export const EXPERIENCE_DETAILS = [
  {
    role: "Full Stack Developer (Internship / Project Lead)",
    company: "Smart Abacus Enterprise ERP",
    period: "2024 — Present",
    location: "Maharashtra, India",
    responsibilities: [
      "Engineered backend RESTful APIs using Node.js, Express.js, and Prisma ORM with MySQL database.",
      "Architected secure authentication using JWT, Bcrypt password hashing, email verification, and OTP password recovery via Nodemailer.",
      "Designed Role-Based Access Control (RBAC) across Admin, Franchise, Teacher, and Student roles.",
      "Built responsive frontend dashboards in Next.js, React, Redux Toolkit, and Tailwind CSS.",
      "Developed Attendance, Salary Management with salary slip generation, and Inventory Stock tracking with low-stock alerts.",
      "Integrated per-user read tracking notification system with red-dot indicators and CSV data export capabilities."
    ]
  }
];

export const TIMELINE = [
  {
    year: "2025 — Present",
    role: "M.Sc. Computer Science (Semester III)",
    company: "Sangamner College (SPPU University)",
    description: "Specializing in Advanced Software Engineering, Cloud Computing, Database Architecture, and Enterprise Application Design."
  },
  {
    year: "2024 — Present",
    role: "Full Stack ERP Developer",
    company: "Ultra Smart Abacus Enterprise ERP",
    description: "Architected complete multi-tenant ERP platform with Next.js, Node.js, Prisma ORM, MySQL, JWT authentication, and salary/attendance engines."
  },
  {
    year: "Completed 2025",
    role: "B.Sc. Computer Science (Graduated)",
    company: "Agasti Arts, Commerce & Science College, Akole (SPPU)",
    description: "Graduated with strong foundation in Data Structures, Algorithms, Object-Oriented Programming, SQL Database Management, and Web Technologies."
  }
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Team Collaboration",
  "Quick Learning",
  "Time Management",
  "Communication",
  "Analytical Thinking",
  "Adaptability"
];

export const LANGUAGES_KNOWN = [
  { language: "English", level: "Professional" },
  { language: "Hindi", level: "Native / Fluent" },
  { language: "Marathi", level: "Native" }
];
