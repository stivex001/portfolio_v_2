/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Section from "../sections/Section";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../sections/SectionHeader";
import SectionDescription from "../sections/SectionDescription";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ExperienceCard } from "./ExperienceCard";
import experienceData, { experienceTimelineCalculator } from "../data/experience";
import { useSpring, useTrail } from "@react-spring/web";
import { ExperienceControl } from "./ExperienceControl";

type Props = {};

export const Experience = (props: Props) => {
  const [expertiseIndex, setExpertiseIndex] = useState<number>(0);
  const expertise = experienceData.expertise[expertiseIndex];
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -512px",
  });

  const [viewed, setViewed] = useState<boolean>(false);

  const { YEAR_TIMELINE_POS, MONTH_TIMELINE_HEIGHT } =
    experienceTimelineCalculator(expertise);

  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
    }
  }, [inView, viewed]);

  useEffect(() => {
    if (inView) {
      CRApi.set({ y: 32, opacity: 0 });
      CRApi.start({
        y: 0,
        opacity: 1,
        delay: 500,
        config: { tension: 400, friction: 40 },
      });
      YTSApi.update({ y: -YEAR_TIMELINE_POS });
      YTSApi.start();
      MTHApi.update({ height: MONTH_TIMELINE_HEIGHT });
      MTHApi.start();
      MTMApi.set({ opacity: 0 });
      MTMApi.start({ opacity: 1 });
    }
  }, [viewed, expertiseIndex]);

  const [contentReveal, CRApi] = useTrail(4, { from: { y: 32, opacity: 0 } }, []);

  const [yearTimeLineScroll, YTSApi] = useSpring(() => ({ from: { y: -340 } }), []);
  const [monthTimeLineHeight, MTHApi] = useSpring(() => ({ from: { height: 0 } }), []);
  const [monthTimeLineMarker, MTMApi] = useSpring(() => ({ opacity: 0 }));

  return (
    <Section
      name="experience"
      id="experience"
      sectionRef={ref}
      padding="pt-12 pb-16 md:pt-8 md:pb-[224px]"
    >
      <SectionHeader>Experience</SectionHeader>
      <SectionDescription>
        Five years across contract, lead, and senior roles — shipping products
        that real people use, in fast-moving remote teams.
      </SectionDescription>
      <div aria-label="experience carousel">
        <div
          className="relative flex experience-content"
          id={`experience-item-${expertiseIndex + 1}`}
          role="tabpanel"
        >
          <ExperienceTimeline
            expertise={expertise}
            yearTimeLineScroll={yearTimeLineScroll}
            monthTimeLineHeight={monthTimeLineHeight}
            monthTimeLineMarker={monthTimeLineMarker}
          />
          <ExperienceCard expertise={expertise} contentReveal={contentReveal} />
        </div>
      </div>
      <ExperienceControl
        expertiseData={experienceData.expertise}
        expertiseIndex={expertiseIndex}
        setExpertiseIndex={setExpertiseIndex}
        expertiseCount={experienceData.expertise.length}
      />
    </Section>
  );
};
