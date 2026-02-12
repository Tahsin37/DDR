"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center px-2 text-center sm:px-0">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
      >
        <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
        <h1 className="Welcome-text text-[12px] sm:text-[13px]">
          Crafting Innovative Digital Experiences
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-[10px] text-center text-2xl font-medium text-white sm:text-[30px]"
      >
        Delivering multi-skill mastery across technology and creativity
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive mb-8 mt-[10px] text-center text-lg text-gray-200 sm:mb-10 sm:text-[20px]"
      >
        Think, Create & Innovate with Zenith
      </motion.div>
    </div>
  );
};

export default SkillText;
