import MainPage from "@/components/MainPage";
import { Navigation } from "@/components/navigation/Navigation";
import SkipToContent from "@/components/SkipToContent";
import React from "react";
import { AboutMe } from "@/components/About/AboutMe";
import { Experience } from "@/components/experience/Experience";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <SkipToContent />
      <Navigation />
      <MainPage />
      <AboutMe />
      <Experience />
    </>
  );
};

export default Page;
