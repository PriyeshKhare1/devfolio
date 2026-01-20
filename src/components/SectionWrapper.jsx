// import { motion } from "framer-motion";

// export default function SectionWrapper({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//     >
//       {children}
//     </motion.div>
//   );
// }




// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function SectionWrapper({ children }) {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Parallax depth
//   const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   return (
//     <motion.section
//       ref={ref}
//       style={{ y, opacity }}
//       transition={{ type: "spring", stiffness: 100, damping: 10 }}
//       className="will-change-transform"
//     >
//       {children}
//     </motion.section>
//   );
// }



// src/components/SectionWrapper.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionWrapper({ children, showLine = false, lineHeight = 4 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 0], [1, -1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // White line animation (thin + slow shrink)
  const lineHeightAnim = useTransform(scrollYProgress, [0, 0.1], [`${lineHeight}px`, "0.5px"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="relative will-change-transform"
    >
      {showLine && (
        <motion.div
          style={{ height: lineHeightAnim, opacity: lineOpacity }}
          className="w-full bg-white rounded-full mb-2"
        />
      )}

      {children}
    </motion.section>
  );
}
