"use client";

import React from "react";
import Link from "../clickable/Link";
import Image from "next/image";
import logo from "@/components/images/bai_lofo.png";
import footerData from "../data/footer";
import HeartIcon from "../svg/abstract/HeartIcon";
import ThemeToggle from "./ThemeToggle";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-8 border-t footer-container bg-grey-fb dark:bg-secondary border-grey-d dark:border-grey-2">
      <footer className="flex flex-col w-full max-w-screen-xl gap-10 py-8 mx-auto md:flex-row md:justify-between">
        <div className="flex justify-between items-center md:items-start md:flex-col md:gap-8">
          <Link
            href="/"
            variant="plain"
            ariaLabel="Stephen Adeyemo' Portfolio Logo"
            title="Stephen Adeyemo' Portfolio"
          >
            {/* <span className="inline-block md:hidden">
              <LogoSmall />
            </span> */}
            <div className="w-[100px] h-[100px]">
              <Image
                src={logo}
                alt="logo"
                className="inline-block w-full h-full"
              />
            </div>
          </Link>
          <ul
            className="flex gap-4 md:flex-col md:gap-3"
            aria-label="social links"
          >
            {footerData.socials.map((social) => (
              <li key={social.name} className="group/icon">
                <a
                  href={social.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="md:flex md:gap-2 md:flex-end"
                  aria-label={social.name}
                >
                  <div className="flex w-[24px]">{social.icon}</div>
                  <span
                    className={`
                    hidden md:inline text-grey-6 dark:text-grey-9 text-[15px] relative
                    after:bg-grey-6 after:dark:bg-grey-9 after:pointer-events-none
                    after:absolute after:left-0 after:-bottom-[2px]
                    after:w-full after:h-[2px]
                    after:opacity-0 group-hover/icon:after:opacity-100
                  `}
                  >
                    {social.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 content-2 md:justify-between">
          <div className="self-center md:self-end">
            <ThemeToggle />
          </div>
          <p
            className="text-grey-6 dark:text-grey-9 text-[15px] text-center flex gap-[6px] items-center self-center md:self-end select-none"
            aria-label="Built with passion by Okoye Charles"
          >
            Built with
            <HeartIcon />
            by <Link href={footerData.sourceCode}>Stephen Adeyemo</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
