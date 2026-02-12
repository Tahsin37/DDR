"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ServerClosedModal from "../shared/ServerClosedModal";

const HeroContent = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-20 flex w-full flex-col items-start justify-center gap-8 px-4 pb-12 pt-2 sm:mt-24 sm:gap-10 sm:px-6 md:mt-28 md:px-10 md:pb-16 lg:mt-36 lg:flex-row lg:items-center lg:gap-0 lg:px-20 lg:pb-8"
    >
      <div className="m-auto flex h-full w-full max-w-[640px] flex-col justify-center gap-4 text-start sm:gap-5">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box inline-flex items-center border border-[#7042f88b] px-3 py-2 opacity-[0.9]"
        >
          <SparklesIcon className="mr-2 h-4 w-4 text-[#b49bff]" />
          <h1 className="Welcome-text text-[13px] leading-none">
            Creative Tech Wizard
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-4 flex h-auto w-full max-w-[340px] flex-col gap-2 text-3xl font-bold text-white sm:mt-6 sm:max-w-[900px] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <div className="leading-[1.05] sm:leading-tight">
            <div className="md:whitespace-nowrap">
              Delivering{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Multi-Skill
              </span>
            </div>
            <div>Mastery Creatively</div>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-3 max-w-[340px] text-base text-gray-300 sm:my-5 sm:max-w-[600px] sm:text-lg"
        >
          I&apos;m a Digital Expert creating innovative solutions across
          technology, creativity, and business. Explore my work.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="button-primary w-full max-w-[190px] cursor-pointer rounded-lg px-4 py-2 text-center text-white sm:w-auto"
          role="button"
          tabIndex={0}
          aria-haspopup="dialog"
          aria-expanded={isAboutOpen}
          onClick={() => setIsAboutOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsAboutOpen(true);
            }
          }}
        >
          About Me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden h-full w-full items-center justify-center md:flex"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="h-auto w-[260px] sm:w-[340px] md:w-[420px] lg:w-[650px]"
        />
      </motion.div>

      <ServerClosedModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </motion.div>
  );
};

export default HeroContent;
