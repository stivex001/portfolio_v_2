"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      Contact
    </motion.div>
  );
};

export default Contact;
