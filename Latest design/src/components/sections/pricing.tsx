"use client";

import { useState } from "react";
import { Check, Leaf } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 12,
    features: [
      "Unlimited AI usage here",
      "Premium support",
      "Customer care on point",
      "Collaboration tools",
      "Regular updates",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: 17,
    features: [
      "Integrations with 3rd-party",
      "Advanced analytics",
      "Team performance tracking",
      "Top grade security",
      "Priority customer support",
      "Detailed usage reports",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: null,
    features: [
      "Dedicated account manager",
      "Custom reports & dashboards",
      "Most performance usage",
      "Tailored onboarding and training",
      "Customizable API access",
      "Dedicated success manager",
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section id="pricing" className="py-[120px] bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary border border-primary/50">
            PRICING & PLANS
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Flexible Pricing Plans
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose a plan that fits your business needs and unlock the full
            potential of our platform
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-x-6">
            <div className="relative flex rounded-full bg-secondary p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
              </button>
            </div>
            <div className="flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
              30% off
            </div>
          </div>
        </div>

        <div className="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-card p-8 ${
                plan.isPopular
                  ? "ring-2 ring-primary"
                  : "ring-1 ring-white/10"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 transform rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold leading-8 text-foreground">
                {plan.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-x-1">
                {plan.price !== null ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-muted-foreground">
                      / month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    Custom
                  </span>
                )}
              </div>
              <a
                href="https://framer.link/DX0edsv"
                className={`mt-8 block w-full rounded-md py-3 text-center text-sm font-semibold transition-colors ${
                  plan.isPopular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Get Started Now
              </a>
              <div className="mt-8 text-sm font-semibold leading-6 text-foreground">
                Includes:
              </div>
              <ul
                role="list"
                className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground"
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-emerald-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-x-3">
          <Leaf className="h-5 w-5 text-green-500" />
          <p className="text-sm text-muted-foreground">
            LanderX contributes 5% of subscription to the green life
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;