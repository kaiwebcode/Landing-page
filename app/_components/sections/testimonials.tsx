"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    rating: 5,
    text: "This platform completely transformed how we deploy applications. We cut our deployment time by 80% and our team loves the intuitive interface.",
    avatar: "👩‍💻",
  },
  {
    name: "Marcus Johnson",
    role: "Founder at StartupXYZ",
    rating: 5,
    text: "The AI-powered features are incredible. Our application went from idea to production in just 2 weeks. Highly recommend!",
    avatar: "👨‍💼",
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Lead at CloudSync",
    rating: 5,
    text: "The security features and compliance certifications give us peace of mind. Best platform investment we've made.",
    avatar: "👩‍🔬",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by <span className="gradient-text">Thousands</span> of Teams
          </h2>
          <p className="text-lg text-muted-foreground">See what our customers have to say about their experience.</p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl glass-effect transition-all duration-500 transform ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-50 scale-95"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full cursor-pointer glass-effect hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full cursor-pointer glass-effect hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
