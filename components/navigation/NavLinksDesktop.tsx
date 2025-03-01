/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useScrollDirection from "@/utils/useScrollDirection";
import useUserScrolling from "@/utils/useUserScrolling";
import { a,to, useSpring } from "@react-spring/web";
import React, { FocusEvent, useEffect, useRef, useState } from "react";
import { AnchorName, navigationData } from "../data/navigation";
import { Submenu } from "./Submenu";
import useActiveSection from "@/utils/useActiveSection";
import VerticalLineIcon from "../svg/abstract/VerticalLineIcon";
import Link from "../clickable/Link";

type Props = {};

export const NavLinksDesktop = (props: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState<AnchorName | null>(null);
  const { userScrolling } = useUserScrolling();
  const activeSection: keyof typeof activeSectionMarker = useActiveSection();
  const scrollDirection = useScrollDirection();
  const activeNavSpring = useSpring({
    from: { y: 0 },
    to: {
      y: scrollDirection == "down" ? -100 : 0,
    },
    delay: 250,
    config: {
      tension: 300,
      friction: 40,
    },
  });

  const submenuFirstItemRefs = navigationData.anchors.map(() =>
    useRef<HTMLAnchorElement>(null)
  );

  const menuItemRefs = navigationData.anchors.map(() =>
    useRef<HTMLAnchorElement>(null)
  );

  const handleMenuBarBlur = (event: FocusEvent<HTMLUListElement, Element>) => {
    const currentTarget = event.currentTarget;

    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setSubmenuOpen(null);
      }
    });
  };

  const handleMenuItemKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const menuItemCount = navigationData.anchors.length;
    const hasSubmenu =
      navigationData.anchors[index].submenuAnchors !== undefined;

    // opening submenus
    if (hasSubmenu) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSubmenuOpen(navigationData.anchors[index].name);
      }
    }

    // navigating the menu
    if (event.key === "ArrowLeft") {
      let newItemIndex = (index + (menuItemCount - 1)) % menuItemCount;
      menuItemRefs[newItemIndex].current?.focus();
    } else if (event.key === "ArrowRight") {
      let newItemIndex = (index + 1) % menuItemCount;
      menuItemRefs[newItemIndex].current?.focus();
    }
  };

  useEffect(() => {
    setSubmenuOpen(null);
  }, [scrollDirection]);
  useEffect(() => {
    if (submenuOpen) {
      let anchorIndex = navigationData.anchors.findIndex(
        (anchor) => anchor.name === submenuOpen
      );
      submenuFirstItemRefs[anchorIndex].current?.focus();
    }
  }, [submenuFirstItemRefs, submenuOpen]);

  const activeSectionMarkerMorph = [
    { pos: -24, width: 24 },
    { pos: 24, width: 39.4 },
    { pos: 95.4, width: 45.25 },
    { pos: 190.65, width: 64.85 },
    { pos: 305.5, width: 85.17 },
  ];
  const activeSectionMarker = {
    unmounted: activeSectionMarkerMorph[0],
    home: activeSectionMarkerMorph[1],
    about: activeSectionMarkerMorph[2],
    experience: activeSectionMarkerMorph[2],
    certifications: activeSectionMarkerMorph[2],
    projects: activeSectionMarkerMorph[3],
    "more-projects": activeSectionMarkerMorph[3],
    recommendations: activeSectionMarkerMorph[3],
    contact: activeSectionMarkerMorph[4],
  };
  const activeSectionMarkerSpring = useSpring({
    to: {
      width: activeSectionMarker[activeSection].width,
      x: activeSectionMarker[activeSection].pos,
    },
  });

  return (
    <a.nav
      id={"main-menu"}
      className="absolute w-fit top-8 right-8 bg-white dark:bg-secondary  ring-1 dark:ring-0  dark:ring-primary ring-grey-ea rounded-[10px] font-medium px-6 py-[7px] gap-6 hidden md:flex items-center select-none"
      style={activeNavSpring}
      aria-label={"Main Menu"}
    >
      {userScrolling}
      <ul
        className="flex text-sm gap-8 leading-[1.5] text-primary dark:text-grey-6"
        role={"menubar"}
        onBlur={handleMenuBarBlur}
      >
        {navigationData.anchors.map((anchor, index) => (
          <li
            key={anchor.name}
            id={anchor.name + "-menu-item"}
            className={`flex items-center gap-2 group/nav-item transition-colors ${
              activeSection == anchor.name && "dark:text-white text-black"
            }`}
            role={"menuitem"}
          >
            <a
              href={anchor.link}
              className="transition-colors group-hover/nav-item:text-black dark:group-hover/nav-item:text-white uppercase font-visby"
              ref={menuItemRefs[index]}
              onKeyDown={(event) => handleMenuItemKeyDown(event, index)}
            >
              {anchor.title}
            </a>
            {anchor.submenuAnchors && (
              <Submenu
                name={anchor.name}
                anchors={anchor.submenuAnchors}
                open={anchor.name === submenuOpen}
                setOpen={setSubmenuOpen}
                submenuItemRef={submenuFirstItemRefs[index]}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="divider" aria-hidden>
        <VerticalLineIcon />
      </div>
      <ul className="flex gap-4 items-center">
        {navigationData.socials.map((social) => (
          <li key={social.name} className="h-[22px]">
            <Link href={social.link} variant="plain" ariaLabel={social.name}>
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
      <div className="active-marker-bar absolute left-0 bottom-0 h-5 w-full overflow-hidden rounded-[10px] pointer-events-none">
        <div className="relative h-full">
          <a.div
            className="active-marker absolute left-0 bottom-0 h-[10px] rounded-[5px] bg-blue-100 dark:bg-blue-d-200"
            style={{
              width: to(activeSectionMarkerSpring.width, (w) => `${w}px`),
              transform: to(
                activeSectionMarkerSpring.x,
                (x) => `translateX(calc(${x}px)) translateY(50%)`
              ),
            }}
          />
        </div>
      </div>
    </a.nav>
  );
};
