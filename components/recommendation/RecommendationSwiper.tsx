"use client";

import React, { useEffect, useState } from "react";
import { RecommendationSwiperProps } from "./props";
import { useInView } from "react-intersection-observer";
import { a, useSpring, useSpringRef, useTransition } from "@react-spring/web";
import { useSpring as useThreeSpring } from "@react-spring/three";
import { percentToRadians } from "@/utils/convertion";
import EarthThree from "../react-three/EarthThree";
import LocationIcon from "../svg/abstract/LocationIcon";
import CustomTooltip from "../clickable/CustomTooltip";
import PrevIcon from "../svg/icons/PrevIcon";
import NextIcon from "../svg/icons/NextIcon";
import RecommendationCard from "./RecommendationCard";

type Props = {};

export const RecommendationSwiper = ({
  recommendations,
  recommendationIndex,
  setRecommedationIndex,
}: RecommendationSwiperProps) => {
  const [earthRotating, setEarthRotating] = useState<boolean>(true);
  const [earthLoaded, setEarthLoaded] = useState<boolean>(false);

  const [viewed, setViewed] = useState<boolean>(false);

  const { inView, ref: observedRef } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -128px",
  });

  const [earthViewedSpring, earthViewedSpringRef] = useSpring(() => ({
    opacity: 0,
  }));

  const cardTransitionRef = useSpringRef();
  const cardTransition = useTransition(recommendationIndex, {
    keys: null,
    ref: cardTransitionRef,
    from: { opacity: 0, y: 48 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -64, config: { tension: 300 } },
    exitBeforeEnter: true,
  });

  const [earthRotationSpring, earthRotationSpringRef] = useThreeSpring(() => ({
    rotation: [0, 0, 0],
  }));

  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
    }
  }, [inView, viewed]);

  useEffect(() => {
    if (inView) {
      cardTransitionRef.start();
      earthRotationSpringRef.start({
        rotation: recommendations[recommendationIndex].coordinates.map(
          (coord) => percentToRadians(coord)
        ),
        onStart: () => setEarthRotating(true),
        onRest: () => setEarthRotating(false),
        config: { tension: 350, friction: 75 },
      });
      earthViewedSpringRef.start({
        opacity: 1,
      });
    }
  }, [
    viewed,
    recommendationIndex,
    cardTransitionRef,
    earthRotationSpringRef,
    earthViewedSpringRef,
    inView,
    recommendations,
  ]);

  const nextRecommendation = () => {
    if (recommendationIndex < recommendations.length) {
      setRecommedationIndex((prevIndex) => prevIndex + 1);
    }
  };

  const previousRecommendation = () => {
    if (recommendationIndex > 0) {
      setRecommedationIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div
      className="flex flex-col gap-[36px] md:flex-row justify-between recommendations-swiper my-8 md:my-2 lg:mx-12 relative"
      id="recommendation-carousel"
      aria-label="recommendation carousel"
    >
      <a.div
        className="aspect-square w-full h-full max-w-[375px] max-h-[375px] lg:max-w-[450px] lg:max-h-[450px] relative self-center"
        ref={observedRef}
        style={earthViewedSpring}
      >
        <EarthThree
          rotationSpring={earthRotationSpring}
          setLoaded={setEarthLoaded}
        />
        {earthLoaded ? (
          <div
            className={`
            group/earth-pointer
            ${earthRotating ? "is-disabled" : "is-active"}
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
          `}
          >
            <div
              className="relative isolate"
              data-tooltip-id="active-recommendation-location"
              aria-describedby="active-recommendation-location"
            >
              <LocationIcon />
              <div
                className={`
              absolute -z-10
              h-[14px] aspect-square rounded-[50%]
              bg-grey-9 dark:bg-black
              ring-2 ring-blue-100 dark:ring-blue-d-200
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              ${earthRotating ? "scale-0" : "scale-100"}
              transition duration-300 pointer-events-none
            `}
              />
              <div
                className={`
                absolute -z-20
                h-[12px] aspect-square rounded-[50%]
                bg-black/20 dark:bg-white/30
                top-1/2 left-1/2 opacity-0 pointer-events-none
                ${earthRotating ? "" : "expanding-scale"}
              `}
              />
            </div>
            {!earthRotating ? (
              <CustomTooltip id="active-recommendation-location">
                <span>{recommendations[recommendationIndex].location}</span>
              </CustomTooltip>
            ) : null}
          </div>
        ) : null}
      </a.div>
      <div className="card-container min-h-[400px] grid place-items-center relative mr-0 md:mr-[24px] lg:mr-0 px-[12px] md:px-0 isolate">
        {cardTransition((style, cardIndex) => (
          <RecommendationCard
            recommendation={recommendations[cardIndex]}
            recommendationIndex={cardIndex}
            cardTransition={style}
          />
        ))}
        <button
          className={`
            z-10 group/icon 
            w-[48px] aspect-square rounded-[50%] grid place-items-center
            absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[12px] md:-translate-x-[36px] lg:-translate-x-[60px] backdrop-blur-sm

            ring-1 ring-grey-b dark:ring-grey-4
            bg-grey-d/50 dark:bg-grey-3/50
            
            hover:ring-grey-9 dark:hover:ring-grey-5
            hover:bg-grey-d/75 dark:hover:bg-grey-5/50

            disabled:pointer-events-none
            disabled:opacity-0 disabled:scale-75
            transition
          `}
          onClick={previousRecommendation}
          disabled={recommendationIndex === 0}
          aria-hidden={recommendationIndex === 0}
          name={`previous recommendation`}
          aria-label={`previous recommendation`}
          aria-controls="recommendation-carousel"
        >
          <PrevIcon />
        </button>
        <button
          className={`
            z-10 group/icon 
            w-[48px] aspect-square rounded-[50%] grid place-items-center 
            absolute top-1/2 right-0 -translate-y-1/2 translate-x-[12px] md:translate-x-[36px] lg:translate-x-[60px] backdrop-blur-[2px]

            ring-1 ring-grey-b dark:ring-grey-4
            bg-grey-d/50 dark:bg-grey-3/50
            
            hover:ring-grey-9 dark:hover:ring-grey-5
            hover:bg-grey-d/75 dark:hover:bg-grey-5/50

            disabled:pointer-events-none
            disabled:opacity-0 disabled:scale-75
            transition
          `}
          onClick={nextRecommendation}
          disabled={recommendationIndex === recommendations.length - 1}
          aria-hidden={recommendationIndex === recommendations.length - 1}
          name={`next recommendation`}
          aria-label={`next recommendation`}
          aria-controls="recommendation-carousel"
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
};
