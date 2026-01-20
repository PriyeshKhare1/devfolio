
import { motion } from "framer-motion";


const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "UI & Styling",
    items: ["Tailwind CSS", "Material UI", "Bootstrap"],
  },
  {
    title: "State & APIs",
    items: ["React Hooks", "Context API", "REST APIs", "Axios", "JWT Auth"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "Postman", "Vercel"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  return (
      <section id="skills" className="py-24 px-6 bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              My <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Technologies and tools I use to build modern, scalable,
              and user-focused web applications.
            </motion.p>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800
                           rounded-xl p-6 transition-all hover:shadow-2xl
                           hover:border-purple-500 dark:hover:border-purple-500 relative overflow-hidden group"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 
                                opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm rounded-lg
                                   bg-purple-50 dark:bg-neutral-800 text-purple-700 dark:text-purple-300
                                   hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600
                                   transition-all cursor-default border border-purple-200 dark:border-transparent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}