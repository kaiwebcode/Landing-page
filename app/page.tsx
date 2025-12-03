"use client";

import { useState, useEffect } from "react";
import Hero from "./_components/sections/hero";
import Features from "./_components/sections/features";
import Testimonials from "./_components/sections/testimonials";
import Pricing from "./_components/sections/pricing";
import Footer from "./_components/sections/footer";
import Navbar from "./_components/navbar";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth parallax calculations
  const topBlobTranslate = scrollY * 0.08;     // small upward movement
  const bottomBlobTranslate = scrollY * -0.06; // subtle opposite direction

  return (
    <main className="min-h-screen bg-linear-to-br from-background via-background to-background overflow-hidden">
       <Navbar />
      {/* Background Parallax Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/20 to-purple-500/15 rounded-full blur-3xl animate-float"
          style={{
            transform: `translateY(${topBlobTranslate}px)`,
            transition: "transform 0.05s linear",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-purple-500/20 to-pink-500/15 rounded-full blur-3xl animate-float"
          style={{
            transform: `translateY(${bottomBlobTranslate}px)`,
            transition: "transform 0.05s linear",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      {/* Main Sections */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
