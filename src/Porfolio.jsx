import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  Sparkles,
} from "lucide-react";

const Section = ({ title, icon: Icon, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <h2 className="mb-6 flex items-center text-3xl font-semibold">
      <Icon className="mr-2 text-blue-400" />
      {title}
    </h2>
    {children}
  </motion.section>
);

const Project = ({ title, description, tags, liveLink, githubLink }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg"
  >
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="mb-4 text-gray-400">{description}</p>
    <div className="mb-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-full bg-blue-900 bg-opacity-50 px-2 py-1 text-sm text-blue-300"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex space-x-4">
      {liveLink && (
        <a
          href={liveLink}
          className="flex items-center text-blue-400 transition-colors hover:text-blue-300"
        >
          Live <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
      {githubLink && (
        <a
          href={githubLink}
          className="flex items-center text-blue-400 transition-colors hover:text-blue-300"
        >
          GitHub <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  </motion.div>
);

const AnimatedCube = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) / 2;
    meshRef.current.rotation.y = Math.sin(time / 2) / 2;
    meshRef.current.position.y = Math.sin(time) / 10;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundControls = useAnimation();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    backgroundControls.start({
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    });
  }, [mousePosition, backgroundControls]);

  const projects = [
    {
      title: "Task Mate",
      description:
        "A task management application with priority-based task organization, subtask tracking, advanced filtering, intuitive analytics for efficient productivity tracking. ",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
      githubLink: "https://github.com/salmanmhd/TaskMate",
      liveLink: "https://taskmate-online.vercel.app/",
    },
    {
      title: "Dev Fusion AI",
      description:
        "A full-stack collaborative project management platform with real-time communication, AI-powered assistance, and a WebContainer-based virtual environment for live code execution.",
      tags: [
        "Node.js",
        "React",
        "MongoDB",
        "Express",
        "WebSocket",
        "Redis",
        "JWT",
      ],
      githubLink: "https://github.com/salmanmhd/DevFusion",
    },
    {
      title: "eShop - Modern E-commerce Platform",
      description:
        "A modern e-commerce platform featuring dynamic product listings, real-time cart management, city-based delivery selection, and responsive design with robust state management.",
      tags: ["React", "Redux Toolkit", "Redux Thunk", "Tailwind CSS", "Axios"],
      liveLink: "https://eshop-salmanmhd.vercel.app/",
      githubLink: "https://github.com/salmanmhd/eShop",
    },
    {
      title: "Expense Tracker Application",
      description:
        "This project is a robust and user-friendly expense tracker application designed to help users manage their finances efficiently. The application provides a clean and intuitive interface for tracking expenses, incomes, and generating reports.",
      tags: ["React", "React router", "Redux", "CSS"],
      liveLink: "https://expe-tracker.vercel.app/",
      githubLink: "https://github.com/salmanmhd/Expense-Tracker",
    },
    {
      title: "Worldwise",
      description:
        "An interactive travel tracking platform featuring map-based visualization, personalized travel logs, and comprehensive trip management with dynamic data loading and protected user experiences.",
      tags: ["React", "React Router", "Context API", "Node js", "Express", "Lazy loading"],
      liveLink: "https://salmanmhd-worldwise.vercel.app/",
      githubLink: "https://github.com/salmanmhd/World-Wise",
    },
    {
      title: "usePocorn",
      description:
        "A movie discovery and rating platform featuring real-time search, personalized watchlists, interactive rating system, and comprehensive watch statistics with local storage persistence.",
      tags: ["React", "Custom Hooks", "Restful API", "Performance Optimization"],
      liveLink: "https://salmanmhd-usepopcorn.vercel.app/",
      githubLink: "https://github.com/salmanmhd/Use-Popcorn",
    },
    {
      title: "Zen Timer",
      description:
        "Zen Timer is a modern, minimalist productivity timer built with React. The application allows users to set custom countdown timers with minute and second precision, making it perfect for productivity intervals, or any timed activities.",
      tags: ["React", "React Hooks", "Tailwind"],
      liveLink: "https://zen-timer.vercel.app/",
      githubLink: "https://github.com/salmanmhd/ZenTimer",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux",
    "Context API",
    "Redux Toolkit",
    "Thunks",
    "Typescript",
    "JavaScript",
    "Java",
    "PostgreSQL",
    "REST APIs",
    "Tailwind CSS",
    "Git",
    "Postman",
    "JWT",
    "HTML",
    "CSS",  
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-950 text-gray-100">
      <motion.div
        className="fixed inset-0 z-0"
        animate={backgroundControls}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-16 pt-1 lg:pt-1">
        <header className="mb-8 text-center">
          <div className="mb-2 h-[280px] w-full lg:mb-6 lg:mt-8 lg:h-[470px]">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedCube />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent"
          >
            Md Salman
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Full Stack Developer
          </motion.p>
        </header>

        <Section title="About Me" icon={User}>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a full-stack developer passionate about building efficient,
            scalable, and user-focused web applications. A continuous learner
            who is trying to contribute to impactful projects that make a
            difference.
          </p>
        </Section>

        <Section title="Skills" icon={Code}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-full border border-blue-700 bg-blue-900 bg-opacity-20 px-3 py-1 text-sm text-blue-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Section>

        <Section title="Projects" icon={Briefcase}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </Section>

        {/* <Section title="Education" icon={Book}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                Master of Science in Computer Science
              </h3>
              <p className="text-gray-400">Stanford University, 2018-2020</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-gray-400">MIT, 2014-2018</p>
            </div>
          </div>
        </Section> */}

        <Section title="Get in Touch" icon={Sparkles}>
          <div className="flex justify-center space-x-8">
            {[
              { Icon: Github, url: "https://github.com/salmanmhd" },
              { Icon: Linkedin, url: "https://www.linkedin.com/in/salmanmhd/" },
              { Icon: Mail, url: "mailto:mhdsalman010@gmail.com" },
            ].map(({ Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                className="text-gray-400 transition-colors hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
