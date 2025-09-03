// Tech badge configuration with colors and icons
export const techConfig: Record<
  string,
  { color: string; bgColor: string; icon: string }
> = {
  React: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #A5F3FC, #1baed6ff)",
    icon: "⚛️",
  },
  "Next.js": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #6d6b6bff, #160808ff)",
    icon: "⚡",
  },
  Supabase: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #53f0a7ca, #20be72ff)",
    icon: "🚀",
  },
  TypeScript: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #4A90E2, #2D5BAE)",
    icon: "📘",
  },
  RLS: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #6B7280, #374151)",
    icon: "🔒",
  },
  Vite: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #8B5FFF, #5B3FBF)",
    icon: "⚡",
  },
  "Node.js": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #95eeb7ff, #2F855A)",
    icon: "🟢",
  },
  Prisma: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #4A5568, #1A202C)",
    icon: "🔺",
  },
  SQLite: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #5871c5ff, #003B57)",
    icon: "🗄️",
  },
  "Chart.js": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #FF8A80, #E91E63)",
    icon: "📊",
  },
  CSS3: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    icon: "🎨",
  },
  "REST API": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #FF7043, #D84315)",
    icon: "🌐",
  },
  "styled-components": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #F48FB1, #C2185B)",
    icon: "💅",
  },
  HTML5: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #FF6B35, #DC2626)",
    icon: "📄",
  },
  JavaScript: {
    color: "#000000",
    bgColor: "linear-gradient(135deg, #FDE047, #EAB308)",
    icon: "⚡",
  },
  Bootstrap: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #A855F7, #7C3AED)",
    icon: "🅱️",
  },
  Vercel: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #404040, #000000)",
    icon: "▲",
  },
  "Mongo DB": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #68D391, #2F855A)",
    icon: "🍃",
  },
  Recharts: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #A78BFA, #7C3AED)",
    icon: "📈",
  },
  Axios: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #bba3e4ff, #955deaff)",
    icon: "⛓️",
  },
  Firebase: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #FBBF24, #F59E0B)",
    icon: "🔥",
  },
  "Tailwind CSS": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #22D3EE, #0891B2)",
    icon: "🎨",
  },
  "Daisy UI": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    icon: "🌼",
  },
  "Material UI": {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    icon: "🎨",
  },
  PostgreSQL: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #60A5FA, #2563EB)",
    icon: "🐘",
  },
  Express: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #4B5563, #111827)",
    icon: "🚄",
  },
  MongoDB: {
    color: "#ffffff",
    bgColor: "linear-gradient(135deg, #68D391, #2F855A)",
    icon: "🍃",
  },
};

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planned";
  githubUrl?: string;
  demoUrl?: string;
  screenshotUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 0,
    title: "Milestone Monitor",
    description: "Achievement tracking system for university use",
    longDescription:
      "Next.js 15.3 application with Supabase backend featuring a three-tier role system (Faculty → Editor → HOD), complex achievement tracking with approval workflows, and export functionality for CSV, Excel, and PDF formats.",
    technologies: [
      "React",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "styled-components",
      "Chart.js",
      "TypeScript",
      "RLS",
      "Vercel",
    ],
    status: "completed",
    githubUrl: "https://github.com/adelicia-js/milestone-monitor",
    demoUrl: "https://milestone-monitor.vercel.app/",
    screenshotUrl: "/screenshots/milestone-monitor.webp",
  },
  {
    id: 1,
    title: "My Todo Notebook",
    description: "Modern todo app  with auth & a notebook-style UI",
    longDescription:
      "A todo application built with React 19, TypeScript, and Node.js. Features secure JWT authentication, inline editing, smart pagination, beautiful notebook-style UI with spiral binding, and real-time CRUD operations with SQLite database.",
    technologies: [
      "React",
      "Vite",
      "Prisma",
      "Express",
      "SQLite",
      "Node.js",
      "styled-components",
      "TypeScript",
      "Vercel",
    ],
    status: "completed",
    githubUrl: "https://github.com/adelicia-js/todo-vite-fs",
    demoUrl: "https://todo-vite-fs.vercel.app/",
    screenshotUrl: "/screenshots/todo-app.webp",
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    description: "Expenses tracking with data visualization",
    longDescription:
      "A full-stack personal finance application built with React 19, Node.js, and MongoDB. Features secure JWT authentication, transaction management, beautiful Recharts data visualizations, and responsive design for tracking income, expenses, and financial insights.",
    technologies: [
      "React",
      "Vite",
      "MongoDB",
      "Express",
      "Recharts",
      "Node.js",
      "styled-components",
      "TypeScript",
      "Vercel",
    ],
    status: "completed",
    githubUrl: "https://github.com/adelicia-js/personal-finance-tracker",
    demoUrl: "https://personal-finance-tracker-eta-topaz.vercel.app/",
    screenshotUrl: "/screenshots/finance-tracker.webp",
  },
  {
    id: 3,
    title: "Country Explorer",
    description: "Simple country explorer with weather data",
    longDescription:
      "A modern, responsive application for exploring countries worldwide with smart search, detailed country information including capitals and languages, live weather data for capitals via OpenWeatherMap API, and beautiful glassmorphism design with smooth animations.",
    technologies: [
      "React",
      "Vite",
      "Axios",
      "REST API",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    status: "completed",
    githubUrl: "https://github.com/adelicia-js/country_info",
    demoUrl: "https://country-info-six-sigma.vercel.app/",
    screenshotUrl: "/screenshots/country-info.webp",
  },
  {
    id: 4,
    title: "Syntaxia 2023",
    description: "Technical symposium event management platform",
    longDescription:
      "Official website for Syntaxia 2023 programming competition and tech fest. Features interactive timeline for multi-day events, detailed competition modals, responsive Bootstrap design, and comprehensive event information for both undergraduate and postgraduate competitions.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Firebase"],
    status: "completed",
    githubUrl: "https://github.com/adelicia-js/syntaxia2023",
    demoUrl: "https://syntaxia2023.vercel.app/",
    screenshotUrl: "/screenshots/syntaxia-2023.webp",
  },
  {
    id: 5,
    title: "Loyola College Website",
    description: "Modern institutional website built with Next.js",
    longDescription:
      "A collaborative university project for Loyola College built with Next.js 13 and Tailwind CSS. Features component-based architecture, Material-UI integration, DaisyUI components, responsive design, and modern performance optimizations.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Daisy UI",
      "Material UI",
      "Vercel",
    ],
    status: "completed",
    githubUrl: "https://github.com/adelicia-js/LoyolaWebsite",
    demoUrl: "https://loyola-website.vercel.app/",
    screenshotUrl: "/screenshots/loyola-website.webp",
  },
];
