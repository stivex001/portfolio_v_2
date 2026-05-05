/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { a, to, useTrail } from "@react-spring/web";
import { useObservedSprings } from "@/utils/useObservedSpring";
import animation from "./animations/animations";
import Button from "./clickable/Button";
import DownloadIcon from "./svg/icons/DownloadIcon";
import Link from "./clickable/Link";
import HomeBackground from "./home/HomeBackground";
import Section from "./sections/Section";
import { RESUME_DOWNLOAD_URL } from "@/lib/constants";

const STACK = ["React", "Next.js", "React Native", "TypeScript"];

const MainPage = () => {

  const {
    observedRef,
    springAnimate: [
      layoutTransformTrail,
      layoutOpacityTrail,
      bgLineGlowTrail,
      bgLineRevealTrail,
    ],
  } = useObservedSprings(
    [
      ...animation.layout.reveal.start,
      animation.bg.lineGlow.start,
      animation.bg.lineReveal.start,
    ],
    [
      ...animation.layout.reveal.end.map((x) => x()),
      animation.bg.lineGlow.end({ delay: 750 }),
      animation.bg.lineReveal.end({ delay: 750 }),
    ],
    [
      (cb: Function) => useTrail(5, cb, []),
      (cb: Function) => useTrail(5, cb, []),
      (cb: Function) => useTrail(9, cb, []),
      (cb: Function) => useTrail(9, cb, []),
    ]
  );

  const reveal = (index: number) => ({
    transform: to(layoutTransformTrail[index].y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacityTrail[index].opacity, (op: number) => `${op}`),
  });

  return (
    <Section
      name="home"
      id="content"
      padding="py-[140px] md:py-[180px]"
      sectionRef={observedRef}
    >
      {/* ── Availability badge ── */}
      <a.div
        style={reveal(0)}
        className="self-center flex items-center gap-2.5 mb-10 md:mb-12"
        aria-label="Availability status: open to new projects"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="font-mono text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-grey-3 dark:text-grey-b select-none">
          Open to new projects · Abuja, Nigeria
        </span>
      </a.div>

      {/* ── Name ── */}
      <a.header
        style={reveal(1)}
        className="self-center text-center mb-5 md:mb-6"
      >
        <h1 className="font-visby font-extrabold leading-[0.88] tracking-tight text-grey-1 dark:text-grey-d
          text-[clamp(56px,14vw,148px)]">
          STEPHEN<br />
          <span className="relative">
            ADEYEMO
            <span
              className="text-blue-200 dark:text-blue-d-200 select-none"
              aria-hidden="true"
            >
              .
            </span>
          </span>
        </h1>
      </a.header>

      {/* ── Role + stack pills ── */}
      <a.div
        style={reveal(2)}
        className="self-center flex flex-col items-center gap-3 mb-8 md:mb-10"
      >
        <p className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-grey-3 dark:text-grey-b">
          Product Engineer · Web &amp; Mobile
        </p>
        <div
          className="flex flex-wrap justify-center gap-2"
          aria-label="Core technologies"
        >
          {STACK.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] md:text-[11px] px-2.5 py-1 rounded-full
                border border-grey-ea dark:border-grey-4
                text-grey-3 dark:text-grey-9
                select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </a.div>

      {/* ── Bio ── */}
      <a.p
        style={reveal(3)}
        className="self-center text-center max-w-[440px] md:max-w-[580px]
          text-[16px] xl:text-[17px] leading-[1.75]
          text-grey-3 dark:text-grey-b mb-10 md:mb-12"
      >
        I design and ship web and mobile products from the ground up — turning
        complex requirements into interfaces that feel effortless. Every detail
        is intentional, every interaction earns its place.
      </a.p>

      {/* ── CTAs ── */}
      <a.div
        style={reveal(4)}
        className="self-center flex flex-wrap justify-center gap-4"
      >
        <Link href="#projects" internal variant="plain">
          <Button
            variant="blue"
            className="px-7 py-3 text-[14px] md:text-[15px] tracking-wide"
            tabIndex={-1}
          >
            View My Work
          </Button>
        </Link>
        <Link
          href={RESUME_DOWNLOAD_URL}
          variant="plain"
          download
          ariaLabel="Download CV as PDF"
        >
          <Button
            variant="black"
            className="px-7 py-3 text-[14px] md:text-[15px] tracking-wide"
          >
            <span>Download CV</span>
            <DownloadIcon />
          </Button>
        </Link>
      </a.div>

      <HomeBackground
        glowBackground={bgLineGlowTrail}
        revealBackground={bgLineRevealTrail}
      />
    </Section>
  );
};

export default MainPage;
