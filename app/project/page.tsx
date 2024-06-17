"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={containerRef}>
        <div className="w-screen h-screen flex items-center justify-center text-8xl text-center"> My Works</div>
      </div>
    </motion.div>
  );
};

export default Project;
