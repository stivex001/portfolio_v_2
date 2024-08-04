/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useScrollDirection from "@/utils/useScrollDirection";
import useUserScrolling from "@/utils/useUserScrolling";
import { a, useSpring } from "@react-spring/web";
import React, { FocusEvent, useEffect, useRef, useState } from "react";
import { AnchorName, navigationData } from "../data/navigation";
import { Submenu } from "./Submenu";
import useActiveSection from "@/utils/useActiveSection";
import VerticalLineIcon from "../svg/abstract/VerticalLineIcon";

type Props = {};

export const NavLinksDesktop = (props: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState<AnchorName | null>(null);
  const { userScrolling } = useUserScrolling();
  const activeSection = useActiveSection();
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

  return (
    <a.nav
      id={"main-menu"}
      className="absolute w-fit top-8 right-8 bg-secondary  ring-1  ring-primary rounded-[10px] font-medium px-6 py-[7px] gap-6 hidden md:flex items-center select-none"
      style={activeNavSpring}
      aria-label={"Main Menu"}
    >
      {userScrolling}
      <ul
        className="flex text-sm gap-8 leading-[1.5] text-white"
        role={"menubar"}
        onBlur={handleMenuBarBlur}
      >
        {navigationData.anchors.map((anchor, index) => (
          <li
            key={anchor.name}
            id={anchor.name + "-menu-item"}
            className={`flex items-center gap-2 group/nav-item transition-colors ${
              activeSection == anchor.name && "text-primary dark:text-grey-d"
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
    </a.nav>
  );
};
