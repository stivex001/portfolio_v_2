"use client"

import React, { useRef, useState } from "react";
import Section from "../sections/Section";
import SectionHeader from "../sections/SectionHeader";
import SectionDescription from "../sections/SectionDescription";
import FeaturedProjectViewer from "./FeaturedProjectViewer";
import projectData, { Project } from "../data/project";
import { FeaturedProject } from "./props";
import FeaturedProjectsDesktop from "./desktop/FeaturedProjectsDesktop";
import FeaturedProjectsMobile from "./mobile/FeaturedProjectsMobile";

type Props = {};

const FeaturedProjects = (props: Props) => {
  const { current: projects } = useRef(
    projectData.slice(0, 3) as Required<Project>[]
  );
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [projectViewMode, setProjectViewMode] =
    useState<keyof FeaturedProject["image"]>("desktop");
  const [projectViewerOpen, setProjectViewerOpen] = useState<boolean>(false);

  const openProjectViewer = (mode: typeof projectViewMode) => {
    setProjectViewMode(mode);
    setProjectViewerOpen(true);
  }

  return (
    <Section
      id="projects"
      name="projects"
      padding="pt-12 pb-16 md:py-8 md:pb-[224px]"
    >
      <SectionHeader>Featured work</SectionHeader>
      <SectionDescription>
        A thoughtfully curated showcase of my finest achievements, exemplifying
        excellence and creativity.
      </SectionDescription>
      <div className="my-8">
        <FeaturedProjectViewer
          open={projectViewerOpen}
          setOpen={setProjectViewerOpen}
          project={projects[projectIndex]}
          projectViewMode={projectViewMode}
          setProjectViewMode={setProjectViewMode}
        />
        <FeaturedProjectsMobile
          projects={projects}
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
          openProjectViewer={openProjectViewer}
        />
        <FeaturedProjectsDesktop
          projects={projects}
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
          openProjectViewer={openProjectViewer}
        />
      </div>
    </Section>
  );
};

export default FeaturedProjects;
