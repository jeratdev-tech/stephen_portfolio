import React, { useState, useEffect } from "react";
import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Simple auto-typing effect for dynamic text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Simple fade-in animations
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".profile-image",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    // Simple floating animation for background elements
    gsap.to(".floating-element", {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    });

    // Button animation
    gsap.fromTo(
      ".hero-button",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.8 }
    );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-black">
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 border border-blue-400/20 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-12 h-12 border border-purple-400/20 rotate-45"></div>
        <div className="floating-element absolute bottom-40 left-20 w-8 h-8 border border-pink-400/20 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-40 w-20 h-20 border border-cyan-400/20 rotate-12"></div>
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={word.text}
                        className={`flex items-center md:gap-3 gap-1 pb-2 ${
                          index === currentWordIndex
                            ? "opacity-100"
                            : "opacity-0"
                        } transition-opacity duration-500`}
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Stephen, a developer based in Nigeria with a passion for
              code.
            </p>

            {/* Enhanced Button */}
            <div className="hero-button relative z-10">
              <Button
                className="md:w-80 md:h-16 w-60 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400/30 hover:border-blue-300/50"
                id="button"
                text="See my work"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: PROFILE IMAGE - Placeholder for your image */}
        <figure className="hero-3d-layout flex justify-center items-center">
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl scale-110"></div>

            {/* Main profile image - Replace src with your image path */}
            <div className="profile-image relative z-10">
              <img
                src="/images/bg-o.png" // Replace this with your actual image path
                alt="Stephen - Developer Portfolio"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/20 shadow-xl"
              />
            </div>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
