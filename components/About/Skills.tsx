import Image from "next/image";
import React from "react";
import { ExpressIcon, FigmaIcon, GitIcon, JsIcon, MongoIcon, NextIcon, NodejsIcon, ReactIocn, SassIcon, TailwindIcon, TypescriptIcon } from "../icons/SkillsIcons";

const skills = [
  {
    id: 1,
    logo: <JsIcon />,
    name: "Javascript",
  },
  {
    id: 2,
    logo: <TypescriptIcon />,
    name: "Typescript",
  },
  {
    id: 3,
    logo: <ReactIocn />,
    name: "React",
  },
  {
    id: 4,
    logo: <NextIcon />,
    name: "Next.js",
  },
  {
    id: 5,
    logo: <NodejsIcon />,
    name: "Node.js",
  },
  {
    id: 6,
    logo: <ExpressIcon />,
    name: "Express.js",
  },
  {
    id: 7,
    logo: <MongoIcon />,
    name: "MongoDB",
  },
  {
    id: 8,
    logo: <SassIcon />,
    name: "Sass/Scss",
  },
  {
    id: 9,
    logo: <TailwindIcon />,
    name: "Tailwindcss",
  },
  {
    id: 10,
    logo: <FigmaIcon />,
    name: "Figma",
  },
  {
    id: 11,
    logo: <GitIcon />,
    name: "Git",
  },
];

type Props = {};

export const Skills = (props: Props) => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="uppercase text-white font-bold text-2xl">
        Skills & Technlogies
      </h1>
      <div className="grid grid-cols-3 gap-y-12">
        {skills?.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-2">
            <div>{skill.logo}</div>
            <p className="text-base font-medium  ">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
