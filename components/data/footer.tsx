
import ThemeDarkIcon from "../svg/icons/ThemeDarkIcon";
import ThemeLightIcon from "../svg/icons/ThemeLightIcon";
import ThemeSystemIcon from "../svg/icons/ThemeSystemIcon";
import { Social, socials } from "./navigation";

interface FooterData {
  creationYear: string;
  sourceCode: string;
  themes: { name: string; icon: React.ReactNode }[];
  socials: Social[];
}

const footerData: FooterData = {
  creationYear: "2025",
  sourceCode: "https://github.com/stivex001/portfolio_v_2",
  themes: [
    {
      name: "dark",
      icon: <ThemeDarkIcon />,
    },
    {
      name: "light",
      icon: <ThemeLightIcon />,
    },
    {
      name: "system",
      icon: <ThemeSystemIcon />,
    },
  ],
  socials: socials,
};

export default footerData;
