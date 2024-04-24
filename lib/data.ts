import RemoveBg from "../public/images/projects/removebg.jpg";
import Countries from "../public/images/projects/cover-rest.png";
import DLK from "../public/images/projects/dlk.png";
import FlopyBoard from "../public/images/projects/flopy-board.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "DLK Digital Agency",
    description:
      "Site web d'une agence de création de site web, design et marketing digital. Créer avec Next.js et Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: DLK,
    url: "https://www.dlkdigitalagency.com/",
    code: "https://github.com/Matteo-CB/DLK_Portfolio",
  },
  {
    title: "Jeu en ligne Fullstack",
    description:
      "Clone du jeu Flappy bird, créer avec Next.js et Node.js. Il y a un classement des meilleurs joueurs.",
    tags: ["Next.js", "Node.js", "TypeScript", "MongoDB"],
    imageUrl: FlopyBoard,
    url: "https://flopy-board.vercel.app/",
    code: "https://github.com/Matteo-CB/clone-flappy-bird",
  },
  {
    title: "Remove Background",
    description:
      "Une Application créer avec Next.js et Tailwind CSS, qui permet de supprimer l'arrière plan d'une image.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: RemoveBg,
    url: "https://removebackground-dlkdigitalagency.vercel.app/",
    code: "https://github.com/Matteo-CB/Remove-bg-app",
  },
  {
    title: "App Pays",
    description:
      "Application affichant les données des pays du monde, possibilité de rechercher un pays, de voir les détails et un mode sombre.",
    tags: ["React", "API", "Sass", "Redux-Toolkit"],
    imageUrl: Countries,
    url: "https://app-countries-rho.vercel.app",
    code: "https://github.com/Matteo-CB/app-countries",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Sass/Scss",
  "npm",
  // "pnpm",
  // "Postman",
  // "Agile",
  // "Kanban",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  // "Redux-Toolkit",
  // "Express",
  // "PHP",
  // "MySQL",
  // "Python",
  "Framer Motion",
] as const;
