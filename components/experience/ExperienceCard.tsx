import React from "react";
import { ExperienceCardProps } from "./props";
import moment from "moment";
import { a } from "@react-spring/web";
import Link from "../clickable/Link";
import NorthWestIcon from "../svg/abstract/NorthWestIcon";

export const ExperienceCard = ({
  expertise,
  contentReveal,
}: ExperienceCardProps) => {
  const dates = expertise.timeRange.map((date) => moment(date).format("MMM YYYY"));
  const [initialDate, endDate] = expertise.timeRange;
  const dateDescription = `${moment(initialDate).format("MMMM YYYY")} to ${moment(endDate).format("MMMM YYYY")}`;

  return (
    <article className="ml-[24px] md:ml-[28px] font-normal flex-1 flex flex-col min-w-0">
      <a.header className="flex flex-col gap-1.5 mt-auto" style={contentReveal[0]}>
        <span className="block w-5 h-[2px] bg-blue-100 dark:bg-blue-d-200 mb-1" />
        <h3 className="font-visby font-extrabold text-[22px] md:text-[28px] leading-[1.1] text-grey-1 dark:text-grey-d">
          {expertise.title}
        </h3>
        <p className="font-mono text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-grey-3 dark:text-grey-b">
          {expertise.subTitle}
        </p>
      </a.header>

      <div className="flex flex-col gap-3 mb-auto mt-5">
        <a.p
          className="text-[15px] md:text-[16px] text-grey-3 dark:text-grey-b leading-[1.75] max-w-[560px]"
          style={contentReveal[1]}
        >
          {expertise.details}
        </a.p>
        {expertise.certificate && (
          <a.div style={contentReveal[2]} className="w-fit">
            <Link href={expertise.certificate}>
              {expertise.linkText ?? "Certificate of completion"}{" "}
              <NorthWestIcon variant="link" />
            </Link>
          </a.div>
        )}
        <a.p
          className="font-mono text-[11px] tracking-[0.1em] text-grey-4 dark:text-grey-9 md:visually-hidden"
          style={contentReveal[3]}
          aria-label={dateDescription}
          id="active-experience-date"
        >
          {dates[0]} – {dates[1]}
        </a.p>
      </div>
    </article>
  );
};
