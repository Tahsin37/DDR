import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-10"
      id="projects"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-12 text-4xl font-semibold text-transparent sm:py-16 sm:text-5xl">
        My Creations
      </h1>
      <div className="grid h-full w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
