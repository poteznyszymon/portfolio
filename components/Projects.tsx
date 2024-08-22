"use client";

import { fadeInAnimationsVariants } from "@/lib/animations";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Project from "./Project";
import React from "react";

import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <div
      ref={ref}
      id="projects"
      className="w-full m-auto max-w-5xl mb-32  bg-transparent scroll-m-32"
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
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
