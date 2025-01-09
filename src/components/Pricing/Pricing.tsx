import { tiers } from "./constants";
import { RenderTier } from "./modules";

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {tiers.map((tier) => (
            <RenderTier key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
}
