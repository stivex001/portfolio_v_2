import Image from "next/image";
import { RecommendationCardProps } from "./props";
import { a } from "@react-spring/web";
import QuoteIconLarge from "../svg/abstract/QuoteIconLarge";

export default function RecommendationCard({
  cardTransition,
  recommendation,
  recommendationIndex,
}: RecommendationCardProps) {
  return (
    <a.article
      className="p-6 md:p-7 rounded-[10px] max-w-[480px] md:max-w-[340px] semi-lg:max-w-[380px] bg-grey-fb dark:bg-grey-15 ring-1 ring-grey-b dark:ring-grey-3 flex flex-col gap-5"
      id={`recommendation-item-${recommendationIndex + 1}`}
      role="tabpanel"
      style={cardTransition}
    >
      {/* Quote body */}
      <div className="relative flex-1">
        <div className="absolute -top-1 -left-1 pointer-events-none select-none opacity-[0.07] dark:opacity-[0.12]">
          <QuoteIconLarge />
        </div>
        <div className="grid gap-3">
          {recommendation.description.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[14px] md:text-[15px] text-grey-3 dark:text-grey-b leading-[1.75]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Author */}
      <footer className="flex items-center gap-3 pt-5 border-t border-grey-d dark:border-grey-2">
        <div className="h-[44px] aspect-square rounded-full overflow-hidden ring-1 ring-grey-b dark:ring-grey-3 shrink-0">
          <Image
            src={recommendation.image}
            width={44}
            height={44}
            alt={`Portrait of ${recommendation.author}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-visby font-extrabold text-[15px] text-grey-1 dark:text-grey-d leading-[1.2]">
            {recommendation.author}
          </h3>
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-grey-4 dark:text-grey-9 mt-0.5 truncate">
            {recommendation.occupation}
          </p>
          <p className="text-[12px] text-blue-200 dark:text-blue-100 mt-0.5">
            {recommendation.location}
          </p>
        </div>
      </footer>
    </a.article>
  );
}
