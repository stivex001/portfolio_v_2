
import { SpringValue, TransitionFn } from "@react-spring/web";
import { Dispatch, LegacyRef, SetStateAction } from "react";
import { Project } from "../data/project";

export type FeaturedProject = Required<Project>;
type SpringAnimation<T = number> = Record<string, SpringValue<T>>;

type FeaturedProjectProps = {
  projectIndex: number;
  setProjectIndex: Dispatch<SetStateAction<number>>;
  projects: FeaturedProject[];
  openProjectViewer: (mode: keyof FeaturedProject['image']) => void;
}

// Viewer Props
export type FeaturedProjectViewerProps = {
  project: FeaturedProject;
  projectViewMode: keyof FeaturedProject['image'];
  setProjectViewMode: Dispatch<SetStateAction<keyof FeaturedProject['image']>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// Mobile Props
export type FeaturedProjectSwiperProps = FeaturedProjectProps;
export type FeaturedProjectCardProps = {
  project: FeaturedProject;
  active: boolean;
  activeOffset: number;
  headerRef: LegacyRef<HTMLAnchorElement>;
} & Pick<FeaturedProjectProps, 'openProjectViewer'>

//  Desktop Props
export type FeaturedProjectTabListProps = FeaturedProjectProps;
export type FeaturedProjectTagProps = {
  name: string;
}
export type FeaturedProjectTabPanelProps = {
  project: FeaturedProject;
  projectIndex: number;
  contentRevealTrail: Array<SpringAnimation>;
}
export type FeaturedProjectTabDisplayProps = {
  project: FeaturedProject;
  displayFrameTrail: Array<SpringAnimation>;
  displayTransition: TransitionFn<FeaturedProject, any>;
} & Pick<FeaturedProjectProps, 'openProjectViewer'>

export default FeaturedProjectProps;