import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  tech = [],        // ✅ DEFAULT VALUE (prevents crash)
  live,
  github,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [15, -15]);
  const rotateY = useTransform(x, [-60, 60], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative transform-gpu
                 bg-white/80 dark:bg-white/5
                 backdrop-blur-xl
                 border border-white/20
                 rounded-2xl p-6
                 shadow-xl hover:shadow-purple-500/30"
    >
      {/* ✨ Glow overlay (non-clickable) */}
      <div
        className="absolute inset-0 rounded-2xl
                   bg-gradient-to-br from-purple-500/10 to-pink-500/10
                   opacity-0 hover:opacity-100 transition
                   pointer-events-none"
      />

      {/* ✅ Content Layer */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* 🧩 Tech stack */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full
                           bg-purple-100 dark:bg-purple-900/30
                           text-purple-600 dark:text-purple-300"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* 🔗 Links */}
        <div className="flex gap-5">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold
                         text-purple-600 dark:text-purple-400 hover:underline"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold
                         text-gray-700 dark:text-gray-300 hover:underline"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
