"use client";

import React from "react";
import Link from "../clickable/Link";
import Image from "next/image";
import logo from "@/components/images/bai_lofo.png";
import footerData from "../data/footer";
import { navigationData } from "../data/navigation";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="px-6 md:px-8 border-t border-grey-d dark:border-grey-2 bg-grey-fb dark:bg-secondary">
      <footer className="max-w-screen-xl mx-auto py-8 flex flex-col gap-8">

        {/* Main row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <Link
            href="/"
            variant="plain"
            internal
            ariaLabel="Stephen Adeyemo — back to top"
          >
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 shrink-0 overflow-hidden rounded-md">
                <Image src={logo} alt="logo" width={36} height={36} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-visby font-extrabold text-[14px] text-grey-1 dark:text-grey-d group-hover:text-blue-100 dark:group-hover:text-blue-d-200 transition-colors leading-[1.2]">
                  Stephen Adeyemo
                </p>
                <p className="font-mono text-[10px] tracking-[0.1em] text-grey-4 dark:text-grey-9 leading-[1.4]">
                  Product Engineer
                </p>
              </div>
            </div>
          </Link>

          {/* Nav quick links */}
          <nav aria-label="footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navigationData.anchors.map((anchor) => (
                <li key={anchor.name}>
                  <a
                    href={anchor.link}
                    className="font-mono text-[11px] tracking-[0.1em] uppercase text-grey-4 dark:text-grey-9 hover:text-grey-1 dark:hover:text-grey-d transition-colors"
                  >
                    {anchor.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>

        {/* Bottom rule + copyright */}
        <div className="pt-6 border-t border-grey-d dark:border-grey-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] tracking-[0.08em] text-grey-9 dark:text-grey-5 select-none">
            © {new Date().getFullYear()} Stephen Adeyemo. All rights reserved.
          </p>
          <Link
            href={footerData.sourceCode}
            className="font-mono text-[10px] tracking-[0.08em] text-grey-9 dark:text-grey-5 hover:text-grey-4 dark:hover:text-grey-9 transition-colors"
          >
            View source
          </Link>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
