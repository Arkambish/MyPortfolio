import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import ProjectsBtnn from "../components/ProjectsBtn1";
import Avatar from "../components/Avatar";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from "next/link";

const Home = () => {
  const [typedText, setTypedText] = useState("");

  const fullText = "Software Engineer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-[100px] xl:text-left h-full container mx-auto pt-2">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi,I am <br />
            <span className="text-accent">Arkam Bisrul Hafi</span>
          </motion.h1>
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-3xl relative" // Added relative positioning
          >
            {typedText}
            <span className="typing-cursor"></span> {/* Cursor element */}
          </motion.h2>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-10"
          >
            Embark on a journey of creativity and exploration as we push the
            boundaries of possibility. Together, we craft solutions that
            inspire, driven by our passion to shape a future without limits.
          </motion.p>
          {/* <div className="flex justify-center xl:hidden relative mt-0 pt-0">
            <ProjectsBtnn />
          </div> */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" xl:flex pb-4"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[1%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
