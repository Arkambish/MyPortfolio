import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const ProjectsBtn = () => {
  return (
    <>
      <div className="mx-auto xl:mx-0  xl:block">
        <Link
          href="/work"
          className="relative w-[140px] h-[140px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group  "
        >
          <Image
            src={"/rounded-text.png"}
            width={141}
            height={148}
            alt=""
            className="animate-spin-slow w-full h-full max-w-[115px] max-h-[122px]  "
          />
          <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
        </Link>
      </div>
    </>
  );
};

export default ProjectsBtn;
