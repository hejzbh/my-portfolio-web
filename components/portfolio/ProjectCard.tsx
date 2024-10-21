"use";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/animated/FloatCard";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaGithub } from "react-icons/fa";
import { ProjectType } from "@/types";

export interface ProjectCardProps {
  className?: string;
  project: ProjectType;
}

const ProjectCard = ({ className = "", project }: ProjectCardProps) => {
  return (
    <article className={`h-full ${className}`}>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl  w-auto  h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-[1rem] xl:text-xl 3xl:text-[1.4rem] font-semibold text-secondary"
          >
            {project.name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-xs md:text-sm  xl:text-base 3xl:text-lg text-secondary min-h-[3.5em] pt-2"
          >
            {project.shortDescription}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={project.thumbnail}
              height="1000"
              width="1000"
              className="h-[10rem] md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            {project.githubUrl ? (
              <CardItem
                translateZ={20}
                as={Link}
                href={project.githubUrl}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs md:text-[1rem] font-normal text-secondary hover:text-primary transition"
              >
                <FaGithub className="inline-block mr-2" size={16} />
                Get Code
              </CardItem>
            ) : (
              <div></div>
            )}
            <CardItem translateZ={20} as="div">
              <Button title="About" variant="secondary" size="sm" />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </article>
  );
};

export default ProjectCard;
