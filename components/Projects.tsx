"use client";

import { fadeInAnimationsVariants } from "@/lib/animations";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Project from "./Project";
import React from "react";

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
        className="bg-gray-100 mx-10 md:mx-auto max-w-2xl  p-5 rounded-lg border-black/5 border"
      >
        <p className="text-center text-lg">test account for projects</p>
        <div>
          <p>
            username: <span className="font-semibold">demo</span>
          </p>
          <p>
            password: <span className="font-semibold">demo123</span>
          </p>
        </div>
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
