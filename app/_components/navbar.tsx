"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass-effect-dark border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-medium">PA</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:inline">PulseAI</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
                >
                  {link.label}
                  {/* Animated underline on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </button>
              <button className="px-6 py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-white/10 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
