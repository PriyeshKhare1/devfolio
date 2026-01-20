import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SkillCard({ title, skills }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [12, -12]);
  const rotateY = useTransform(x, [-40, 40], [-12, 12]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="relative transform-gpu
                 bg-white/80 dark:bg-white/5
                 backdrop-blur-xl
                 border border-white/20
                 rounded-2xl p-6
                 shadow-xl hover:shadow-purple-500/30"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl
                      bg-gradient-to-br from-purple-500/10 to-pink-500/10
                      opacity-0 hover:opacity-100 transition
                      pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 rounded-full
                         bg-purple-100 dark:bg-purple-900/30
                         text-purple-600 dark:text-purple-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
