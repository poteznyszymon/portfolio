"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";

const Navbar = () => {
  const [draverOpen, setDraverOpen] = useState(false);
  const value = useContext(ActiveSectionContext);

  return (
    <>
      <motion.div
        className="fixed z-10 top-0 sm:rounded-full sm:shadow-md  sm:top-5 h-[4.5rem] sm:bg-opacity-80 backdrop-blur-[0.5rem] sm:h-[3rem] w-full sm:w-[30rem] bg-transparent bg-opacity-70 sm:bg-white left-1/2 -translate-x-[50%]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 100 }}
        layoutRoot
      >
        <div className="sm:hidden w-full h-full px-8 flex items-center justify-end">
          <div className="cursor-pointer">
            <Hamburger
              size={25}
              toggled={draverOpen}
              toggle={() => setDraverOpen(!draverOpen)}
            />
          </div>
        </div>
        <nav className="hidden sm:block h-full ">
          <ul className="flex h-full items-center justify-evenly">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  className={`text-sm  ${
                    value?.activeSection === link.name
                      ? "text-main-font"
                      : "text-gray-400"
                  }`}
                  href={link.hash}
                >
                  {link.name}
                  {link.name === value?.activeSection && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-main-purple"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    ></motion.div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      <div
        className={`fixed sm:hidden top-0 w-[60%] z-30 h-full bg-gradient-to-tr from-main-orange to-main-purple ease-in-out duration-500 ${
          draverOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="pt-8 pl-5 flex flex-col gap-3  ">
          {links.map((item) => (
            <Link
              href={item.hash}
              key={item.name}
              onClick={() => setDraverOpen(false)}
            >
              <li className="text-slate-50 text-4xl font-semibold tracking-tighter hover:scale-110 duration-300 transition-all">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setDraverOpen(false)}
        className={`z-20 sm:hidden fixed top-0 left-0 w-screen h-screen bg-black ${
          draverOpen ? "bg-opacity-50 cursor-pointer " : "bg-opacity-0 hidden"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
