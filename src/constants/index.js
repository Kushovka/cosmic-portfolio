const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Three.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const projects = [
  {
    id: 1,
    title: "3D Developer Portfolio",
    description:
      "A beautiful 3D Portfolio app using React,Tailwind and Three.js.",
    image: "images/project_1.png",
    tags: ["React", "TailwindCSS", "Three,js"],
    demoUrl: "https://kushovka.github.io/portfolio-3d/",
    githubUrl: "https://github.com/Kushovka/portfolio-3d",
  },
  {
    id: 2,
    title: "Russian Stritvir SSAIRWEB",
    description:
      "SSAIRWEB is a clone of a Russian streetwear website built with pure HTML and CSS.",
    image: "images/project_2.png",
    tags: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://kushovka.github.io/SSAIRWEB/index.html",
    githubUrl: "https://github.com/Kushovka/SSAIRWEB",
  },
  {
    id: 3,
    title: "movies.hd Website",
    description:
      "An online movie theater for watching films and TV shows in Full HD with convenient navigation and content filtering.",
    image: "images/project_3.png",
    tags: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://kushovka.github.io/movies.hd/#",
    githubUrl: "https://github.com/Kushovka/movies.hd",
  },
];

export { navItems, skills, categories, projects };
