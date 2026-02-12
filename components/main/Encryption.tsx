"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex min-h-screen h-full w-full flex-row items-center justify-center px-4 sm:px-6 md:px-10">
      <div className="absolute top-0 z-[5] h-auto w-auto px-2">
        <motion.div
          variants={slideInFromTop}
          className="text-center text-2xl font-medium text-gray-200 sm:text-3xl md:text-[40px]"
        >
          Cybersecurity
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            &{" "}
          </span>
          Encryption Expert
        </motion.div>
      </div>

      <div className="absolute z-[20] flex h-auto w-auto translate-y-[-30px] flex-col items-center justify-center sm:translate-y-[-40px] md:translate-y-[-50px]">
        <div className="group flex h-auto w-auto cursor-pointer flex-col items-center">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[44px] translate-y-5 transition-all duration-200 group-hover:translate-y-11 sm:w-[50px]"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10 w-[60px] sm:w-[70px]"
          />
        </div>

        <div className="Welcome-box brder z-[20] my-[20px] border-[#7042f88b] px-[15px] py-[4px] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute bottom-[10px] z-[20] px-[5px]">
        <div className="cursive px-2 text-center text-base font-medium text-gray-300 sm:text-lg md:text-[20px]">
          Ethical Hacking & Cyber Defense Expert
        </div>
      </div>

      <div className="absolute flex w-full items-start justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="h-auto w-full"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
