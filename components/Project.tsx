"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-5 sm:mb-8 last:mb-0 "
    >
      <a
        href="https://github.com/poteznyszymon?tab=repositories"
        target="_blank"
      >
        <section className="group max-w-2xl relative rounded-lg sm:h-[20rem] border-black/5 border bg-gray-100 mx-10 md:mx-auto overflow-hidden">
          <div className="flex flex-col sm:max-w-[50%] h-full pt-8 sm:pt-4 px-5 pb-8 sm:pb-7">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

            <ul className="flex gap-2 flex-wrap sm:mt-auto pt-4 sm:pt-0">
              {tags.map((tag) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-xs uppercase text-white rounded-full hover:scale-105 transition-all duration-500"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            className="absolute object-contain hidden sm:block h-full w-full top-8 -right-[23rem] rounded-t-lg shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-[-3deg]"
            src={imageUrl}
            alt="project image"
            quality={100}
          />
        </section>
      </a>
    </motion.div>
  );
};

export default Project;
