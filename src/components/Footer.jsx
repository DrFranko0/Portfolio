"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const nameRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const letters = nameRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: "#footer",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      contactRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#footer",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    const contactElement = contactRef.current;
    const hoverAnimation = gsap.to(contactElement, {
      x: 20,
      scale: 1.2,
      duration: 0.3,
      paused: true,
      ease: "power2.out",
    });

    contactElement.addEventListener("mouseenter", () => hoverAnimation.play());
    contactElement.addEventListener("mouseleave", () => hoverAnimation.reverse());

    return () => {
      contactElement.removeEventListener("mouseenter", () => hoverAnimation.play());
      contactElement.removeEventListener("mouseleave", () => hoverAnimation.reverse());
    };
  }, []);

  return (
    <footer id="footer" className="h-screen bg-black text-white flex flex-col justify-center items-center px-4 relative">
      <div
        ref={contactRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-lg md:text-xl lg:text-2xl font-bold tracking-widest cursor-pointer"
        onClick={() => (window.location.href = "mailto:rohitrrout@gmail.com")}
        style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
      >
        Contact me
      </div>

      <div className="text-center" ref={nameRef}>
        {"ROHIT".split("").map((letter, index) => (
          <span key={index} className="letter text-[12rem] md:text-[20rem] lg:text-[26rem] font-bold inline-block">
            {letter}
          </span>
        ))}
      </div>
    </footer>
  );
}