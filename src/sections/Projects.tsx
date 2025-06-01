import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import trafficCollisionApp from "@/assets/images/traffic-collision-app.png";
import mernJobPortalImage from "@/assets/images/mernjobportal.png";
import aiITPathFinder from "@/assets/images/ai-it-path-finder.png";
import mernLMS from "@/assets/images/mern-lms.png";
import bookManagerApp from "@/assets/images/book-manager-app.png";
import sallonReservations from "@/assets/images/sallon-reservations.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { FaReact, FaNodeJs, FaFileAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiDjango,
  SiSpacy,
  SiPuppeteer,
  SiMamp,
  SiAngular,
  SiCss3,
  SiDotnet,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPostgresql,
  SiGoland,
  SiDocker,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { DiMsqlServer, DiPostgresql, DiDart } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

const portfolioProjects = [
  {
    title: "AI IT Path Finder",
    results: [
      { title: "Provides personalized job recommendations for IT professionals",},
      { title: "Generates dynamic CVs using user input and AI" },
      { title: "Automates document generation and export as PDF" },
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/AI-IT-Path-Finder---CV-Generation-Model",
    image: aiITPathFinder,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "DJango", icon: SiDjango },
      { name: "Spacy", icon: SiSpacy },
      { name: "PostgreSql", icon: DiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Puppeteer", icon: SiPuppeteer },
      { name: "DraftJS", icon: FaFileAlt },
    ],
  },
  {
    title: "Traffic Collision Stats Web Application",
    results: [
      { title: "Displays traffic collision statistics and detailed reports" },
      { title: "Allows CRUD operations on collision cases" },
      { title: "Supports user management and administrative control over data" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/Traffic-Collision-Dashboard",
    image: trafficCollisionApp,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "SpringBoot", icon: SiSpringboot },
      { name: "MySQl", icon: SiMysql },
      { name: "Mamp", icon: SiMamp },
    ],
  },
  {
    title: "EDEMY Learning Management System",
    results: [
      { title: "Learners can enroll in and purchase courses" },
      { title: "Teachers can upload videos and learning resources" },
      { title: "Offers a user-friendly interface for smooth navigation and usage" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/MERN-LMS",
    image: mernLMS,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "BOOKTRACK Book Manager App",
    results: [
      { title: "Manages books with full CRUD operations" },
      { title: "Displays detailed information for each book" },
      { title: "Provides an organized interface for efficient book tracking" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/Book-manager-app-angular-and-dot-net",
    image: bookManagerApp,
    technologies: [
      { name: "Angular", icon: SiAngular },
      { name: "CSS", icon: SiCss3 },
      { name: "DotNet", icon: SiDotnet },
      { name: "MsSQLServer", icon: DiMsqlServer },
    ],
  },
  {
    title: "Job Portal for IT Prefessionals",
    results: [
      { title: "Allows users to post and browse job listings" },
      { title: "Enables filtering and searching for relevant job opportunities" },
      { title: "Helps users find and apply for nearby suitable jobs" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/MERN-Job-portal",
    image: mernJobPortalImage,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "SEDS Mora Official Website",
    results: [
      { title: "Complete information about SEDS Mora and its mission" },
      { title: "Projects, achievements, and organizational history" },
      { title: "Features team details, events, and all relevant updates such as events" }
    ],
    link: "",
    repo: "",
    image: mernJobPortalImage,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "EduApp E-Learning Mobile Application",
    results: [
      { title: "Supports two user roles: students and teachers" },
      { title: "Students can enroll in and access purchased courses" },
      { title: "Teachers can upload educational content and manage resources" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/E-Learning-Platform",
    image: darkSaasLandingPage,
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "GOLang", icon: SiGoland },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    title: "Highway Bus Management System",
    results: [
      { title: "Admins manage highways, buses, schedules, and fares" },
      { title: "Users can view real-time bus times, locations, and fare details" },
      { title: "Includes lost and found tracking for passenger items" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/HBMS-Web-application",
    image: lightSaasLandingPage,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "ReactNative", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "TaskMaster To-Do Mobile Application",
    results: [
      { title: "Allows users to log in securely" },
      { title: "Supports CRUD operations on to-do tasks" },
      { title: "Offers a simple and intuitive interface for task management" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/todoApp",
    image: lightSaasLandingPage,
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "PostgreSQl", icon: SiPostgresql },
    ],
  },
  {
    title: "Salons & Spas appointment booking Mobile Application",
    results: [
      { title: "Enables users to search for nearby salons and spas" },
      { title: "Allows booking appointments and checking available services" },
      { title: "Displays service details and available items for easy selection" }
    ],
    link: "",
    repo: "https://github.com/DULAJBHAGYA/Appointment-Booking-Mobile-App-for-Sallon-and-Spa",
    image: sallonReservations,
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQl", icon: SiPostgresql },
    ],
  },
  
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital expiriences."
        />

        <div className="flex flex-col gap-20 mt-10 md:mt20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute 
              after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl
               after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 10}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-poppins text-2xl font-bold mt-2 md:mt-2 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-2 md:mt-5"></hr>
                  <ul className="flex flex-col gap-4 mt-2 md:mt-2">
                    {project.results.map((Result) => (
                      <li
                        key={Result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:siz-6" />
                        <span>{Result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 mt-6 pl-5">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 text-white/80"
                      >
                        {tech.icon && <tech.icon className="size-6" />}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row  gap-1 md:gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 hover:text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center ArrowUpNightIcon gap-2 mt-8 hover:bg-white/10">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
                      </button>
                    </a>
                    {/* inline-flex items-center gap-2 border border-white text-gray-900 bg-white h-12 px-6 rounded-xl */}

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-white h-12 w-full md:w-auto border border-white/15 px-6 rounded-xl font-normal inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/5">
                        <GithubIcon className="size-4"></GithubIcon>
                        <span>Github Repo</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  ></Image>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
