"use client"

import { Check, ChevronRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Up to 10 deployments/month",
      "5GB storage",
      "Community support",
      "Basic analytics",
      "Single team member",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For growing teams",
    features: [
      "Unlimited deployments",
      "500GB storage",
      "Priority email support",
      "Advanced analytics",
      "Up to 10 team members",
      "Custom domains",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 phone support",
      "Dedicated account manager",
      "Unlimited team members",
      "SLA guarantee",
      "Custom integrations",
      "On-premise option",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 md:px-8 relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs. Always flexible to scale up or down.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 transform group ${
                plan.highlighted
                  ? "glass-effect scale-100 md:scale-105 border-2 border-transparent bg-linear-to-br from-blue-500/10 to-purple-500/10 glow-accent shadow-2xl"
                  : "glass-effect hover:scale-105"
              }`}
            >
              <div className="p-8 space-y-8 h-full flex flex-col">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold">
                      <span className="gradient-text">{plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                    plan.highlighted
                      ? "bg-linear-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                      : "glass-effect hover:bg-white/20"
                  }`}
                >
                  Get Started
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div className="text-center mt-12 animate-fade-up stagger-2">
          <p className="text-muted-foreground">
            Need more details?{" "}
            <button className="text-blue-500 hover:text-purple-500 font-semibold transition-colors">View FAQs</button>
          </p>
        </div>
      </div>
    </section>
  )
}
