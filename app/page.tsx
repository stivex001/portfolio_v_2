import MainPage from "@/components/MainPage";
import { Navigation } from "@/components/navigation/Navigation";
import SkipToContent from "@/components/SkipToContent";
import React from "react";
import { AboutMe } from "@/components/About/AboutMe";
import { Experience } from "@/components/experience/Experience";
import { Certification } from "@/components/experience/Certifications";

const Page = () => {
  return (
    <>
      <SkipToContent />
      <Navigation />
      <MainPage />
      <AboutMe />
      {/* <Experience /> */}
      <Certification />
    </>
  );
};

export default Page;
