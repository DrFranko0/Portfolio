"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    hover: {
      scale: 2,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-51"
      style={{ mixBlendMode: "difference" }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}