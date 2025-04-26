"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          AI/ML Experts Building Innovative Frontend Apps and Agentic Systems.
        </h2>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">Trusted by</h3>
        <img src="/Cog.jpg" alt="Company Logo" className="h-16 md:h-20 lg:h-24" />
      </motion.div>
    </section>
  );
}