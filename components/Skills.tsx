"use client";

import React, { useContext, useEffect } from "react";
import { fadeInAnimationsVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skills } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <div
      ref={ref}
      id="skills"
      className=" mx-auto w-full max-w-5xl mb-20 sm:my-32  scroll-m-56 "
    >
      <motion.h1
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center text-3xl mb-10"
      >
        My Skills
      </motion.h1>
      <ul className="flex flex-wrap gap-3 max-w-3xl mx-auto px-10 md:px-0">
        {skills.map((skill, index) => (
          <motion.li
            className="px-5 py-3 bg-white border border-black/5 rounded-md shadow-sm"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
