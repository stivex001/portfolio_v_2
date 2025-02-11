// import PlanetfLogo from "../../components/svg/projects/planetf-.png";
// import LavishCuisineLogo from "../components/svg/projects/LavishCuisineLogo";

import AmazonCloneLogo from "../svg/projects/AmazonCloneLogo";

type ProjectTag =
  | "react"
  | "next-js"
  | "typescript"
  | "javascript"
  | "redux"
  | "mongodb"
  | "node-js"
  | "firebase"
  | "html"
  | "css"
  | "scss"
  | (string & {});

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  link: Record<"github" | "live", string>;
  timeRange: [Date, Date];
  logo?: string;
  image?: Record<"desktop" | "mobile", string>;
  themeColor?: string;
}

const projectData: Array<Project> = [
  {
    name: "PlanetF",
    logo: "/assets/projects/planetf-.png",
    image: {
      desktop: "/assets/projects/planetf_web.png",
      mobile: "/assets/projects/planetf_mobile.png",
    },
    timeRange: [new Date(2023, 3), new Date(2023, 11)],
    description:
      "PlanetF is an app that sells mobile data, Airtime, TV subscription payment, Educational payment, Electricity bill payment and confirmation of business registration for her users",
    tags: [
      "Nextjs",
      "Zustand",
      "Tanstack Query",
      "Taiwind CSS",
      "React Hook Form",
      "Zod",
    ],
    link: {
      github: "https://github.com/stivex001/planetF_v1",
      live: "https://www.planetf.ng",
    },
    themeColor: "[--rotating-gradient-border-color:#0079C9]",
  },
  {
    name: "CryptoCrest",
    logo: "/assets/projects/crest-logo.png",
    image: {
      desktop: "/assets/projects/cryptocrest-web.png",
      mobile: "/assets/projects/cryptocrest-mobile.png",
    },
    timeRange: [new Date(2024, 5), new Date(2024, 9)],
    description:
      "CryptoCrest is trading platform  provide tight spreads regardless of market volatility, delivering competitive and reliable pricing. We offer attractive spreads right across our product range, from 0.5 pips on EUR/USD, 1 point on key indices like the UK 100, and 0.2 points on Gold. Our margin rates start from 3.3% for forex, 5% for indices and commodities, and 20% for shares and treasuries.",
    tags: [
      "Reactjs",
      "Firebase",
      "Tanstack Query",
      "Taiwind CSS",
      "React Hook Form",
      "Zod",
    ],
    link: {
      github: "https://github.com/stivex001/Cryptocrest",
      live: "https://cryptocrest.vercel.app",
    },
    themeColor:
      "[--rotating-gradient-border-color:#666] dark:[--rotating-gradient-border-color:#999]",
  },
  {
    name: "Inventinspire Limited",
    logo: "/assets/projects/invent_logo.png",
    image: {
      desktop: "/assets/projects/invent_desktop.png",
      mobile: "/assets/projects/invent_mobile.png",
    },
    timeRange: [new Date(2022, 7), new Date(2022, 8)],
    description:
      "Inventinspire Limited is a platform that allows users to trade forex efficiently, providing real-time market data, advanced charting tools, and secure transaction processing.",
    tags: ["react", "redux", "typescript", "Firebase", "Tailwind Css"],
    link: {
      github: "https://github.com/godwinopara/trade-vista",
      live: "https://trade-vista-six.vercel.app/",
    },
    themeColor: "[--rotating-gradient-border-color:#C0841D]",
  },
  {
    name: "Mike Rik",
    timeRange: [new Date(2022, 11), new Date(2023, 1)],
    description:
      "Our mission is to redefine excellence in Agro-food processing by consistently delivering sustainable and innovative food products that cater to the diverse needs of our valued customers",
    tags: ["next-js", "tailwind css", "typescript"],
    link: {
      github: "https://github.com/stivex001/mike-rik",
      live: "https://www.mikerikltd.com.ng",
    },
  },
  {
    name: "Quiz App",
    timeRange: [new Date(2022, 5), new Date(2022, 6)],
    description:
      "Goreeva Quiz Hub is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events. No app install is required",
    tags: ["html", "css", "javascript"],
    link: {
      github: "https://github.com/stivex001/quiz_app",
      live: "https://goreeva-quiz-app.vercel.app/",
    },
  },
  {
    name: "Social X",
    timeRange: [new Date(2022, 11), new Date(2023, 1)],
    description:
      "BaiSocialX is a community-driven social media platform allowing users to publish photo and video content. It has many similarities to established social media platforms such as Facebook and Instagram, but there is one major difference: SocialX is a decentralised blockchain platform where everyone can earn cryptocurrency SOCX token rewards.",
    tags: ["react-js", "typescript", "css"],
    link: {
      github: "https://github.com/stivex001/bai_fitness",
      live: "https://baisocialx-y3yj.vercel.app/",
    },
  },
  // {
  //   name: "Nethub",
  //   timeRange: [new Date(2022, 6), new Date(2022, 8)],
  //   description:
  //     "A dynamic website featuring an extensive collection of movies sourced from a movie API implemented with robust filter and search capabilities",
  //   tags: ["html", "css", "javascript"],
  //   link: {
  //     github: "https://github.com/okoyecharles/Nethub",
  //     live: "https://okoyecharles.github.io/Nethub",
  //   },
  // },
  // {
  //   name: "Space Traveler Hub",
  //   timeRange: [new Date(2022, 6), new Date(2022, 7)],
  //   description:
  //     "An application that fetches and displays real-time rocket information, join missions and reserve rockets in this intuitive SPA",
  //   tags: ["react", "redux"],
  //   link: {
  //     github: "https://github.com/okoyecharles/space-travelers-hub",
  //     live: "https://charles-space-travelers.netlify.app",
  //   },
  // },
  // {
  //   name: "Type Effect Library",
  //   timeRange: [new Date(2022, 5), new Date(2022, 6)],
  //   description:
  //     "A light-weight, open-source typing-effect library that enables users to add typing effects to DOM text elements",
  //   tags: ["javascript"],
  //   link: {
  //     github: "https://github.com/okoyecharles/Type-Effect-Library",
  //     live: "https://okoyecharles.github.io/Type-Effect-Library",
  //   },
  // },
];

export default projectData;
