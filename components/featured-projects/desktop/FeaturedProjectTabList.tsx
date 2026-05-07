"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { a } from "@react-spring/web";
import { useSpring } from "@react-spring/web";
import { FeaturedProjectTabListProps } from "../props";
import { useRef } from "react";
import Image from "next/image";

export default function FeaturedProjectTabList({
  projects,
  projectIndex,
  setProjectIndex,
}: FeaturedProjectTabListProps) {
  const PROJECT_HEIGHT = (1 / projects.length) * 100;
  const projectMarkerPos = PROJECT_HEIGHT / 2 + projectIndex * PROJECT_HEIGHT;
  const projectMarkerSpring = useSpring({ pos: projectMarkerPos });

  const rotatingGradientBorderStyles = `
    rotating-gradient-border
    [--border-color:#ddd] dark:[--border-color:#333]
    [--background-color:#eaeaea] dark:[--background-color:#151515]
    ${projects[projectIndex].themeColor}
  `;

  const projectTabTriggerRefs = projects.map(() =>
    useRef<HTMLButtonElement>(null)
  );
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    let newProjectIndex = -1;
    if (event.key === "ArrowLeft") {
      newProjectIndex =
        (projectIndex + (projects.length - 1)) % projects.length;
    } else if (event.key === "ArrowRight") {
      newProjectIndex = (projectIndex + 1) % projects.length;
    } else return;
    setProjectIndex(newProjectIndex);
    projectTabTriggerRefs[newProjectIndex].current?.focus();
  }

  return (
    <div
      className="featured-project-list border-b lg:border-r lg:border-b-0 last:border-none border-grey-d dark:border-grey-2  col-span-12 lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 [grid-auto-rows:1fr] relative isolate z-10"
      role="tablist"
      onKeyDown={handleKeyDown}
    >
      <a.span
        className={`
        absolute
        left-3 top-0 -translate-y-1/2
        w-[calc(100%-24px)]
        rounded-[5px] -z-10
        hidden lg:block
        ${rotatingGradientBorderStyles}
      `}
        style={{
          top: projectMarkerSpring.pos.to((pos) => `${pos}%`),
          height: `calc(${PROJECT_HEIGHT}% - 24px)`,
        }}
      />
      {projects.map((project, index) => (
        <button
          className="project-item ring-1 ring-grey-ea dark:ring-grey-2 hover:ring-grey-b dark:hover:ring-grey-4 px-4 py-3 flex flex-col items-start gap-1 cursor-pointer first-of-type:rounded-ss-[10px] last-of-type:rounded-se-[10px] lg:last-of-type:rounded-es-[10px] lg:last-of-type:rounded-se-none transition-shadow"
          role="tab"
          ref={projectTabTriggerRefs[index]}
          id={`featured-project-${index + 1}-trigger`}
          key={project.name}
          tabIndex={index === projectIndex ? 0 : -1}
          name={`project ${index + 1} - ${projects[index].name}`}
          aria-label={`project ${index + 1} - ${projects[index].name}`}
          aria-controls={`featured-project-${index + 1}`}
          aria-selected={index === projectIndex}
          onClick={() => setProjectIndex(index)}
        >
          <div className="mb-1 logo">
            <Image
              src={project.logo}
              alt={project.name}
              width={32}
              height={32}
              className="rounded-md"
            />
          </div>
          <h3 className="font-visby font-extrabold text-[15px] leading-[1.2] text-grey-1 dark:text-grey-d">
            {project.name}
          </h3>
        </button>
      ))}
    </div>
  );
}
