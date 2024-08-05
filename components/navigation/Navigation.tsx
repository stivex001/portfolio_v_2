import React from "react";
import { NavLinksDesktop } from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";

type Props = {};

export const Navigation = (props: Props) => {
  return (
    <>
      <div id="home" className="w-full max-w-[1504px] mx-auto relative">
        <div className="p-6 md:p-8">
          <a
            className="flex items-center logo w-fit h-12"
            href={"/"}
            aria-label={"Stephen Adeyemo' Portfolio Logo"}
            title={"Stephen Adeyemo' Portfolio"}
          >
            <span className="text-white mr-1">bai</span>
            <span className="text-white w-12 h-8 rounded bg-secondary flex items-center justify-center">
              .io
            </span>
          </a>
        </div>
      </div>
      <header className="navigation-container max-w-[1504px] sticky top-0 mx-auto z-10 isolate -mt-[96px] md:-mt-[112px] mb-[96px] md:mb-[112px]">
        <NavLinksMobile />
        <NavLinksDesktop />
      </header>
    </>
  );
};
