"use client";

import React from "react";
import { motion } from "framer-motion";
import { Biography } from "@/components/About/Biography";
import { Skills } from "@/components/About/Skills";
import { MyExperience } from "@/components/About/Experience";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          <Biography />
          <Skills />
        </div>
        <div className="">svg</div>
      </div>
    </motion.div>
  );
};

export default About;
