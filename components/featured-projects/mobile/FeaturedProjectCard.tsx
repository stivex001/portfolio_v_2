import moment from "moment";
import FeaturedProjectTag from "../FeaturedProjectTag";
import { a } from "@react-spring/web";
import { FeaturedProjectCardProps } from "../props";
import Link from "@/components/clickable/Link";
import NorthWestIcon from "@/components/svg/abstract/NorthWestIcon";
import { formatDateTimeAttribute, formatMonthYear } from "@/utils/moment";
import DesktopIcon from "@/components/svg/icons/DesktopIcon";
import MobileIcon from "@/components/svg/icons/MobileIcon";
import Button from "@/components/clickable/Button";
import LiveIcon from "@/components/svg/icons/LiveIcon";
import GithubIcon from "@/components/svg/icons/GithubIcon";
export default function FeaturedProjectCard({
  project,
  active,
  activeOffset,
  openProjectViewer,
  headerRef,
}: FeaturedProjectCardProps) {
  const cardShadowByOffset: Record<string, `after:bg-black/${string}`> = {
    "0": "after:bg-black/0",
    "1": "after:bg-black/5 dark:after:bg-black/20",
    "2": "after:bg-black/10 dark:after:bg-black/30",
  };
  const [initialDate, endDate] = project.timeRange;
  const dateDescription = `${moment(initialDate).format("MMMM YYYY")} to ${moment(
    endDate
  ).format("MMMM YYYY")}`;

  return (
    <div
      className={`
        card-container m-auto w-fit relative after:absolute after:inset-0 after:rounded-[10px]
        after:transition-colors after:pointer-events-none
        ${cardShadowByOffset[String(activeOffset)]}
      `}
      aria-hidden={!active}
    >
      <article
        className={`
          p-6 rounded-[10px] max-w-[320px]

          rotating-gradient-border 
          [--border-color:#ddd] dark:[--border-color:#444]
          [--background-color:#eaeaea] [--background-color-2:#fff] 
          dark:[--background-color:#222] dark:[--background-color-2:#000] 
          ${active ? "" : "disable-rotating-gradient-border"}
          
          ${project.themeColor}
        `}
      >
        <header className={"grid gap-1"}>
          <div className="mb-6 logo">{project.logo}</div>
          <h3 className="font-visby font-extrabold text-[20px] text-grey-1 dark:text-grey-d group/header">
            <Link
              href={project.link.live}
              variant="plain"
              tabIndex={active ? 0 : -1}
              linkRef={headerRef}
            >
              <span>{project.name}</span>
              <span className="group-hover/header:translate-x-[2px] group-hover/header:-translate-y-[2px] transition-transform">
                <NorthWestIcon />
              </span>
            </Link>
          </h3>
          <div className="flex flex-wrap gap-2 tags" aria-hidden>
            {project.tags.map((tag) => (
              <FeaturedProjectTag name={tag} key={tag} />
            ))}
          </div>
          <span
            className="text-[14px] text-grey-9 dark:text-grey-5"
            aria-label={dateDescription}
          >
            <time dateTime={formatDateTimeAttribute(project.timeRange[0])}>
              {formatMonthYear(project.timeRange[0])}
            </time>
            {" "}-{" "}
            <time dateTime={formatDateTimeAttribute(project.timeRange[1])}>
              {formatMonthYear(project.timeRange[1])}
            </time>
          </span>
        </header>
        <div className={"flex gap-2 my-4"}>
          <button
            className={
              "bg-grey-ea dark:bg-grey-15 ring-1 ring-grey-b dark:ring-grey-4 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-6 transition-colors"
            }
            aria-label="show desktop view"
            onClick={() => openProjectViewer("desktop")}
            tabIndex={active ? 0 : -1}
          >
            <div
              className={`
              p-2 text-sm text-grey-1 dark:text-grey-d 
              group-hover/icon:text-black dark:group-hover/icon:text-white 
              border-r border-grey-b dark:border-grey-4 
              group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-6 leading-[16px]  transition-all
            `}
            >
              Desktop
            </div>
            <div className={"p-2"}>
              <DesktopIcon />
            </div>
          </button>
          <button
            className={
              "bg-grey-ea dark:bg-grey-15 ring-1 ring-grey-b dark:ring-grey-4 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-6 transition-colors"
            }
            aria-label="show mobile view"
            onClick={() => openProjectViewer("mobile")}
            tabIndex={active ? 0 : -1}
          >
            <div
              className={`
              p-2 text-sm text-grey-1 dark:text-grey-d 
              group-hover/icon:text-black dark:group-hover/icon:text-white 
              border-r border-grey-b dark:border-grey-4 
              group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-6 leading-[16px]  transition-all
            `}
            >
              Mobile
            </div>
            <div className={"p-2"}>
              <MobileIcon />
            </div>
          </button>
        </div>
        <a.p className="mb-6">{project.description}</a.p>
        <div className="flex flex-wrap gap-4 action-buttons">
          <Link href={project.link.live} tabIndex={active ? 0 : -1} variant="plain">
            <Button variant="blue" tabIndex={-1}>
              <span>Live Website</span>
              <LiveIcon />
            </Button>
          </Link>
          <Link href={project.link.github} tabIndex={active ? 0 : -1} variant="plain">
            <Button variant="black" tabIndex={-1}>
              <span>View on Github</span>
              <GithubIcon />
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}