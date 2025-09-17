import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import GithubLogo from "@/assets/GitHubLogo.svg";
import LinkedinLogo from "@/assets/LinkedInLogo.svg";
import CVLogo from "@/assets/CV.png";
import EmailLogo from "@/assets/Email.png";
import BasilCvFile from "@/assets/basil-abushihab-fullstack-developer.pdf";
import { motion } from "framer-motion";
import clsx from "clsx";
import { SectionTitles } from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection";

export const Contact = () => {
  const { isTripStarted,isJoruenyModeActive } = useTimeLineNodes();

  return (
    <div
      id={SectionTitles.JoinMe}
      className={clsx(
        "mt-[850px] mb-10 w-full flex flex-col md:flex-row justify-center items-start gap-12 px-8",
        { hidden: !isTripStarted && isJoruenyModeActive }
      )}
    >
      <div className="flex flex-col gap-4 w-full md:w-[50%] text-white font-satoshi text-lg leading-relaxed">
        <p>
          And so, our voyage through this corner of the cosmos has reached its
          final waypoint. From the first spark of curiosity to every mission
          completed, each step has been part of a story still unfolding.
        </p>
        <p>
          I hope you’ve enjoyed traveling alongside me as much as I’ve enjoyed
          charting the course. This is not an ending—just a pause in orbit
          before the next launch, the next challenge, the next horizon.
        </p>
        <p className="font-bold text-secondary">
          Until the stars align and our paths cross again—farewell, and onward
          we go.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[35%]">
        <h3 className="text-xl font-bold text-secondary">Let’s Connect</h3>
        <p className="text-white/80 text-sm">
          If you’ve enjoyed this journey, let’s launch a new one together. Reach
          out and let’s create something extraordinary.
        </p>
        <div className="flex gap-4 mt-4 items-center">
          <a
            href="https://github.com/Basil-Abushihab"
            target="_blank"
            className="px-4 py-2 bg-main text-white rounded-lg shadow hover:bg-main/80 transition"
          >
            <motion.img initial={{scale:1}} whileHover={{scale:1.2}} src={GithubLogo} className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/basil-abushihab/"
            target="_blank"
            
          >
            <motion.img initial={{scale:1}} whileHover={{scale:1.2}} src={LinkedinLogo} className="w-10 h-10" />
          </a>
           <a
            href={BasilCvFile}
            download
            
          >
            <motion.img initial={{scale:1}} whileHover={{scale:1.2}} src={CVLogo} className="w-10 h-10" />
          </a>
           <a
            href="mailto:basilabushihab_02@outlook.com"
            target="_blank"
            
          >
            <motion.img initial={{scale:1}} whileHover={{scale:1.2}} src={EmailLogo} className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};
