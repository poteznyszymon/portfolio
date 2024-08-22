"use client";

import { firstRowSkills, secondRowSkills, thirdRowSkills } from "@/lib/data";
import React, { useContext, useEffect } from "react";
import { fadeInAnimationsVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useSectionInView } from "@/lib/hooks";

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
      <InfiniteMovingCards
        items={firstRowSkills}
        direction="right"
        speed="fast"
      />
      <InfiniteMovingCards
        items={secondRowSkills}
        direction="left"
        speed="fast"
      />
    </div>
  );
};
