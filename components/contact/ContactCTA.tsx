"use client";
import { a, useTrail } from "@react-spring/web";
import { useObservedSprings } from "@/utils/useObservedSpring";
import { socials } from "../data/navigation";
import Link from "../clickable/Link";
import NorthWestIcon from "../svg/abstract/NorthWestIcon";

const EMAIL = "stephenadeyemo@gmail.com";

export default function ContactCTA() {
  const {
    observedRef,
    springAnimate: [trail],
  } = useObservedSprings(
    [{ opacity: 0, y: 24 }],
    [{ opacity: 1, y: 0, config: { tension: 360, friction: 42 } }],
    [(cb: Function) => useTrail(5, cb, [])]
  );

  return (
    <div
      ref={observedRef}
      className="mt-10 md:mt-16 flex flex-col lg:flex-row lg:items-start lg:gap-20"
    >
      {/* Left — headline + copy */}
      <div className="flex-1">
        <a.div style={trail[0]} className="mb-5">
          <span className="block w-5 h-[2px] bg-blue-100 dark:bg-blue-d-200" />
        </a.div>

        <a.h2
          style={trail[1]}
          className="font-visby font-extrabold text-[52px] md:text-[68px] lg:text-[76px] leading-[1.0] tracking-[-0.02em] text-grey-1 dark:text-grey-d mb-7"
        >
          Let&apos;s build
          <br />
          <span className="text-blue-100 dark:text-blue-d-200">something</span>
          <br />
          together.
        </a.h2>

        <a.p
          style={trail[2]}
          className="text-[15px] md:text-[16px] text-grey-4 dark:text-grey-9 leading-[1.8] max-w-[400px]"
        >
          Open to new projects, product collaborations, and interesting
          problems. If you have something in mind — my inbox is open.
        </a.p>
      </div>

      {/* Right — email + socials */}
      <div className="mt-12 lg:mt-0 lg:pt-[80px] flex flex-col gap-9 lg:min-w-[300px]">
        {/* Mobile divider */}
        <a.div
          style={trail[2]}
          className="h-px bg-grey-d dark:bg-grey-2 lg:hidden"
        />

        {/* Email */}
        <a.div style={trail[3]} className="flex flex-col gap-2">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-grey-4 dark:text-grey-9">
            Say hello
          </p>
          <Link href={`mailto:${EMAIL}`} variant="plain">
            <span className="group inline-flex items-start gap-1 font-visby font-extrabold text-[15px] md:text-[17px] text-grey-1 dark:text-grey-d border-b-2 border-blue-100 dark:border-blue-d-200 pb-0.5 hover:text-blue-100 dark:hover:text-blue-d-200 transition-colors leading-[1.4]">
              {EMAIL}
              <span className="mt-0.5 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform shrink-0">
                <NorthWestIcon />
              </span>
            </span>
          </Link>
        </a.div>

        {/* Socials */}
        <a.div style={trail[4]} className="flex flex-col gap-3">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-grey-4 dark:text-grey-9">
            Find me on
          </p>
          <div className="flex gap-3 flex-wrap">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.link}
                variant="plain"
                ariaLabel={social.name}
              >
                <span className="w-[44px] h-[44px] rounded-full ring-1 ring-grey-d dark:ring-grey-3 bg-white dark:bg-grey-15 hover:ring-grey-9 dark:hover:ring-grey-5 hover:bg-grey-fb dark:hover:bg-grey-2 transition-all grid place-items-center text-grey-3 dark:text-grey-b">
                  {social.icon}
                </span>
              </Link>
            ))}
          </div>
        </a.div>
      </div>
    </div>
  );
}
