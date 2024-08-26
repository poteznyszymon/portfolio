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
      className=" mx-auto w-full max-w-5xl mb-20 sm:my-32  scroll-m-56 relative"
    >
      <div className="-z-10 bg-main-purple w-36 h-36 md:w-52 md:h-52 rounded-full absolute left-[20%] top-1/2 blur-[5rem] md:blur-[8rem]" />
      <div className="-z-10 bg-main-orange w-36 h-32 md:w-64 md:h-64 rounded-full absolute left-1/2 top-1/4 blur-[7rem] md:blur-[10rem]" />

      <motion.h1
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center text-3xl mb-10"
      >
        My Skills
      </motion.h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto px-10 md:px-0">
        {skills.map((skill, index) => (
          <motion.li
            className="px-5 py-3 bg-white bg-opacity-80 backdrop-blur-[0.5rem] border text-center border-black/5 rounded-md shadow-sm"
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
