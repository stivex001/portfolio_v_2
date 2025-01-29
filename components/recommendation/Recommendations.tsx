"use client"

import React, { useState } from "react";
import Section from "../sections/Section";
import SectionHeader from "../sections/SectionHeader";
import SectionDescription from "../sections/SectionDescription";
import recommendationData from "./recommendation";
import { RecommendationSwiper } from "./RecommendationSwiper";

type Props = {};

const Recommendations = (props: Props) => {
    const recommedations = recommendationData;
    const [recommedationIndex, setRecommedationIndex] = useState<number>(0);
    
  return (
    <Section
      name="recommendations"
      id="recommendations"
      padding="pt-12 pb-16 md:py-8 md:pb-[224px]"
    >
      <SectionHeader mode="standalone">
        Working <span className="text-blue-100 dark:blue-d-200">remotely</span>{" "}
        with professionals across the globe
      </SectionHeader>
      <SectionDescription>
        Endorsements from skilled developers I've had the honor of working with.
      </SectionDescription>
      <RecommendationSwiper
        recommendations={recommedations}
        recommendationIndex={recommedationIndex}
        setRecommedationIndex={setRecommedationIndex}
      />
      {/* <RecommendationControl
        recommendations={recommedations}
        recommendationCount={recommedations.length}
        recommendationIndex={recommedationIndex}
        setRecommedationIndex={setRecommedationIndex}
      /> */}
    </Section>
  );
};

export default Recommendations;
