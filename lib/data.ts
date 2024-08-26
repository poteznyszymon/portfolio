import chatGPTClone from "@/public/chatgpt-clone.png";
import twitterClone from "@/public/twitter-clone.png";
import placeholder from "@/public/placeholder.png";

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
    title: "Chat AI",
    description:
      "Fullstack ai-chat app that allows users to store multiple chats that are stored in mongo database.",
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
  {
    title: "In progress...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare leo in odio ultricies pulvinar. Maecenas magna ante, bibendum sed pellentesque",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind", "Rest API"],
    imageUrl: placeholder,
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "tanstack query",
  "Next.js",
  "Tailwindcss",
  "MongoDB",
  "PostgressSQL",
  "Prisma",
  "Node.js",
  "Express.js",
  "Postman",
  "Vscode",
];
