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
      <SectionHeader>About</SectionHeader>
      <div className="grid gap-6 md:grid-cols-10 my-6 md:my-[96px] xl:mt-[128px] xl:mb-[256px]">
        <AboutImage
          imageAnimate={imageReveal}
          plusReveal={bgPlusReveal}
          lineAnimate={[bgLineReveal, bgLineGlow]}
        />
        <div
          className="grid gap-8 about-content md:col-span-6 md:grid-cols-2"
          ref={observedRef}
        >
          {/* ── Introduction ── */}
          <article className="md:col-span-2">
            <a.h3 style={headerReveal(0)} className="mb-3">
              <span className="block w-5 h-[2px] bg-blue-100 dark:bg-blue-d-200 mb-2" />
              <span className="text-[15px] font-mono tracking-[0.14em] uppercase text-grey-3 dark:text-grey-b">
                Introduction
              </span>
            </a.h3>
            <a.div
              style={layoutReveal()}
              className="text-[15px] md:text-[16px] leading-[1.75] text-grey-3 dark:text-grey-b space-y-4"
            >
              <CustomTooltip id="about-info-1">
                <span className="underline">baistevoo</span> — my handle across the web.
              </CustomTooltip>
              <p>
                I&apos;m{" "}
                <strong className="text-grey-1 dark:text-grey-d font-semibold whitespace-nowrap">
                  Stephen Segun Adeyemo
                </strong>{" "}
                <button
                  className="group/info-button inline relative top-[3px]"
                  name="show extra info"
                  data-tooltip-id="about-info-1"
                >
                  <InfoIcon />
                </button>
                {" "}— a{" "}
                <strong className="text-grey-1 dark:text-grey-d font-semibold">
                  Product Engineer
                </strong>{" "}
                focused on web and mobile, based in Abuja, Nigeria. I build
                across React, Next.js, and React Native, with a focus on
                interfaces that are fast, accessible, and genuinely satisfying
                to use.
              </p>
              <p>
                I care about the overlap between design and engineering.
                Whether architecting a system or sweating a micro-interaction,
                the goal is the same: ship something worth being proud of. If
                that kind of thinking fits what you&apos;re building,{" "}
                <Link href="mailto:stephenadeyemo@gmail.com">
                  I&apos;m open to new projects
                </Link>
                .
              </p>
            </a.div>
          </article>

          {/* ── Tech Stack ── */}
          <article>
            <a.h3 style={headerReveal(1)} className="mb-3">
              <span className="block w-5 h-[2px] bg-blue-100 dark:bg-blue-d-200 mb-2" />
              <span className="text-[15px] font-mono tracking-[0.14em] uppercase text-grey-3 dark:text-grey-b">
                Tech Stack
              </span>
            </a.h3>
            <AboutList items={aboutData.technologies} />
          </article>

          {/* ── Tooling ── */}
          <article>
            <a.h3 style={headerReveal(2)} className="mb-3">
              <span className="block w-5 h-[2px] bg-blue-100 dark:bg-blue-d-200 mb-2" />
              <span className="text-[15px] font-mono tracking-[0.14em] uppercase text-grey-3 dark:text-grey-b">
                Tooling
              </span>
            </a.h3>
            <AboutList items={aboutData.tools} />
          </article>
        </div>
      </div>
    </Section>
  );
};
