import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: Code2, label: "Frontend Development" },
    { icon: Sparkles, label: "UI / UX Focused" },
    { icon: Rocket, label: "React & Modern Web" },
    { icon: Heart, label: "3D & Motion UI" }
  ];

  return (
      <section
        id="about"
        className="py-24 bg-white dark:bg-black text-gray-900 dark:text-white px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 
                       rounded-2xl p-8 space-y-6 hover:shadow-xl transition-shadow"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I'm <span className="text-gray-900 dark:text-white font-semibold">Priyesh Khare</span>, a
              frontend developer who loves building modern, high-performance,
              visually engaging web applications.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in creating clean, scalable user interfaces using
              <span className="text-purple-600 dark:text-purple-400 font-medium"> React</span>,
              <span className="text-purple-600 dark:text-purple-400 font-medium"> Tailwind CSS</span>, and
              <span className="text-purple-600 dark:text-purple-400 font-medium"> modern animation libraries</span>.
              My focus is not just on writing code, but on crafting smooth user
              experiences that feel intuitive and professional.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I enjoy working on real-world projects like authentication systems,
              dashboards, and portfolio platforms that reflect real product
              requirements. I care deeply about code quality, UI consistency,
              responsiveness, and performance.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently, I'm focused on sharpening my frontend skills, exploring
              3D interactions on the web, and building projects that demonstrate
              strong problem-solving and design thinking — with the goal of
              joining a team where I can grow and contribute meaningfully.
            </p>

            <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl text-sm 
                               bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400
                               border border-purple-200 dark:border-purple-500/20 transition-all cursor-default"
                  >
                    <Icon size={20} />
                    <span className="text-center text-xs">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
  );
}
