"use client";

import { ChevronRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-10 px-4 md:px-8 relative">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8 animate-fade-right">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect w-fit">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">Introducing PulseAI Platform</span>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              <span className="gradient-text">Build the Future</span>
              <span className="block text-foreground">with AI Power</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Create stunning applications 10x faster with intelligent
              automation, seamless integrations, and world-class infrastructure.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className="px-8 py-4 rounded-full font-semibold text-white bg-linear-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group cursor-pointer"
            >
              Get Started Free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-foreground glass-effect hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Watch Demo
            </button>
          </div>

          {/* Trust metrics */}
          <div className="pt-8 flex flex-col sm:flex-row gap-6 border-t border-border">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-blue-500">98%</div>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-purple-500">50K+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-pink-500">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="hidden lg:flex justify-center animate-fade-left">
          <div className="relative w-full h-full min-h-96 flex items-center justify-center">

            {/* Glowing dashboard mockup */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-glow-pulse"></div>

            <div className="relative w-full max-w-sm glass-effect rounded-3xl overflow-hidden h-96 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full w-3/4"></div>
                <div className="h-1 bg-linear-to-r from-pink-500 to-blue-500 rounded-full w-1/2"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
