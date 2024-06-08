import Image from "next/image";
import React from "react";

const skills = [
  {
    id: 1,
    logo: "",
    name: "Javascript",
  },
  {
    id: 2,
    logo: "",
    name: "Typescript",
  },
  {
    id: 3,
    logo: "",
    name: "React",
  },
  {
    id: 4,
    logo: "",
    name: "Next.js",
  },
  {
    id: 5,
    logo: "",
    name: "Node.js",
  },
  {
    id: 6,
    logo: "",
    name: "Express.js",
  },
  {
    id: 7,
    logo: "",
    name: "MongoDB",
  },
  {
    id: 8,
    logo: "",
    name: "Sass/Scss",
  },
  {
    id: 9,
    logo: "",
    name: "Tailwindcss",
  },
  {
    id: 10,
    logo: "",
    name: "Figma",
  },
  {
    id: 11,
    logo: "",
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
      <div className="grid grid-cols-3">
        {skills?.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-3">
            <Image src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
