"use client"
import FeaturedProjectProps from "../props";
import "swiper/css/effect-cards";
import { a, to, useSpring } from "@react-spring/web";
import { useObservedSprings } from "../../../utils/useObservedSpring";
import FeaturedProjectSwiper from "./FeaturedProjectSwiper";
import animation from "@/components/animations/animations";

export default function FeaturedProjectsMobile(props: FeaturedProjectProps) {
  const {
    observedRef,
    springAnimate: [layoutTransformSpring, layoutOpacitySpring],
  } = useObservedSprings(
    [...animation.layout.revealSlow.start],
    [...animation.layout.revealSlow.end.map((x) => x())],
    [useSpring, useSpring]
  );

  return (
    <a.div
      className="md:hidden"
      ref={observedRef}
      style={{
        transform: to(layoutTransformSpring.y, (y) => `translateY(${y}px)`),
        opacity: to(layoutOpacitySpring.opacity, (op: number) => `${op}`),
      }}
    >
      <FeaturedProjectSwiper {...props} />
    </a.div>
  );
}
