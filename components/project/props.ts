import { RefObject } from "react";
import { Project } from "../data/project";

export type ProjectGridProps = {
  projects: Array<Project>;
};

export type ProjectCardProps = {
  project: Project;
  headerRef: RefObject<HTMLAnchorElement>;
};

export type ProjectCardLinksProps = {
  link: Project["link"];
};
