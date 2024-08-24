"use client";

import { motion } from "framer-motion";

interface SkillProps {
  text: string;
  index: number;
}

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

const Skill: React.FC<SkillProps> = ({ text, index }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="px-5 py-3 bg-white border border-black/5 rounded-md hover:scale-105 transition duration-500 shadow-sm"
    >
      {text}
    </motion.div>
  );
};

export default Skill;
