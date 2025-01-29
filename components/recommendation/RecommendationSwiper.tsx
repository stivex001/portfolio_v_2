"use client";

import React, { useEffect, useState } from "react";
import { RecommendationSwiperProps } from "./props";
import { useInView } from "react-intersection-observer";
import { a, useSpring, useSpringRef, useTransition } from "@react-spring/web";
import { useSpring as useThreeSpring } from "@react-spring/three";
import { percentToRadians } from "@/utils/convertion";

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
  }, [inView]);

  useEffect(() => {
    if (inView) {
      cardTransitionRef.start();
      earthRotationSpringRef.start({
        rotation: recommendations[recommendationIndex].coordinates.map((coord) =>
          percentToRadians(coord)
        ),
        onStart: () => setEarthRotating(true),
        onRest: () => setEarthRotating(false),
        config: { tension: 350, friction: 75 },
      });
      earthViewedSpringRef.start({
        opacity: 1,
      });
    }
  }, [viewed, recommendationIndex]);

  return (
    <div
      className="flex flex-col gap-[36px] md:flex-row justify-between recommendations-swiper my-8 md:my-2 semi-lg:mx-12 relative"
      id="recommendation-carousel"
      aria-label="recommendation carousel"
    >
      <a.div
        className="aspect-square w-full h-full max-w-[375px] max-h-[375px] semi-lg:max-w-[450px] semi-lg:max-h-[450px] relative self-center"
        ref={observedRef}
        style={earthViewedSpring}
      ></a.div>
    </div>
  );
};
