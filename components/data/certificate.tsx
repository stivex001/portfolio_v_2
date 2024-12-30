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
    logo: "/assets/experience/coursera.jpeg",
    showcaseImage: "/assets/experience/meta.jpeg",
    title: "Meta Advanced React",
    subTitle: "Advanced React Development",
    details:
      "An online course offered by Meta through Coursera, focusing on advanced React concepts such as hooks, state management, performance optimization, and testing React applications.",
    timeRange: [new Date(2022, 3), new Date(2022, 6)],
    certificate: "https://coursera.org/share/071e032414229dda93ceede847ec47cf",
  },

  {
    logo: "/assets/experience/Udacity_logo.png",
    showcaseImage: "/assets/experience/fullstack.png",
    title: "Full Stack Nanodegree",
    subTitle: "Master Full Stack Development",
    details:
      "A comprehensive program by Udacity that covers front-end and back-end development, including frameworks like React and Flask, database management with SQL and PostgreSQL, and deployment strategies for web applications.",
    timeRange: [new Date(2022, 3), new Date(2022, 8)],
    certificate:
      "https://www.udacity.com/certificate/e/a271eb14-07a0-11ed-a3fc-a7340b293674",
  },

  {
    logo: "/assets/experience/Udacity_logo.png",
    showcaseImage: "/assets/experience/web_dev.png",
    title: "Web Development Foundation",
    subTitle: "Fundamentals of Web Development",
    details:
      "An introductory course that provided a strong foundation in web development, covering core concepts such as HTML, CSS, JavaScript, and basic responsive design techniques.",
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
