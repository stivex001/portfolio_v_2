import { SpringValue } from "@react-spring/web";
import { Dispatch, SetStateAction } from "react";
import { Recommendation } from "./recommendation";

export type RecommendationSwiperProps = {
  recommendations: Array<Recommendation>;
  recommendationIndex: number;
  setRecommedationIndex: Dispatch<SetStateAction<number>>;
};

export type RecommendationCardProps = {
  recommendation: Recommendation;
  cardTransition: Record<string, SpringValue<number>>;
  recommendationIndex: number;
};

export type RecommendationControlProps = {
  recommendations: Array<Recommendation>;
  recommendationCount: number;
  recommendationIndex: number;
  setRecommedationIndex: Dispatch<SetStateAction<number>>;
};
