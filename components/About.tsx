"use client";

import { fadeInAnimationsVariants } from "@/lib/animations";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <div
      ref={ref}
      id="about"
      className="w-full m-auto max-w-5xl mb-48 bg-transparent gap-5 px-10 lg:px-20 scroll-m-60"
    >
      <motion.h1
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center text-3xl mb-10"
      >
        About me
      </motion.h1>
      <motion.p
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-lg"
      >
        I am computer science student at UMK in Toruń, Poland, in the meantime
        I&apos;m self-taught{" "}
        <span className="font-semibold">fullstack web developer</span>. My main
        tech stack is{" "}
        <span className="font-semibold">
          React, Node.js, Express.js, Mongodb
        </span>
        . I am also familiar with <span className="font-semibold">Next.js</span>{" "}
        and <span className="font-semibold">Typescript</span>, I am always open
        to learn new technologies. Apart from coding, I enjoy lifting at gym and
        swimming.
      </motion.p>
    </div>
  );
};

export default About;
