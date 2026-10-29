"use client";

import { motion } from "motion/react";

// Matches BlurText's per-word blur so the emoji lands right after the last word.
const WaveEmoji = ({ delay = 0.4 }: { delay?: number }) => (
  <motion.span
    aria-hidden
    className="inline-block"
    initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
  >
    <span className="animate-wave inline-block origin-[70%_70%] hover:animate-[wave_1.8s_ease-in-out_1] motion-reduce:animate-none">
      👋
    </span>
  </motion.span>
);
export default WaveEmoji;
