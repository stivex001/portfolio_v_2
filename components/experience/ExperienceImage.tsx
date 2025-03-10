'use client'
import React from "react";
import { ExperienceImageProps } from "./props";
import { a, SpringValue, to } from "@react-spring/web";
import Image from "next/image";


export const ExperienceImage = ({ imageTransition, data }: ExperienceImageProps) => {
  return imageTransition(
    (style: Record<string, SpringValue>, index: number) => {
      const expertise = data?.[index];
      return (
        <a.div
          className="-z-10 absolute right-0 top-1/2 hidden lg:block md:w-[256px] lg:w-[384px] xl:w-[480px]"
          style={{
            opacity: style.opacity.to((o) => `${o}`),
            transform: to(
              [style.y, style.rotateX, style.rotateY, style.rotateZ],
              (y, rx, ry, rz) =>
                `translateY(${y}) translateX(-15%) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
            ),
          }}
        >
          <Image
            alt={`Certificate of ${expertise?.title}`}
            className="rounded-[4px] relative after:absolute after:inset-0 after:bg-grey-5 -z-10 ring-1 ring-grey-ea dark:ring-0"
            src={expertise?.showcaseImage}
            width={720}
            height={556.49}
          />
        </a.div>
      );
    }
  );
};
