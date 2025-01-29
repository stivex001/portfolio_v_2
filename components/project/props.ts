import { Project } from "../data/project";

// RefObject<HTMLAnchorElement>

export type ProjectGridProps = {
  projects: Array<Project>;
};

export type ProjectCardProps = {
  project: Project;
  headerRef: any;
};

export type ProjectCardLinksProps = {
  link: Project["link"];
};
