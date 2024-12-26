import { getMonthDifference } from "@/utils/moment";

export interface Certificate {
  logo: string;
  title: string;
  subTitle: string;
  details: string;
  timeRange: [Date, Date];
  certificate: string;
  showcaseImage: string;
}

interface CertificateData {
  certificate: Certificate[];
  startTime: Date;
  endTime: Date;
}

const certificate: Certificate[] = [
  {
    logo: "/assets/experience/alx.jpeg",
    showcaseImage: "/assets/experience/alx_certificate.png",
    title: "Alx Software Engineering Programme",
    subTitle: "Software Engineering",
    details:
      "Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
    timeRange: [new Date(2022, 1), new Date(2023, 2)],
    certificate:
      "https://drive.google.com/file/d/1JnYqEnYiRlML8DVMdu_04tf72FKET_1J/view?usp=sharing",
  },
  {
    logo: "/assets/experience/alx_certificate.png",
    showcaseImage: "/assets/experience/alx_certificate.png",
    title: "Meta Advance React",
    subTitle: "Software Development Methodologies",
    details:
      "An online non-credit course authorized by the University of Minnesota and offered through Coursera, on Important Processes and Methodologies in Software Development.",
    timeRange: [new Date(2022, 3), new Date(2022, 6)],
    certificate:
      "https://coursera.org/share/071e032414229dda93ceede847ec47cf",
  },
  {
    logo: "/assets/experience/alx_certificate.png",
    showcaseImage: "/assets/experience/linkedin-learning-showcase.webp",
    title: "Full Stack nanodegree",
    subTitle: "Become a Software Developer",
    details:
      "A course that provides a broad perspective on core technologies for web development, software development, and databases. It introduced a bigger picture of how development careers work.",
    timeRange: [new Date(2022, 6), new Date(2022, 7)],
    certificate:
      "https://drive.google.com/file/d/1_TH9jAT91AS_A-2Unh74u9BlqPWzd3f-/view?usp=sharing",
  },
  {
    logo: "/assets/experience/Udacity_logo.png",
    showcaseImage: "/assets/experience/web_dev.png",
    title: "Web Development Foundation",
    subTitle: "Fundamentals of Web Development",
    details:
      "I mastered the basics of Web Development. ",
    timeRange: [new Date(2022, 3), new Date(2022, 5)],
    certificate:
      "https://drive.google.com/file/d/1K0OZm0nKYoRemY7SKg_op4NP1BWkKmmv/view?usp=sharing",
  },
];

const certificateData: CertificateData = {
  certificate,
  startTime: new Date(2021, 0),
  endTime: new Date(2024, 0),
};

export function certificateTimelineCalculator(certificate: Certificate) {
  const MONTH_HEIGHT = 32;
  const YEAR_HEIGHT = MONTH_HEIGHT * 12;
  const MONTH_DIFFERENCE = getMonthDifference(
    certificateData.startTime,
    certificateData.endTime
  );
  const YEAR_DIFFERENCE = Math.ceil(MONTH_DIFFERENCE / 12);

  const ACTIVE_EXPERTISE_MONTH_DIFFERENCE = getMonthDifference(
    certificate.timeRange[0],
    certificate.timeRange[1]
  );
  const MONTH_TIMELINE_HEIGHT =
    MONTH_HEIGHT * ACTIVE_EXPERTISE_MONTH_DIFFERENCE;
  const MONTH_TIMELINE_POS =
    getMonthDifference(certificateData.startTime, certificate.timeRange[0]) *
    MONTH_HEIGHT;

  const YEAR_TIMELINE_HEIGHT = MONTH_HEIGHT * MONTH_DIFFERENCE;
  const YEAR_TIMELINE_POS = MONTH_TIMELINE_POS + MONTH_TIMELINE_HEIGHT / 2;

  const FIRST_YEAR = certificateData.startTime.getFullYear();

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

export default certificateData;
