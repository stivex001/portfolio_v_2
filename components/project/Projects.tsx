"use client"

import React, { useRef } from "react";
import Section from "../sections/Section";
import SectionHeader from "../sections/SectionHeader";
import SectionDescription from "../sections/SectionDescription";
import projectData from "../data/project";
import { ProjectGrid } from "./ProjectGrid";

type Props = {};

const Projects = (props: Props) => {

    const { current: projects } = useRef(projectData.slice(3));

  return (
    <Section
      id="more-projects"
      name="more-projects"
      padding="pt-12 pb-16 md:py-8 md:pb-[224px]"
    >
      <SectionHeader>More projects</SectionHeader>
      <SectionDescription>
        Discover a collection of projects showcasing my skills, creativity, and
        technical expertise.
      </SectionDescription>
      <ProjectGrid projects={projects} />
    </Section>
  );
};

export default Projects;
