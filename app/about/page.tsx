"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Biography } from "@/components/About/Biography";
import { Skills } from "@/components/About/Skills";
import { MyExperience } from "@/components/About/Experience";
import { SvgAnimation } from "@/components/About/SvgAnimation";

type Props = {};

const About = (props: Props) => {

  const containerRef = useRef(null);

  const {scrollYProgress} = useScroll({container:containerRef})

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex overflow-x-hidden" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          <Biography />
          <Skills />
        </div>
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <SvgAnimation scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
