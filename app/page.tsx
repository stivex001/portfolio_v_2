"use client"

import Image from "next/image";
import me from "@/components/images/me.png";
import { MapIcon } from "@/components/icons/MapIcon";
import { Facebook, GithubIcon, Linkedin, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <main className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="  h-1/2 lg:h-full lg:w-1/2  relative ">
          <Image src={me} alt="bai" fill className="object-contain " />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-grayish w-full font-bold text-4xl md:6xl">
            Hi, I&apos;m Stephen 👋
          </h1>
          <span className="md:text-xl">
            Specializing in front-end development, I excel in leveraging
            technologies like React, Next.js, and server-side rendering to craft
            engaging and user-centric applications. My proficiency extends
            across a spectrum of tools including Styled Components, TailwindCss,
            Axios, Redux, Postman, and other modern Frontend Technologies,
            allowing me to build efficient and scalable solutions aligned with
            business objectives.
          </span>
          <div className="w-full flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <MapIcon />
              <span>F.C.T Abuja, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Available for new projects</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 w-full">
            <a
              href="https://github.com/stivex001"
              target="_blank"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
            >
              <GithubIcon />
            </a>
            <a
              href="https://github.com/stivex001"
              target="_blank"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/adeyemostephen/"
              target="_blank"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/adeyemo.oladunjoyestephen"
              target="_blank"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
