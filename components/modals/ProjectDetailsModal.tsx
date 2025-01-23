import { ProjectType } from "@/types";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const Technologies = dynamic(() => import("@/components/resume/Technologies"));
const GetCode = dynamic(() =>
  import("@/components/portfolio/ProjectCard").then((res) => res.GetCode)
);
const VideoPlayer = dynamic(() => import("@/components/ui/VideoPlayer"));

export interface ProjectDetailsModalProps {
  className?: string;
  project: ProjectType;
}

const ProjectDetailsModal = ({
  className = "",
  project,
}: ProjectDetailsModalProps) => {
  return (
    <main
      className={`rounded-3xl bg-white p-4 md:p-10 shadow-xl border-2  max-h-[600px] md:max-h-[750px]  overflow-y-scroll ${className}`}
    >
      {/** Title */}
      <h2 className="font-semibold text-primary text-lg md:text-3xl flex">
        {project.name}
      </h2>

      {/** Short Description */}
      <p className="text-paragraph text-sm lg:text-lg">
        {project.shortDescription}
      </p>

      {/** JSX ? */}
      {project.jsxContent && (
        <div className="text-paragraph text-sm lg:text-lg mt-5">
          {project.jsxContent()}
        </div>
      )}

      {/** Used technologies */}
      <div className="my-8">
        <h3 className="text-sm md:text-base font-semibold text-secondary">
          Technologies:
        </h3>
        <Technologies ids={project.technologiesIds} max={10} />
      </div>

      {/** Key Features */}

      {project?.features && (
        <div>
          <h3 className="text-sm md:text-base font-semibold text-secondary">
            Key Features (What I developed):
          </h3>
          <ul className="list-inside list-disc pl-3 text-xs lg:text-base text-paragraph">
            {project?.features?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/** Presentation */}
      {project.videoSrc && (
        <div className="mt-8">
          <h3 className="text-sm md:text-base font-semibold text-secondary mb-2">
            Presentation:
          </h3>
          <div>
            <VideoPlayer videoSrc={project.videoSrc} />
          </div>
        </div>
      )}

      <div className="flex items-center space-x-1 mt-5">
        {/** Get Code */}
        {project.githubUrl && <GetCode githubUrl={project.githubUrl} />}
        {/** Demo URL */}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_self"
            title="Live Demo"
            className="p-2 text-secondary hover:text-primary flex items-center"
          >
            <FaEye size={18} className="mr-2" />
            Live Demo
          </Link>
        )}
      </div>
    </main>
  );
};

export default ProjectDetailsModal;
