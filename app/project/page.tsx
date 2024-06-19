"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HireMe } from "@/components/Projects/HireMe";

const projects = [
  {
    id: 1,
    title: "React Commerces",
    desc: "this is not a react ",
    img: "https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://github.com/stivex001",
    color: "from-pink-300 to-violet-300",
  },
  {
    id: 2,
    title: "React Commercesssss",
    desc: "this is a react component not thara",
    img: "https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://github.com/stivex001",
    color: "from-blue-300 to-violet-300",
  },
  {
    id: 3,
    title: "React Commerce",
    desc: "this is a react component",
    img: "https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://github.com/stivex001",
    color: "from-purple-300 to-red-300",
  },
  {
    id: 5,
    title: "React Commerce",
    desc: "this is a react component mobiiewlssdbc",
    img: "https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://github.com/stivex001",
    color: "from-blue-300 to-violet-300",
  },
];

type Props = {};

const Project = (props: Props) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={containerRef}>
        <h1 className="w-screen h-screen flex items-center justify-center  font-bold text-4xl lg:text-6xl xl:text-8xl text-center">
          {" "}
          My Works
        </h1>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-500" />
            {projects.map((project) => (
              <div
                key={project?.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
              >
                <div className="flex flex-col gap-8 text-white ">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl ">{project.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={project.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{project.desc}</p>
                  <Link href={project.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <HireMe />
    </motion.div>
  );
};

export default Project;
