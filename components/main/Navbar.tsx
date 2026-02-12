"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import ServerClosedModal from "../shared/ServerClosedModal";

const sectionLinks = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServerModalOpen, setIsServerModalOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] px-4 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md sm:px-6 md:px-10">
        <div className="m-auto flex h-full w-full items-center justify-between">
          <a
            href="#about-me"
            className="flex h-auto w-auto flex-row items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="h-auto w-[52px] cursor-pointer sm:w-[60px] md:w-[70px] hover:animate-slowspin"
            />

              <span className="ml-[10px] hidden font-bold text-gray-300 sm:block">
                Zenith Chowdhury
              </span>
          </a>

          <div className="hidden h-full w-full max-w-[500px] items-center justify-center lg:flex">
            <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200">
              {sectionLinks.map((link) => (
                <a key={link.href} href={link.href} className="cursor-pointer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 lg:flex">
              {Socials.map((social) => (
                <button
                  key={social.name}
                  type="button"
                  onClick={() => setIsServerModalOpen(true)}
                  className="rounded-md p-1"
                  aria-label={`Open ${social.name} status`}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="h-5 w-5 md:h-6 md:w-6"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="rounded-md p-2 text-gray-200 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="block h-[2px] w-5 bg-gray-200" />
              <span className="mt-1 block h-[2px] w-5 bg-gray-200" />
              <span className="mt-1 block h-[2px] w-5 bg-gray-200" />
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav-menu"
            className="absolute left-0 top-[65px] w-full border-t border-[#7042f861] bg-[#030014f0] px-4 py-4 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-3 text-gray-200">
              {sectionLinks.map((link) => (
                <a
                  key={`mobile-${link.href}`}
                  href={link.href}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              {Socials.map((social) => (
                <button
                  key={`mobile-${social.name}`}
                  type="button"
                  onClick={() => {
                    setIsServerModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="rounded-md p-1"
                  aria-label={`Open ${social.name} status`}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <ServerClosedModal
        isOpen={isServerModalOpen}
        onClose={() => setIsServerModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
