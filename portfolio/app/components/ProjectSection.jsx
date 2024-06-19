"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Wallet Dashboard",
    description:
      "The Wallet Dashboard project aims to create a user-friendly and efficient platform for managing digital wallets and financial assets",
    image: "/images/projects/WalletDashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/Wallet_Dashboard",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MERN Website Crawler",
    description:
      "Single page application. The primary purpose of a website crawler is to index the content of websites for search engines, allowing ...",
    image: "/images/projects/Crawler.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/MERN_Website_Crawler",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "UI Components Library",
    description:
      "A collection of reusable UI components for React built with TypeScript, Rollup, Storybook, and Tailwind CSS.",
    image: "/images/projects/Components.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/UI-Components-Library",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Portfolio Next.js",
    description:
      "Portfolio Project with Next.js, Animation, Tailwind CSS, and Framer Motion",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/Portfolio-NextJs",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Search Dog Breed",
    description:
      "This project is a web application for exploring different dog breeds.",
    image: "/images/projects/DogBreeds.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/Dog-Breeds-Explorer",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Settlement amount system",
    description:
      "This technical project involves implementing a settlement process between two parties, Party A and Party B.",
    image: "/images/projects/SettlementAmountSystem.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/Settlement_Amount_System",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "East Side Co",
    description:
      "This project is a website for a makeup and face cream marketing company.",
    image: "/images/projects/EastSideCo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/EastSideCo_Website",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "LedCom Website",
    description: "This is a Website create to show the hardware computer store",
    image: "/images/projects/Ledcom.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/LedCom_Website",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Vision",
    description:
      "This is a Webiste, create for the health insurance for a german company",
    image: "/images/projects/Vision.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/Vision",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Avire",
    description:
      "This is a Webiste, create for the cosmetic company and their products",
    image: "/images/projects/Avire.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ermirakajtazi/Avire",
    previewUrl: "/",
  },
];

export const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
