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
      <ul
        className="gap-14 "
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {projects?.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
