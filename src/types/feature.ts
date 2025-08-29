export interface Feature {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  image?: string;
  gradient?: string;
}

export interface FeatureShowcaseProps {
  className?: string;
}
