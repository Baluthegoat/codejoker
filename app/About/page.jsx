"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
} from "react-icons/si";

const skills = {
  title: "My skills",
  Description:
    "The skills I’ve learned, ranging from technical expertise to soft skills, showcasing my growth and adaptability over this period",
  skilllist: [
    {
      icon: (
        <a
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHtml5 />
        </a>
      ),
      name: "Html",
    },
    {
      icon: (
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCss3Alt />
        </a>
      ),
      name: "CSS",
    },
    {
      icon: (
        <a
          href="https://www.w3schools.com/js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaJs />
        </a>
      ),
      name: "Javascript",
    },
    {
      icon: (
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaNodeJs />
        </a>
      ),
      name: "Node.js",
    },
    {
      icon: (
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <FaReact />
        </a>
      ),
      name: "React.js",
    },
    {
      icon: (
        <a
          href="https://www.geeksforgeeks.org/what-is-database/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDatabase />
        </a>
      ),
      name: "Database",
    },
    {
      icon: (
        <a
          href="https://www.figma.com/downloads/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFigma />
        </a>
      ),
      name: "Figma",
    },
    {
      icon: (
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDocker />
        </a>
      ),
      name: "Docker",
    },
    {
      icon: (
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTailwindcss />
        </a>
      ),
      name: "Tailwind.css",
    },
    {
      icon: (
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
      <SiNextdotjs />
      </a>
      ),
      name: "Next.js",
    },
    {
      icon: (
        <a
          href="https://www.postman.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
      <SiPostman />
      </a>
      ),
      name: "Postman",
    },
    {
      icon: (
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
      >
      <SiPrisma />
      </a>
      ),
      name: "Prisma",
    },
  ],
};
const about = {
  title: "About me",
  Description: (
    <>
      <p>
        It&apos;s all about me and my journey sharing my passions, experiences,
        and the values that drive me. Join me as I explore my interests, goals,
        and the stories that shape who I am.
      </p>
      <p className="para1">
        A dedicated, results-driven and passionate individual with a strong
        academic background, extensive professional experience and a genuine
        enthusiasm for software engineering. With a proven ability to learn and
        adapt quickly. I am eager to contribute my diverse skills set and
        collaborative mindset to a dynamic software engineering program at
        College of Science and Technology.
      </p>
      <p className="para2">
        Ever since I wrote my first &quot;Hello World&quot; program, I was
        hooked on the magic of coding. As I delved deeper into the world of
        software development, I found myself drawn to the elegant solutions that
        code can offer to complex problems. It&apos;s like being a digital
        magician, conjuring solutions out of thin air.
      </p>
    </>
  ),
  info: [
    {
      filedName: "Name",
      filedValue: "Tashi Penjor",
    },
    {
      filedName: "Studies",
      filedValue: "Bachelor of Engineering in Software Engineering",
    },
    {
      filedName: "Collage",
      filedValue: "College of Science and Technology",
    },
    {
      filedName: "Address",
      filedValue: "Chukha,Gedu",
    },
    {
      filedName: "Phone Number",
      filedValue: "+97577277619",
    },
    {
      filedName: "Email",
      filedValue: "02230306.cst@rub.edu.bt",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h1 className="text-4xl font-bold">{skills.title}</h1>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.Description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-green-500 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 ma-auto xl:mx-0">
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-green-500">{item.filedName}</span>
                        <span className="text-l">{item.filedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
