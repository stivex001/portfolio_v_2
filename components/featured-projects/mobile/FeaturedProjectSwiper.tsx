/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { FeaturedProjectSwiperProps } from "../props";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import FeaturedProjectCard from "./FeaturedProjectCard";
import PrevIcon from "@/components/svg/icons/PrevIcon";
import NextIcon from "@/components/svg/icons/NextIcon";


export default function FeaturedProjectSwiper({
  projects,
  projectIndex,
  setProjectIndex,
  openProjectViewer,
}: FeaturedProjectSwiperProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperApi = swiperRef.current?.swiper;
  const featuredProjectHeaderRefs = projects.map((_) => useRef<HTMLAnchorElement>(null));
  

  function handleSwiperChange(swiper: SwiperClass) {
    setProjectIndex(swiper.activeIndex);
    featuredProjectHeaderRefs[swiper.activeIndex].current?.focus();
  }

  return (
    <div className="relative swiper-container isolate">
      <Swiper
        ref={swiperRef}
        grabCursor
        effect={"cards"}
        modules={[EffectCards]}
        cardsEffect={{
          slideShadows: false,
        }}
        initialSlide={projectIndex}
        onActiveIndexChange={handleSwiperChange}
        id="featured-projects-deck"
        aria-label="featured projects deck"
      >
        {projects.map((project, index) => (
          <SwiperSlide className="my-auto" key={project.name}>
            <FeaturedProjectCard
              project={project}
              active={projectIndex === index}
              activeOffset={Math.abs(projectIndex - index)}
              openProjectViewer={openProjectViewer}
              headerRef={featuredProjectHeaderRefs[index]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute w-[48px] aspect-square grid justify-center items-center rounded-[50%] top-1/2 -translate-y-1/2 left-0 -translate-x-1/4 z-10 group/icon backdrop-blur-sm

        ring-1 ring-grey-b dark:ring-grey-4
        bg-grey-d/50 dark:bg-grey-3/50
        
        hover:ring-grey-9 dark:hover:ring-grey-5
        hover:bg-grey-d/75 dark:hover:bg-grey-5/50

        disabled:pointer-events-none
        disabled:opacity-0 disabled:scale-75
        transition"
        onClick={() => swiperApi?.slidePrev(500)}
        disabled={projectIndex === 0}
        aria-hidden={projectIndex === 0}
        name={`previous card - ${projects[projectIndex - 1]?.name}`}
        aria-label={`previous card - ${projects[projectIndex - 1]?.name}`}
        aria-controls="featured-projects-deck"
      >
        <PrevIcon />
      </button>
      <button
        className="absolute w-[48px] aspect-square grid justify-center items-center rounded-[50%] top-1/2 -translate-y-1/2 right-0 translate-x-1/4 z-10 group/icon backdrop-blur-sm

        ring-1 ring-grey-b dark:ring-grey-4
        bg-grey-d/50 dark:bg-grey-3/50
        
        hover:ring-grey-9 dark:hover:ring-grey-5
        hover:bg-grey-d/75 dark:hover:bg-grey-5/50

        disabled:pointer-events-none
        disabled:opacity-0 disabled:scale-75
        transition"
        onClick={() => swiperApi?.slideNext(500)}
        disabled={projectIndex === projects.length - 1}
        aria-hidden={projectIndex === projects.length - 1}
        name={`next card - ${projects[projectIndex + 1]?.name}`}
        aria-label={`next card - ${projects[projectIndex + 1]?.name}`}
        aria-controls="featured-projects-deck"
      >
        <NextIcon />
      </button>
    </div>
  );
}
