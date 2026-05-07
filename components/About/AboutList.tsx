/* eslint-disable react-hooks/rules-of-hooks */

import { useObservedSprings } from "@/utils/useObservedSpring";
import { a, useTrail } from "@react-spring/web";
import { AboutListProps } from "./props";

export default function AboutList({ items }: AboutListProps) {
  const { observedRef, springAnimate } = useObservedSprings(
    [{ opacity: 0, scale: 0.85 }],
    [{ opacity: 1, scale: 1, config: { friction: 28, tension: 380 }, delay: 120 }],
    [(cb: Function) => useTrail(items.length, cb)]
  );

  return (
    <div className="flex flex-wrap gap-2" ref={observedRef}>
      {items.map((item, i) => (
        <a.span
          key={item}
          style={springAnimate[0][i]}
          className="font-mono text-[10px] md:text-[11px] px-2.5 py-1 rounded-full
            border border-grey-ea dark:border-grey-4
            text-grey-3 dark:text-grey-9
            select-none"
        >
          {item}
        </a.span>
      ))}
    </div>
  );
}
