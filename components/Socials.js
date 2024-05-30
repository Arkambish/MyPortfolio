import Link from "next/link";
import {
  RiInstagramLine,
  RiGithubLine,
  RiFacebookBoxLine,
  RiDiscordLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl ">
      <Link
        href={"https://github.com/Arkambish"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://web.facebook.com/arqm.bisrulhafie/"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={"https://www.instagram.com/iarqm_?igsh=bnN2ZHg2ZHNpZnl0"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/mohomed-arkam-67b48a214/"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"`/"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDiscordLine />
      </Link>
    </div>
  );
};

export default Socials;
