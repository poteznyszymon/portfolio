"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { useSectionInView } from "@/lib/hooks";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { ref } = useSectionInView("Home");
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDownloadMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main ref={ref} id="home" className="relative h-screen flex ">
      <div className="-z-10 bg-main-orange w-36 h-36 md:w-64 md:h-64 rounded-full absolute left-1/3 top-1/4 blur-[7rem] md:blur-[10rem]" />
      <div className="-z-10 bg-main-purple w-36 h-36 md:w-64 md:h-64 rounded-full absolute left-[20%] top-1/2 blur-[5rem] md:blur-[8rem]" />
      <div className="w-full m-auto max-w-5xl h-full flex md:justify-between justify-center  items-center px-10 lg:px-6 xl:px-0 ">
        <motion.div
          className="flex flex-col"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
        >
          <p className="text-4xl md:text-5xl md:h-14 lg:text-6xl h-11 lg:h-[4.3rem] font-bold tracking-tighter bg-gradient-to-r from-main-purple to-main-orange  text-transparent bg-clip-text">
            Szymon Fularczyk
          </p>
          <p className="text-2xl lg:text-4xl font-semibold">
            Fullstack developer,
          </p>
          <p className="text-lg md:text-xl">
            based in Gdańsk, <span className="font-semibold">Poland.</span>
          </p>
          <div className="flex flex-col md:flex-row  mt-5 xl:gap-3 lg:gap-2 md:gap-1 gap-3">
            <a
              href="mailto:szymonfularczyk@o2.pl"
              className="bg-main-font md:hover:scale-105 hover:scale-[102%] transition-all duration-500 hover:bg-opacity-85 text-white text-sm px-4 py-3 sm:py-2 rounded-full justify-between md:justify-between flex items-center gap-2"
            >
              <p>Contact me here</p>
              <FaArrowRightLong />
            </a>
            <div
              ref={menuRef}
              className="relative"
              onClick={() => setIsDownloadMenuOpen(!isDownloadMenuOpen)}
            >
              <button className="bg-main-font w-full md:hover:scale-105 hover:scale-[102%] transition-all duration-500 hover:bg-opacity-85 text-sm text-white px-4 py-3 sm:py-2 rounded-full justify-between md:justify-between flex items-center gap-1">
                <p>Download CV</p>
                <LiaDownloadSolid size={18} />
              </button>
              <AnimatePresence>
                {isDownloadMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsDownloadMenuOpen(false)}
                    className="absolute top-full left-1/2 mt-2 -translate-x-1/2 w-32 p-1 gap-1 bg-slate-100 rounded-md shadow-sm flex flex-col z-50"
                  >
                    <a
                      target="_blank"
                      href="/SzymonFularczykCvPolish.pdf"
                      className="hover:bg-main-font rounded-sm px-1 hover:text-white transition-colors"
                    >
                      Polish
                    </a>
                    <a
                      target="_blank"
                      href="/SzymonFularczykCvEnglish.pdf"
                      className="hover:bg-main-font rounded-sm px-1 hover:text-white transition-colors"
                    >
                      English
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://github.com/poteznyszymon"
              target="_blank"
              className="px-4 py-3 sm:py-2  bg-white border border-gray-200 shadow-md text-sm md:hover:scale-105 hover:scale-[102%] transition-all duration-500 rounded-full flex items-center gap-1 font-semibold justify-between md:justify-between"
            >
              <p>Github</p>
              <MdKeyboardArrowRight />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hidden group md:flex relative  md:justify-center md:items-center w-64 h-64 lg:h-80 lg:w-80 bg-gradient-to-tr from-main-yellow to-main-purple rounded-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          layout
        >
          <motion.img
            className="h-64 w-64 lg:h-80 lg:w-80 translate-x-3 rotate-[-10deg] transition-all duration-500"
            src="./memoji.png"
            height={500}
            width={500}
            alt="avatar"
            initial={{ scale: 1, rotate: 0 }}
            animate={{ scale: 1.2, rotate: -10 }}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
