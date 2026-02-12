import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="h-auto w-full object-contain"
      />

      <div className="relative p-5 sm:p-6">
        <h1 className="text-2xl font-semibold text-white sm:text-[28px]">{title}</h1>
        <p className="mt-3 text-base text-gray-300 sm:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
