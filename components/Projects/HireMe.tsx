"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type Props = {};

export const HireMe = (props: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">Do you have a project?</h1>
      <div className="relative">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="w-64 h-64 md:w-[500px] md:h-[500px]"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
            />
          </defs>
          <text fill="#fff">
            <textPath xlinkHref="#circlePath" className="text-xl text-white">
              Front-end Developer
            </textPath>
          </text>
        </motion.svg>
        <Link
          href="/contact"
          className="w-16 h-16 md:w-28 absolute md:h-28 inset-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};
