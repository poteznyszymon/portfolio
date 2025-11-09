"use client";

import { fadeInAnimationsVariants } from "@/lib/animations";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Project from "./Project";
import React from "react";
import { CircleAlert } from "lucide-react";

import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <div
      ref={ref}
      id="projects"
      className="w-full m-auto max-w-5xl mb-32 bg-transparent scroll-m-32 space-y-5"
    >
      <motion.h1
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center text-3xl mb-10"
      >
        My Projects
      </motion.h1>
      <motion.div
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex items-center gap-4 justify-center px-10 lg:px-20 "
      >
        <CircleAlert className="size-5 text-red-500 shrink-0" />
        <p className="text-muted-foreground">
          Projects are hosted on free-tier services. They may take a moment to
          wake up, but they're worth the wait!
        </p>
      </motion.div>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
