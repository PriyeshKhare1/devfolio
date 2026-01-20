// src/components/SectionShrinkLine.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionShrinkLine({ startHeight = 100 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 0.45],
    [`${startHeight}px`, "1px"]
  );

  return (
    <div ref={ref} className="relative bg-black">
      <motion.div
        style={{ height }}
        className="w-full bg-white"
      />
    </div>
  );
}
