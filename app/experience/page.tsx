"use client";

import React from "react";
import { motion } from "framer-motion";
import { MyExperience } from "@/components/About/Experience";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          <MyExperience />
        </div>
        <div>svg</div>
      </div>
    </motion.div>
  );
};

export default Experience;
