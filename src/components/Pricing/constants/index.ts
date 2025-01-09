import { TierType } from "../types";

export const tiers: TierType[] = [
  {
    name: "Free",
    price: "0",
    features: [
      "Up to 5 images per day",
      "Basic background removal",
      "Standard quality exports",
      "Web access only",
    ],
  },
  {
    name: "Pro",
    price: "9",
    features: [
      "Unlimited images",
      "Advanced background removal",
      "HD quality exports",
      "Priority processing",
      "API access",
      "Email support",
    ],
  },
];
