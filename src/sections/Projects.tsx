import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import mernJobPortalImage from "@/assets/images/mernjobportal.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import GithubIcon from "@/assets/icons/github.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    title: "EduApp E-Learning Platform",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    repo:"",
    image: darkSaasLandingPage,
  },
  {
    title: "Highway Bus Management System",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    repo:"",
    image: lightSaasLandingPage,
  },
  {
    title: "SEDS Mora Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    repo:"",
    image: mernJobPortalImage,
  },
  {
    title: "Mern Job Portal",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    repo:"https://github.com/DULAJBHAGYA/MERN-Job-portal",
    image: mernJobPortalImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader 
              eyebrow="Real-world Results"
              title="Featured Projects"
             description="See how I transformed concepts into engaging digital expiriences."/>
        

        <div className="flex flex-col gap-20 mt-10 md:mt20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl
               after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky" 
               style={{
                  top: `calc(64px + ${projectIndex * 50}px`
                }
               }
            >
              <div className="absolute inset-0 -z-10 opacity-5" 
              style={{
                backgroundImage:`url(${GrainImage.src})`
              }}></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">

             
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"></hr>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((Result) => (
                <li key={Result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckIcon className="size-5 md:siz-6"/>
                  <span>{Result.title}</span>
                </li>
              ))}
            </ul>

              <div className="flex flex-col md:flex-row  gap-1 md:gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-gray-950 hover:text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center ArrowUpNightIcon gap-2 mt-8 hover:bg-white/10">
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
                  </button>
              </a>
              {/* inline-flex items-center gap-2 border border-white text-gray-900 bg-white h-12 px-6 rounded-xl */}

              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <button className="text-white h-12 w-full md:w-auto border border-white/15 px-6 rounded-xl font-normal inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/5">
                <GithubIcon className="size-4"></GithubIcon>
                  <span>Github Repo</span>
                  </button>
              </a>
              </div>

              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title}className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"></Image>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};