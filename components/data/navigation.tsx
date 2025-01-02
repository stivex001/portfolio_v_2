import GithubIcon from "../svg/icons/GithubIcon";
import MailIcon from "../svg/icons/GmailIcon";
import LinkedinIcon from "../svg/icons/LinkedinIcon";
import XIcon from "../svg/icons/XIcon";
import FeaturedIcon from "../svg/submenu/FeaturedIcon";
import FolderIcon from "../svg/submenu/FolderIcon";
import PathIcon from "../svg/submenu/PathIcon";
import ProfileIcon from "../svg/submenu/ProfileIcon";
import QuoteIcon from "../svg/submenu/QuoteIcon";


export type AnchorName =
  | "home"
  | "about"
  | "experience"
  | "certifications"
  | "projects"
  | "more-projects"
  | "recommendations"
  | "contact";

export interface Social {
  name: string;
  icon: React.ReactNode;
  link: string;
}
export interface Anchor {
  name: AnchorName;
  title: string;
  link: string;
}

export interface SubmenuAnchor extends Anchor {
  icon: React.ReactNode;
}

interface NavigationData {
  anchors: (Anchor & { submenuAnchors?: SubmenuAnchor[] })[];
  socials: Social[];
}

export const socials: NavigationData["socials"] = [
  {
    name: "X",
    icon: <XIcon />,
    link: "https://x.com/baistevoo",
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    link: "https://github.com/stivex001",
  },
  {
    name: "Gmail",
    icon: <MailIcon />,
    link: "mailto:stephenadeyemo@gmail.com",
  },
  {
    name: "Linkedin",
    icon: <LinkedinIcon />,
    link: "https://linkedin.com/in/adeyemostephen",
  },
];

const navigationData: NavigationData = {
  anchors: [
    {
      name: "home",
      title: "Home",
      link: "#home",
    },
    {
      name: "about",
      title: "About",
      link: "#about",
      submenuAnchors: [
        {
          name: "about",
          title: "About Me",
          link: "#about",
          icon: <ProfileIcon />,
        },
        {
          name: "certifications",
          title: "My Certificates",
          link: "#certifications",
          icon: <PathIcon />,
        },
        // {
        //   name: "experience",
        //   title: "My Experience as a Developer",
        //   link: "#experience",
        //   icon: <PathIcon />,
        // },
      ],
    },
    {
      name: "projects",
      title: "Projects",
      link: "#projects",
      submenuAnchors: [
        {
          name: "projects",
          title: "Featured Work",
          link: "#projects",
          icon: <FeaturedIcon />,
        },
        {
          name: "more-projects",
          title: "More Projects",
          link: "#more-projects",
          icon: <FolderIcon />,
        },
        {
          name: "recommendations",
          title: "Recommendations",
          link: "#recommendations",
          icon: <QuoteIcon />,
        },
      ],
    },
    {
      name: "contact",
      title: "Contact Me",
      link: "#contact",
    },
  ],
  socials: socials.slice(1, 3),
};

const mobileNavigationData: NavigationData = {
  ...navigationData,
  anchors: [
    {
      name: "home",
      title: "Home",
      link: "#home",
    },
    {
      name: "about",
      title: "About Me",
      link: "#about",
    },
    {
      name: "experience",
      title: "Experience",
      link: "#experience",
    },
    {
      name: "projects",
      title: "Projects",
      link: "#projects",
    },
    {
      name: "recommendations",
      title: "Recommendations",
      link: "#recommendations",
    },
    {
      name: "contact",
      title: "Contact Me",
      link: "#contact",
    },
  ],
};

export { navigationData };
export default mobileNavigationData;
