/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { a, to, useTrail } from "@react-spring/web";
import Section from "./Section";
import { useObservedSprings } from "@/utils/useObservedSpring";
import animation from "./animations/animations";
import Button from "./clickable/Button";
import DownloadIcon from "./svg/icons/DownloadIcon";
import Link from "./clickable/Link";
import HomeBackground from "./home/HomeBackground";

type Props = {};

const MainPage = (props: Props) => {
  const exportFormat = "pdf";
  const resumeDownloadLink = `https://docs.google.com/document/d/edit?usp=sharing/${process.env.NEXT_PUBLIC_RESUME_GOOGLE_DOC_ID}/export?format=${exportFormat}`;

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

  const layoutReveal = (index: number) => ({
    transform: to(layoutTransformTrail[index].y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacityTrail[index].opacity, (op: number) => `${op}`),
  });

  return (
    <Section
      name="home"
      id="content"
      padding="py-[192px] md:py-[192px]"
      sectionRef={observedRef}
    >
      <header className="self-center text-center">
        <a.h1
          className="text-grey-1 dark:text-grey-d text-[60px] md:text-[72px] lg:text-[100px] leading-[1] font-extrabold mx-6"
          style={layoutReveal(1)}
        >
          <div className="inline-block relative w-0">
            <a.div
              className={`
                select-none font-extrabold font-mono
                text-grey-2 dark:text-grey-b
                text-[20px] md:text-[24px] 
                absolute -top-[8px] -left-[40px]
              `}
              style={layoutReveal(0)}
              aria-label={"I AM"}
            >
              I
              <span className="text-blue-200 dark:text-blue-d-200">&apos;</span>
              m
            </a.div>
            <span className="invisible">I`&apos;m</span>
          </div>
          <span className="font-visby">STEPHEN ADEYEMO</span>
        </a.h1>
        <a.h2
          className="uppercase dark:text-grey-6 font-[500] text-[15px] lg:text-base tracking-wide text-center font-lato"
          style={layoutReveal(2)}
        >
          I thrive in the digital realm.
        </a.h2>
      </header>
      <a.p
        className="py-9 max-w-[512px] md:max-w-[650px] lg:text-[18px] text-center self-center"
        style={layoutReveal(3)}
      >
        I specialize in building products, features, and websites. Explore my
        portfolio to see examples of my work and experience. If you`&apos;re
        interested, I`&apos;m available for hire.
      </a.p>
      <a.div
        className="flex flex-wrap gap-6 call-to-action-buttons self-center"
        style={layoutReveal(4)}
      >
        <Link href="#projects" internal variant="plain">
          <Button variant="blue" className="bg-secondary" tabIndex={-1}>
            Check out my work
          </Button>
        </Link>
        <Link
          href={resumeDownloadLink}
          variant="plain"
          download
          ariaLabel="download resume"
        >
          <Button variant="black">
            <span>Resume</span>
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
