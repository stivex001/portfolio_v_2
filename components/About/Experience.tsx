"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type Props = {};

export const MyExperience = (props: Props) => {
  const expereiceRef = useRef(null);

  const isExperienceRefInView = useInView(expereiceRef);

  return (
    <motion.div className="flex flex-col gap-12 pb-48" ref={expereiceRef}>
      <motion.h1
        initial={{ x: "-100vh" }}
        animate={isExperienceRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="uppercase text-white font-bold text-2xl"
      >
        Experience
      </motion.h1>
      {/* first list */}
      <motion.div
        initial={{ x: "100vh" }}
        animate={isExperienceRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between ">
          <div className="w-1/3 flex flex-col ">
            <h1 className="bg-secondary p-3 font-semibold rounded-b-lg rounded-s-lg">
              Junior Frontend Developer
            </h1>
            <ul className="n list-disc">
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
            </ul>

            <span className="p-3 text-red-400 text-sm font-semibold">
              2024 - Present
            </span>
            <span className="p-2 rounded bg-secondary text-sm font-semibold w-fit">
              Emplug
            </span>
          </div>
          <div className="w-1/6 ">
            <div className="w-1 h-full bg-secondary rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-secondary bg-white -left-2"></div>
            </div>
          </div>
          <div className=" w-1/3"></div>
        </div>
        {/* second list */}
        <div className="flex justify-between ">
          <div className="w-1/3"></div>
          <div className="w-1/6 ">
            <div className="w-1 h-full bg-secondary rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-secondary bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col ">
            <h1 className="bg-secondary p-3 font-semibold rounded-b-lg rounded-s-lg">
              Junior Frontend Developer
            </h1>
            <ul className="n list-disc">
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
            </ul>

            <span className="p-3 text-red-400 text-sm font-semibold">
              2024 - Present
            </span>
            <span className="p-2 rounded bg-secondary text-sm font-semibold w-fit">
              Emplug
            </span>
          </div>
        </div>

        {/* third list */}
        <div className="flex justify-between ">
          <div className="w-1/3 flex flex-col ">
            <h1 className="bg-secondary p-3 font-semibold rounded-b-lg rounded-s-lg">
              Junior Frontend Developer
            </h1>
            <ul className="n list-disc">
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
              <li className="p-3 text-sm italic">
                Developed and maintained the Plugbay website, facilitating user
                engagement and collaboration with cross-functional teams.
              </li>
            </ul>

            <span className="p-3 text-red-400 text-sm font-semibold">
              2024 - Present
            </span>
            <span className="p-2 rounded bg-secondary text-sm font-semibold w-fit">
              Emplug
            </span>
          </div>
          <div className="w-1/6 ">
            <div className="w-1 h-full bg-secondary rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-secondary bg-white -left-2"></div>
            </div>
          </div>
          <div className=" w-1/3"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};
