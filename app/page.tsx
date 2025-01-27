import MainPage from "@/components/MainPage";
import { Navigation } from "@/components/navigation/Navigation";
import SkipToContent from "@/components/SkipToContent";
import React from "react";
import { AboutMe } from "@/components/About/AboutMe";
import { Certification } from "@/components/experience/Certifications";
import FeaturedProjects from "@/components/featured-projects/FeaturedProjects";
import Projects from "@/components/project/Projects";

const Page = () => {
  return (
    <>
      <SkipToContent />
      <Navigation />
      <MainPage />
      <AboutMe />
      {/* <Experience /> */}
      <Certification />
      <FeaturedProjects />
      <Projects />
    </>
  );
};

export default Page;
