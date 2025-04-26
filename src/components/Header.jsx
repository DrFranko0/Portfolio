"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleSmoothScroll = (target) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 50 }, // Adjust offsetY if needed
      ease: "power2.inOut",
    });
  };

  return (
    <header
      className={`bg-gray-800 text-white py-2 px-6 fixed top-4 z-50 rounded-full transition-transform duration-300 max-w-fit left-1/2 transform -translate-x-1/2 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-center space-x-4">
        <button
          onClick={() => handleSmoothScroll("#hero")}
          className="hover:text-gray-400"
        >
          Home
        </button>
        <button
          onClick={() => handleSmoothScroll("#about")}
          className="hover:text-gray-400"
        >
          About
        </button>
        <button
          onClick={() => handleSmoothScroll("#projects")}
          className="hover:text-gray-400"
        >
          Projects
        </button>
        <button
          onClick={() => handleSmoothScroll("#footer")}
          className="hover:text-gray-400"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}