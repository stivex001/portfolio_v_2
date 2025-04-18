/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { a, to, useSpring, useTrail } from "@react-spring/web";
import SectionHeader from "../sections/SectionHeader";
import Section from "../sections/Section";
import AboutImage from "./AboutImage";
import { useObservedSprings } from "@/utils/useObservedSpring";
import animation from "../animations/animations";
import CustomTooltip from "../clickable/CustomTooltip";
import InfoIcon from "../svg/abstract/InfoIcon";
import Link from "../clickable/Link";
import AboutList from "./AboutList";
import aboutData from "../data/about";

type Props = {};

export const AboutMe = (props: Props) => {
  const {
    observedRef,
    springAnimate: [
      headerTransform,
      headerOpacity,
      layoutTransform,
      layoutOpacity,
      imageTransform,
      imageOpacity,
      bgLineGlow,
      bgLineReveal,
      bgPlusReveal,
    ],
  } = useObservedSprings(
    [
      ...animation.layout.reveal.start,
      ...animation.layout.revealSlow.start,
      ...animation.layout.revealSlow.start,
      animation.bg.lineGlow.start,
      animation.bg.lineReveal.start,
      animation.bg.plusReveal.start,
    ],
    [
      ...animation.layout.reveal.end.map((x) => x()),
      ...animation.layout.revealSlow.end.map((x) => x({ delay: 200 })),
      ...animation.layout.revealSlow.end.map((x) => x()),
      animation.bg.lineGlow.end({ config: { tension: 75 }, delay: 450 }),
      animation.bg.lineReveal.end({ delay: 450 }),
      animation.bg.plusReveal.end({ delay: 0 }),
    ],
    [
      (cb: Function) => useTrail(3, cb, []),
      (cb: Function) => useTrail(3, cb, []),
      useSpring,
      useSpring,
      useSpring,
      useSpring,
      useSpring,
      useSpring,
      (cb: Function) => useTrail(4, cb, []),
    ]
  );

  const headerReveal = (index: number) => ({
    transform: to(headerTransform[index].y, (y) => `translateY(${y}px)`),
    opacity: to(headerOpacity[index].opacity, (op: number) => `${op}`),
  });

  const layoutReveal = () => ({
    transform: to(layoutTransform.y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacity.opacity, (op: number) => `${op}`),
  });

  const imageReveal = () => ({
    transform: to(imageTransform.y, (y) => `translateY(${y}px)`),
    opacity: to(imageOpacity.opacity, (op: number) => `${op}`),
  });

  return (
    <Section name="about" id="about" padding="pt-12 pb-16 md:py-8">
      <SectionHeader>About me</SectionHeader>
      <div className=" grid gap-6 md:grid-cols-10 my-6 md:my-[96px] xl:mt-[128px] xl:mb-[256px]">
        <AboutImage
          imageAnimate={imageReveal}
          plusReveal={bgPlusReveal}
          lineAnimate={[bgLineReveal, bgLineGlow]}
        />
        <div
          className="grid gap-6 about-content md:col-span-6 md:grid-cols-2"
          ref={observedRef}
        >
          <article className="md:col-span-2">
            <a.h3
              className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2"
              style={headerReveal(0)}
            >
              Introduction
            </a.h3>
            <a.div style={layoutReveal()}>
              <CustomTooltip id="about-info-1">
                <span className="underline">baistevoo</span> is my nickname.
                
              </CustomTooltip>
              <a.p className="mb-4">
                My name is{" "}
                <strong
                  className="text-grey-1 dark:text-grey-d whitespace-nowrap"
                  aria-describedby="about-info-1"
                >
                  Stephen Segun Adeyemo
                </strong>{" "}
                <button
                  className="group/info-button inline relative top-[3px]"
                  name="show extra info"
                  // aria-label="'Kosi' is short for 'Kosisochukwu'"
                  data-tooltip-id="about-info-1"
                >
                  <InfoIcon />
                </button>{" "}
                , I&apos;m a{" "}
                <strong className="text-grey-1 dark:text-grey-d whitespace-nowrap">
                  Software Engineer
                </strong>{" "}
                (front-end heavy) based in Nigeria. I spend most of my time
                 coding up things for the web, and learning
                algorithms.
              </a.p>
              <a.p>
                My goal is to deliver, through code, unique and innovative
                solutions to complex problems. If my portfolio interests you, or
                you need an enthusiastic developer on your team,{" "}
                <Link href="mailto:stephenadeyemo@gmail.com">
                  I am available for hire
                </Link>
                .
              </a.p>
            </a.div>
          </article>
          <article>
            <a.h3
              className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2"
              style={headerReveal(1)}
            >
              Languages & Technologies
            </a.h3>
            <AboutList items={aboutData.technologies} />
          </article>
          <article>
            <a.h3
              className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2"
              style={headerReveal(2)}
            >
              Tools & Methods
            </a.h3>
            <AboutList items={aboutData.tools} />
          </article>
        </div>
      </div>
    </Section>
  );
};
