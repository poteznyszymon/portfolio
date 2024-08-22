import placeholder from "@/public/placeholder.png";
import chatGPTClone from "@/public/chatgpt-clone.png";
import twitterClone from "@/public/twitter-clone.png";

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
] as const;

export const projectsData = [
  {
    title: "ChatGPT Clone",
    description:
      "Fullstack chatgpt clone that allows users to store multiple chats that are stored in mongo database.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind", "Rest API"],
    imageUrl: chatGPTClone,
  },
  {
    title: "Twitter Clone",
    description:
      "Fullstack twitter clone made with jwt auth and mern tech stack. Tanstack query allows infinity posts loading while scrolling.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "JWT",
      "MongoDB",
      "Tailwind",
      "tanstack Query",
    ],
    imageUrl: twitterClone,
  },
];

export const firstRowSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tanstack query",
  "Tailwindcss",
];

export const secondRowSkills = [
  "Next.js",
  "MongoDB",
  "Express.js",
  "Node.js",
  "PostgressSQL",
  "Vscode",
];

export const thirdRowSkills = [];
