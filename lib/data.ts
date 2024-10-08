import chatGPTClone from "@/public/chatgpt-clone.png";
import pingpost from "@/public/pingpost.png";
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
    link: "https://github.com/poteznyszymon/fullstack-chatgpt-clone",
    title: "Chat AI",
    description:
      "Fullstack ai-chat app that allows users to ask questions with ai bot and store multiple chats.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind", "Rest API"],
    imageUrl: chatGPTClone,
  },
  {
    link: "https://pingpost-fullstack.onrender.com/",
    title: "Pingpost",
    description:
      "Fullstack social media app made with mern tech stack that allows users to create posts, like and comment and much more.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "JWT",
      "MongoDB",
      "Tailwind",
      "Tanstack Query",
    ],
    imageUrl: pingpost,
  },
  {
    link: "",
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
  "Tanstack query",
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
