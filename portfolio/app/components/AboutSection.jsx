"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, JavaScript and CSS</li>
        <li>React JS / React Native / Nextjs / Typescript</li>
        <li>CSS Flexbox / CSS Grid /Material UI / Tailwind/ Bootstrap</li>
        <li>
          Restful APIs / MongoDB, MySQL/ React Query/ Firebase / Redux / Redxu
          Saga
        </li>
        <li>Agile Metodology / GIT Hub / GITLAB / Jira / Monday</li>
        <li>
          Automated Code Review / ESLint for JavaScript / TSLint for TypeScript
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Master in Application of Information and Communication Technologies in
          Teaching
        </li>
        <li>Bachelor in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          CONFERENCES AND SEMINARS (09/2020 - Present) Assessing the Impact of
          Mobile Educational Games on Student’s Success within Mathematics
          Subject in Primary Schools
        </li>
        <li>SQL Development and Administration Certification</li>
        <li>Front End Training</li>
        <li>MongoDB Basics Certification</li>
        <li>Networking Academy Entrepreneurship</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am web developer with a passion for creating interactive and
            responsive web applications. I have experience working with HTML /
            JavaScript / CSS / React JS / React Native / Nextjs / Typescript CSS
            Flexbox / CSS Grid / Material UI / Tailwind / Bootstrap Restful APIs
            / MongoDB, MySQL / React Query / Redux / Redxu Saga / Firebase /
            ESlint Agile Metodology / GIT Hub / GITLAB / Jira / Monday. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >

              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
