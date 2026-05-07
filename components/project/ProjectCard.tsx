"use client";

import React from "react";
import { ProjectCardProps } from "./props";
import Link from "../clickable/Link";
import NorthWestIcon from "../svg/abstract/NorthWestIcon";
import { formatDateTimeAttribute, formatMonthYear } from "@/utils/moment";

export const ProjectCard = ({ project, headerRef, index }: ProjectCardProps) => {
  const [initialDate, endDate] = project.timeRange;

  return (
    <article className="group/row flex items-start gap-4 md:gap-8 py-5 border-b border-grey-ea dark:border-grey-2 last:border-0 -mx-4 px-4 md:-mx-6 md:px-6 rounded-[6px] hover:bg-grey-fb dark:hover:bg-white/[0.03] transition-colors duration-200">
      {/* Index */}
      <span className="font-mono text-[10px] tracking-[0.12em] text-grey-9 dark:text-grey-5 pt-[5px] w-5 shrink-0 select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Name + Description */}
      <div className="flex-1 min-w-0">
        <Link href={project.link.live} variant="plain" linkRef={headerRef}>
          <h3 className="font-visby font-extrabold text-[18px] md:text-[20px] leading-[1.15] text-grey-1 dark:text-grey-d inline-flex items-start gap-[2px] group/title">
            <span>{project.name}</span>
            <span className="group-hover/title:translate-x-[2px] group-hover/title:-translate-y-[2px] transition-transform">
              <NorthWestIcon />
            </span>
          </h3>
        </Link>
        <p className="text-[14px] md:text-[15px] text-grey-4 dark:text-grey-9 mt-2 leading-[1.7] max-w-[500px]">
          {project.description}
        </p>
        {/* Tags — mobile only */}
        <div className="flex flex-wrap gap-1.5 mt-3 md:hidden">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-grey-ea dark:border-grey-4 text-grey-4 dark:text-grey-9"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tags + Date — desktop right column */}
      <div className="hidden md:flex flex-col items-end gap-2 pt-[3px] shrink-0">
        <div className="flex flex-wrap gap-1.5 justify-end max-w-[220px]">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-grey-ea dark:border-grey-4 text-grey-4 dark:text-grey-9 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-[0.1em] text-grey-9 dark:text-grey-5 whitespace-nowrap">
          <time dateTime={formatDateTimeAttribute(initialDate)}>
            {formatMonthYear(initialDate)}
          </time>
          {" – "}
          <time dateTime={formatDateTimeAttribute(endDate)}>
            {formatMonthYear(endDate)}
          </time>
        </span>
      </div>
    </article>
  );
};
