import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

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
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px]">
                        <a href={l.github} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                    </p>
                    <p className="flex flex-row items-center my-[15px]">
                        <a href={l.discord} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px]">
                        <a href={l.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </a>
                    </p>
                    <p className="flex flex-row items-center my-[15px]">
                        <a href={l.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                            <FaFacebook />
                            <span className="text-[15px] ml-[6px]">Facebook</span>
                        </a>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px]">
                        <a href={l.learning} target="_blank" rel="noopener noreferrer" className="text-[15px] ml-[6px] cursor-pointer">Learning about me</a>
                    </p>
                    <p className="flex flex-row items-center my-[15px]">
                        <a href={l.email} className="text-[15px] ml-[6px]">zenithchowdhury@gmail.com</a>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Zenith Chowdhury 2026 | All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer