import { React, useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaFigma,
} from "react-icons/fa";

import {
  SiAndroidstudio,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiAdobephotoshop,
} from "react-icons/si";
import Image from "next/image";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiExpress />,
          <SiMongodb />,
          <SiMongoose />,
          <FaNodeJs />,
          <FaNpm />,
        ],
      },
      {
        title: "Mobile Development",
        icons: [<SiAndroidstudio />],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Freelancer",
        stage: "2022 Onwards",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title:
          "BSc(Hons)Information Technology  -  University of  Moratuwa SriLanka",
        stage: "2022 Onwards",
      },
      {
        title: "Advanced Level  -  Alminhaj National School",
        stage: "2006 - 2019",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[300px] "
      >
        <div className="hidden xl:flex xl:max-w-none">
          <Image
            src={"/prof.png"}
            width={700}
            height={600}
            alt=""
            className="translate-z-0 w-full h-full "
          />
        </div>
        {/* <Avatar /> */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center  ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Crafting <span className="text-accent">Code </span>Forging Future
            Ahead
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            An undergraduate student actively engaged in multiple projects.
            Please check out my GitHub profile for more information.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden  md:flex md:max-w-xl  xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex  flex-1 xl:gap-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +{" "}
                </div>

                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[50%] h-[350px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
