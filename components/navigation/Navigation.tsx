import React from "react";
import { NavLinksDesktop } from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";
import Image from "next/image";
import logo from "@/components/images/bai_lofo.png";

type Props = {};

export const Navigation = (props: Props) => {
  return (
    <>
      <div id="home" className="w-full max-w-[1504px] mx-auto relative">
        <div className="p-6 md:p-8">
          <a
            className="flex items-center logo w-[70px] h-[70px]"
            href={"/"}
            aria-label={"Stephen Adeyemo' Portfolio Logo"}
            title={"Stephen Adeyemo' Portfolio"}
          >
            <Image
              src={logo}
              alt="logo"
              className="inline-block w-full h-full"
            />
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
