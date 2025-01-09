import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { TierType } from "../types";

export function RenderTier({ tier }: { tier: TierType }) {
  return (
    <div
      key={tier.name}
      className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
    >
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
        <p className="mt-4">
          <span className="text-4xl font-extrabold text-gray-900">
            ${tier.price}
          </span>
          <span className="text-base font-medium text-gray-500">/month</span>
        </p>
        <Link
          to="/app"
          className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
        >
          {tier.name === "Free" ? "Get Started" : "Subscribe"}
        </Link>
      </div>
      <div className="px-6 pt-6 pb-8">
        <h4 className="text-sm font-medium text-gray-900 tracking-wide">
          What's included
        </h4>
        <ul className="mt-6 space-y-4">
          {tier.features.map((feature) => (
            <li key={feature} className="flex space-x-3">
              <Check
                className="flex-shrink-0 size-5 text-green-500"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
