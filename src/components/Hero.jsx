"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const preloaderRef = useRef(null);
  const heroRef = useRef(null);
  const helloWorldRef = useRef(null);
  const audioRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const handleRevealHero = () => {
    gsap.to(preloaderRef.current, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        preloaderRef.current.style.display = "none";
        setIsHeroVisible(true);

        if (audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.warn("Audio playback failed:", err);
          });
        }
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.to(preloaderRef.current, {
      opacity: 1,
      duration: 0.5,
    });
  }, []);

  useEffect(() => {
    if (isHeroVisible && helloWorldRef.current) {
      const fonts = ["SixCaps", "Staatliches", "Londrina"];
      let fontIndex = 0;

      const changeFont = () => {
        if (!helloWorldRef.current) return;
        gsap.to(helloWorldRef.current, {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            helloWorldRef.current.style.fontFamily = fonts[fontIndex];
            fontIndex = (fontIndex + 1) % fonts.length;
            gsap.to(helloWorldRef.current, { duration: 0.5, opacity: 1 });
          },
        });
      };

      const interval = setInterval(changeFont, 2000);

      return () => clearInterval(interval);
    }
  }, [isHeroVisible]);

  return (
    <>
      <div
        ref={preloaderRef}
        className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 opacity-0"
      >
        <div className="text-center mb-8">
          <h1 className="header text-4xl md:text-6xl font-bold tracking-widest">
            Jack Of All Trade
          </h1>
          <h1 className="header text-4xl md:text-6xl font-bold tracking-widest">
            Instead Of
          </h1>
          <h1 className="header text-4xl md:text-6xl font-bold tracking-widest">
            A Master At One
          </h1>
        </div>
        <button
          onClick={handleRevealHero}
          className="px-6 py-3 bg-gray-800 text-white rounded-full hover:scale-110 transition-transform duration-300"
        >
          Click Here
        </button>
      </div>

      {isHeroVisible && (
        <div ref={heroRef}>
          <section
            id="hero"
            className="h-screen bg-black text-white flex flex-col justify-center items-center relative px-4"
          >
            <div className="text-center">
              <h1
                ref={helloWorldRef}
                className="text-3xl font-bold md:text-5xl lg:text-9xl"
              >
                <span className="block mr-36">HELLO,</span>
                <span className="block ml-28">WORLD</span>
              </h1>
            </div>

            <div className="absolute bottom-6 left-6 text-lg">ROHIT</div>
            <a
              href="/resume.pdf"
              download
              className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-gray-800 text-white hover:scale-110 transition-transform duration-300"
            >
              RESUME
            </a>
          </section>
        </div>
      )}

      <audio ref={audioRef} src="/bg-music.mp3" loop />
    </>
  );
}