"use client";
import React from "react";
import Section from "../sections/Section";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../sections/SectionHeader";
import SectionDescription from "../sections/SectionDescription";

type Props = {};

export const Experience = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -512px",
  });

  return (
    <Section
      name="experience"
      id="experience"
      sectionRef={ref}
      padding="pt-12 pb-16 md:pt-8 md:pb-[224px]"
    >
      <SectionHeader mode="standalone">
        My <span className="text-blue-100 dark:blue-d-200">experience</span> as
        a developer
      </SectionHeader>
      <SectionDescription>
        A display of my growth as a frontend developer, showcasing the progress
        I have achieved and the valuable experience I`&apos;ve acquired
      </SectionDescription>
    </Section>
  );
};
