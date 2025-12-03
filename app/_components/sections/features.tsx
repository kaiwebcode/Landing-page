"use client"

import { useState } from "react"
import { Zap, Shield, Rocket, Brain, Layers, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy in milliseconds with our optimized infrastructure built for speed and performance.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards.",
  },
  {
    icon: Rocket,
    title: "Scale Instantly",
    description: "Handle millions of requests with automatic scaling and load balancing.",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI models for intelligent automation and insights.",
  },
  {
    icon: Layers,
    title: "Integrations",
    description: "Connect with 1000+ tools and services through our powerful API.",
  },
  {
    icon: Lock,
    title: "Zero Downtime",
    description: "Deploy without disrupting service using our advanced orchestration system.",
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Powerful Features</span> for Modern Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up stagger-1">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-8 rounded-2xl transition-all duration-300 transform cursor-pointer group ${
                  hoveredIndex === index
                    ? "glass-effect scale-105 glow-accent shadow-2xl"
                    : "glass-effect hover:glass-effect"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index ? "bg-linear-to-br from-blue-500 to-purple-500" : "bg-blue-500/20"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${hoveredIndex === index ? "text-white" : "text-blue-400"}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Animated line */}
                <div
                  className={`mt-6 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
