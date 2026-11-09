"use client";
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, y = 25, x = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Silky cinematic deceleration curve
      }}
    >
      {children}
    </motion.div>
  );
}
