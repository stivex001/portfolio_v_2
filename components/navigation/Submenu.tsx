/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { SubmenuProps } from "./props";
import { SubmenuAnchor } from "../data/navigation";
import { toNormalCase } from "@/utils/convertion";
import useActiveSection from "@/utils/useActiveSection";
import { a, useSpring } from "@react-spring/web";
import ExpandIcon from "../svg/submenu/ExpandIcon";

export const Submenu = ({
  name,
  anchors,
  open,
  setOpen,
  submenuItemRef,
}: SubmenuProps<SubmenuAnchor>) => {
  const SUBMENU_ITEMS_HEIGHT = 34 * anchors.length;
  const SUBMENU_OPEN_HEIGHT = SUBMENU_ITEMS_HEIGHT + 24;
  const submenuName = toNormalCase(name + " submenu");
  const active = useActiveSection();

  const openSubmenuSpring = useSpring({
    y: open ? 0 : 16,
    x: -32,
    opacity: open ? 1 : 0,
    config: {
      tension: 300,
    },
  });

  function handleSubmenuToggle() {
    if (open) {
      setOpen(null);
    } else {
      setOpen(name);
    }
  }

  const submenuRef = useRef<any>(null);

  function handleClickOutside(event: Event) {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    // close submenu if click occurs elsewhere
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [handleClickOutside, open]);

  return (
    <div className="relative submenu" ref={submenuRef}>
      <button
        className={`py-2 px-1 rounded-[5px] hover:bg-grey-ea dark:hover:bg-grey-3 group/submenu-button transition-colors -mr-[10px]${
          open ? " is-active" : ""
        }`}
        onClick={handleSubmenuToggle}
        name={open ? "Close " + submenuName : "Open " + submenuName}
        aria-label={open ? "Close " + submenuName : "Open " + submenuName}
        aria-expanded={open}
        aria-controls={name + "-submenu"}
      >
        <ExpandIcon />
      </button>

      <a.div
        id={name + "-submenu"}
        className={`submenu-items bg-white ring-1 ring-grey-d dark:ring-0 dark:bg-secondary absolute w-[256px] h-[${SUBMENU_OPEN_HEIGHT}px] top-[calc(100%+31px)] rounded-[10px] -translate-x-8 py-3 font-medium`}
        style={{ ...openSubmenuSpring, pointerEvents: open ? "all" : "none" }}
        aria-label={submenuName}
      >
        <div className="relative translate-x-8">
          <div className="submenu-pointer absolute w-[16.9px] h-[16.9px] bg-grey-d ring-1 ring-grey-d dark:ring-0 dark:bg-secondary rotate-45 rounded-[2px] -top-[12px] -translate-y-1/2"></div>
          <div className="bg-white dark:bg-secondary absolute w-[34px] h-[12px] -top-[12px] -left-[8px]"></div>
        </div>
        <ul>
          {anchors.map((anchor, index) => (
            <li
              key={anchor.name}
              className={`px-4 ${
                anchor.name === active ? "is-active " : ""
              }group/submenu-item hover:bg-grey-ea dark:hover:bg-secondary transition-colors`}
            >
              <a
                href={anchor.link}
                className="flex gap-2 items-center py-2 text-grey-6 dark:text-grey-b group-hover/submenu-item:text-grey-2 dark:group-hover/submenu-item:text-grey-d group-[.is-active]/submenu-item:text-grey-2 dark:group-[.is-active]/submenu-item:text-grey-d"
                tabIndex={open ? 0 : -1}
                ref={index === 0 ? submenuItemRef : undefined}
              >
                {anchor.icon}
                <span className="leading-[1] block">{anchor.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </a.div>
    </div>
  );
};
