import { Project } from "../data/project";

export type ProjectGridProps = {
  projects: Array<Project>;
};

export type ProjectCardProps = {
  project: Project;
  headerRef: any;
  index: number;
};

export type ProjectCardLinksProps = {
  link: Project["link"];
};
