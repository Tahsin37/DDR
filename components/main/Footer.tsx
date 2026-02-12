"use client";

import React, { useState } from "react";
import { RxDiscordLogo, RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import ServerClosedModal from "../shared/ServerClosedModal";

type FooterLinks = {
  github?: string;
  discord?: string;
  twitter?: string;
  facebook?: string;
  learning?: string;
  email?: string;
};

type Props = {
  links?: FooterLinks;
};

const defaultLinks: FooterLinks = {
  github: "https://github.com/",
  discord: "https://discord.com/",
  twitter: "https://twitter.com/",
  facebook: "https://facebook.com/",
  learning: "#",
  email: "mailto:zenithchowdhury3@gmail.com",
};

const Footer: React.FC<Props> = ({ links }) => {
  const l = { ...defaultLinks, ...(links || {}) };
  const [isServerModalOpen, setIsServerModalOpen] = useState(false);

  return (
    <div className="relative z-30 h-full w-full bg-transparent px-6 py-10 text-gray-200 shadow-lg sm:px-10 md:px-14">
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1500px] grid-cols-1 gap-y-8 text-center md:grid-cols-3 md:items-start md:justify-items-center md:gap-x-56 md:text-left lg:gap-x-80">
          <div className="flex h-auto w-full max-w-[240px] flex-col items-center justify-start text-center md:items-start md:text-left">
            <div className="text-[18px] font-bold">Community</div>
            <p className="my-[15px] flex flex-row items-center">
              <button
                type="button"
                className="pointer-events-auto flex cursor-pointer items-center text-[16px] transition-colors hover:text-white"
                onClick={() => setIsServerModalOpen(true)}
                aria-label="Open Github status"
              >
                <RxGithubLogo />
                <span className="ml-[6px]">Github</span>
              </button>
            </p>
            <p className="my-[15px] flex flex-row items-center">
              <button
                type="button"
                className="pointer-events-auto flex cursor-pointer items-center text-[16px] transition-colors hover:text-white"
                onClick={() => setIsServerModalOpen(true)}
                aria-label="Open Discord status"
              >
                <RxDiscordLogo />
                <span className="ml-[6px]">Discord</span>
              </button>
            </p>
          </div>

          <div className="flex h-auto w-full max-w-[240px] flex-col items-center justify-start text-center md:items-start md:text-left">
            <div className="text-[18px] font-bold">Social Media</div>
            <p className="my-[15px] flex flex-row items-center">
              <button
                type="button"
                className="pointer-events-auto flex cursor-pointer items-center text-[16px] transition-colors hover:text-white"
                onClick={() => setIsServerModalOpen(true)}
                aria-label="Open Twitter status"
              >
                <RxTwitterLogo />
                <span className="ml-[6px]">Twitter</span>
              </button>
            </p>
            <p className="my-[15px] flex flex-row items-center">
              <button
                type="button"
                className="pointer-events-auto flex cursor-pointer items-center text-[16px] transition-colors hover:text-white"
                onClick={() => setIsServerModalOpen(true)}
                aria-label="Open Facebook status"
              >
                <FaFacebook />
                <span className="ml-[6px]">Facebook</span>
              </button>
            </p>
          </div>

          <div className="flex h-auto w-full max-w-[240px] flex-col items-center justify-start text-center md:items-start md:text-left">
            <div className="text-[18px] font-bold">About</div>
            <p className="my-[15px] flex flex-row items-center">
              <a
                href={l.learning}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[6px] cursor-pointer text-[16px] transition-colors hover:text-white"
              >
                Learning about me
              </a>
            </p>
            <p className="my-[15px] flex flex-row items-center">
              <a href={l.email} className="ml-[6px] text-[16px]">
                zenithchowdhury@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 w-full text-center text-[16px]">
          &copy; Zenith Chowdhury 2026 | All rights reserved.
        </div>
      </div>

      <ServerClosedModal
        isOpen={isServerModalOpen}
        onClose={() => setIsServerModalOpen(false)}
      />
    </div>
  );
};

export default Footer;
