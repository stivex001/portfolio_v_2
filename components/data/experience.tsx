import { getMonthDifference } from "@/utils/moment";

export interface Expertise {
  title: string;
  subTitle: string;
  details: string;
  timeRange: [Date, Date];
  certificate?: string;
  linkText?: string;
}

interface ExperienceData {
  expertise: Expertise[];
  startTime: Date;
  endTime: Date;
}

const expertise: Expertise[] = [
  {
    title: "5Star-INN-Company",
    subTitle: "Frontend Engineer (Contract)",
    details:
      "Led UI/UX rebranding and built real-time market data dashboards. Delivered referral systems, leaderboards, and PDF/Excel export features. Improved API response efficiency and independently led the frontend team, ensuring on-time delivery of key projects.",
    timeRange: [new Date(2023, 1), new Date(2026, 4)], // Feb 2023 – Present
  },
  {
    title: "Emplug Limited",
    subTitle: "Lead Frontend Engineer",
    details:
      "Led end-to-end frontend development, building 90%+ of product UIs across web and mobile. Drove architectural decisions, optimized performance by 40% through lazy loading and modular architecture, and mentored 5+ intern developers — improving code quality scores by 30%.",
    timeRange: [new Date(2023, 6), new Date(2025, 7)], // Jul 2023 – Aug 2025
  },
  {
    title: "MensayHub Ltd",
    subTitle: "Senior Frontend Engineer",
    details:
      "Led frontend for ArtisansHub, a two-sided marketplace connecting users with verified skilled artisans. Built discovery flows, booking UIs, and admin dashboards. Optimized performance through code-splitting and memoization in a fully remote environment.",
    timeRange: [new Date(2021, 1), new Date(2023, 6)], // Feb 2021 – Jul 2023
  },
  {
    title: "Platon",
    subTitle: "Junior Frontend Developer",
    details:
      "Converted Figma designs into responsive, accessible UIs and integrated REST APIs. Built reusable components and improved app performance, achieving 90+ Lighthouse scores across cross-browser environments.",
    timeRange: [new Date(2019, 6), new Date(2020, 0)], // Jul 2019 – Jan 2020
  },
];

const experienceData: ExperienceData = {
  expertise,
  startTime: new Date(2019, 0), // Jan 2019
  endTime: new Date(2026, 5),   // Jun 2026
};

export function experienceTimelineCalculator(expertise: Expertise) {
  const MONTH_HEIGHT = 32;
  const YEAR_HEIGHT = MONTH_HEIGHT * 12;
  const MONTH_DIFFERENCE = getMonthDifference(
    experienceData.startTime,
    experienceData.endTime
  );
  const YEAR_DIFFERENCE = Math.ceil(MONTH_DIFFERENCE / 12);

  const ACTIVE_EXPERTISE_MONTH_DIFFERENCE = getMonthDifference(
    expertise.timeRange[0],
    expertise.timeRange[1]
  );
  const MONTH_TIMELINE_HEIGHT =
    MONTH_HEIGHT * ACTIVE_EXPERTISE_MONTH_DIFFERENCE;
  const MONTH_TIMELINE_POS =
    getMonthDifference(experienceData.startTime, expertise.timeRange[0]) *
    MONTH_HEIGHT;

  const YEAR_TIMELINE_HEIGHT = MONTH_HEIGHT * MONTH_DIFFERENCE;
  const YEAR_TIMELINE_POS = MONTH_TIMELINE_POS + MONTH_TIMELINE_HEIGHT / 2;

  const FIRST_YEAR = experienceData.startTime.getFullYear();

  return {
    YEAR_TIMELINE_POS,
    MONTH_TIMELINE_HEIGHT,
    YEAR_TIMELINE_HEIGHT,
    MONTH_DIFFERENCE,
    MONTH_HEIGHT,
    YEAR_HEIGHT,
    YEAR_DIFFERENCE,
    FIRST_YEAR,
  };
}

export default experienceData;
