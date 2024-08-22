"use client";

import { motion } from "framer-motion";

interface SkillProps {
  text: string;
}

const Skill: React.FC<SkillProps> = ({ text }) => {
  return (
    <motion.div className="px-5 py-3 bg-white border border-black/5 rounded-md">
      {text}
    </motion.div>
  );
};

export default Skill;
