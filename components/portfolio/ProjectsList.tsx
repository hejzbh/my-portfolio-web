import React from "react";
import dynamic from "next/dynamic";
import { projects } from "@/constants/projects";

const ProjectCard = dynamic(() => import("@/components/portfolio/ProjectCard"));

export interface ProjectsListProps {
  className?: string;
}

const ProjectsList = ({ className = "" }: ProjectsListProps) => {
  return (
    <div className={`${className}`}>
      <ul className="gap-8 md:gap-14 flex md:grid overflow-x-scroll md:overflow-x-visible grid-cols-projects-list-sm xl:grid-cols-projects-list-xl">
        {projects?.map((project) => (
          <li className="min-w-[290px] md:min-w-[250px]" key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
