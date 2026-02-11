import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Creations
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Advanced VFX & CGI Production"
          description="A high-end cinematic project crafted using AI, CGI, VFX, and advanced animation techniques to deliver a futuristic, immersive visual experience."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Next-Gen Movie Streaming Experience"
          description="A futuristic movie streaming platform designed with cinematic UI, advanced animations, and immersive visual effects to deliver a premium entertainment experience."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Futuristic Brand Visualization"
          description="A high-end cinematic banner created using AI, CGI, and advanced visual effects to deliver a hyper-realistic, immersive product showcase experience."
        />
      </div>
    </div>
  );
};

export default Projects;
