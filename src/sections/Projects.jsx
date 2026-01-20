// import { motion } from "framer-motion";
// import { Github, ExternalLink, Code2 } from "lucide-react";

// const projects = [
//   {
//     title: "Distance Finder",
//     description:
//       "Next.js-based application for real-time distance calculation using map APIs. Handles 300+ daily user interactions with optimized accuracy and performance.",
//     liveLink: "https://example.com/distance-finder",
//     githubLink: "https://github.com/priyeshkhare",
//   },
//   {
//     title: "Bright-Way",
//     description:
//       "Responsive academic query resolution platform for college students with intuitive UI/UX and dynamic query handling.",
//     liveLink: "https://example.com/bright-way",
//     githubLink: "https://github.com/priyeshkhare",
//   },
//   {
//     title: "Full-Stack MERN Apps",
//     description:
//       "Production-ready MERN applications with JWT authentication, REST APIs, reusable UI components, and MongoDB integration.",
//     liveLink: "https://example.com/mern-app",
//     githubLink: "https://github.com/priyeshkhare",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.5 },
//   }),
// };

// export default function Projects() {
//   return (
//     <section className="min-h-screen bg-neutral-950 text-neutral-200 px-6 py-24" id="projects">
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-white mb-4"
//         >
//           Featured Projects
//         </motion.h2>

//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           whileInView={{ scaleX: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="w-20 h-1 bg-purple-500 mx-auto mb-4"
//         ></motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="text-gray-400 max-w-2xl mx-auto"
//         >
//           A showcase of recent projects demonstrating my expertise in full-stack development.
//         </motion.p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.03 }}
//             className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-purple-500 transition flex flex-col shadow-sm hover:shadow-lg"
//           >
//             <div className="mb-4 flex items-center justify-center w-12 h-12 bg-neutral-800 rounded-xl">
//               <Code2 className="w-6 h-6 text-purple-500" />
//             </div>

//             <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

//             <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

//             <div className="flex gap-3 mt-auto">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
//               >
//                 <ExternalLink size={16} />
//                 Live
//               </a>

//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-purple-500 transition"
//               >
//                 <Github size={16} />
//                 GitHub
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




// import { motion } from "framer-motion";
// import { Github, ExternalLink, Code2 } from "lucide-react";

// const projects = [
//   {
//     title: "Distance Finder",
//     description:
//       "Next.js-based application for real-time distance calculation using map APIs. Handles 300+ daily user interactions with optimized accuracy and performance.",
//     liveLink: "https://example.com/distance-finder",
//     githubLink: "https://github.com/priyeshkhare",
//   },
//   {
//     title: "Bright-Way",
//     description:
//       "Responsive academic query resolution platform for college students with intuitive UI/UX and dynamic query handling.",
//     liveLink: "https://example.com/bright-way",
//     githubLink: "https://github.com/priyeshkhare",
//   },
//   {
//     title: "Full-Stack MERN Apps",
//     description:
//       "Production-ready MERN applications with JWT authentication, REST APIs, reusable UI components, and MongoDB integration.",
//     liveLink: "https://example.com/mern-app",
//     githubLink: "https://github.com/priyeshkhare",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-24 px-6
//                  bg-white text-neutral-900
//                  dark:bg-neutral-950 dark:text-neutral-200"
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Featured Projects
//           </motion.h2>

//           <motion.div
//             initial={{ scaleX: 0, opacity: 0 }}
//             whileInView={{ scaleX: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="w-20 h-1 bg-purple-500 mx-auto mb-4"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
//           >
//             A showcase of recent projects demonstrating my expertise in full-stack development.
//           </motion.p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="rounded-xl p-6 flex flex-col
//                          border border-neutral-300 dark:border-neutral-800
//                          bg-white dark:bg-neutral-900
//                          hover:shadow-xl transition"
//             >
//               {/* Icon */}
//               <div className="mb-4 flex items-center justify-center
//                               w-12 h-12 rounded-xl
//                               bg-neutral-100 dark:bg-neutral-800">
//                 <Code2 className="w-6 h-6 text-purple-500" />
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-2">
//                 {project.title}
//               </h3>

//               {/* Description */}
//               <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
//                 {project.description}
//               </p>

//               {/* Actions */}
//               <div className="flex gap-3 mt-auto">
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-sm
//                              px-4 py-2 rounded-lg
//                              bg-purple-600 hover:bg-purple-700
//                              text-white transition"
//                 >
//                   <ExternalLink size={16} />
//                   Live
//                 </a>

//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-sm
//                              px-4 py-2 rounded-lg
//                              border border-neutral-400 dark:border-neutral-700
//                              hover:border-purple-500 transition"
//                 >
//                   <Github size={16} />
//                   GitHub
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="mt-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40" />
//       </div>
//     </section>
//   );
// }



///================downgrade os form the claude ai   ==========================

// import { Github, ExternalLink, Code2 } from "lucide-react";

// const projects = [
//   {
//     title: "Distance Finder",
//     description:
//       "Next.js-based application for real-time distance calculation using map APIs. Handles 300+ daily user interactions with optimized accuracy and performance.",
//     liveLink: "https://example.com/distance-finder",
//     githubLink: "https://github.com/priyeshkhare",
//   },
//   {
//     title: "Bright-Way",
//     description:
//       "Responsive academic query resolution platform for college students with intuitive UI/UX and dynamic query handling.",
//     liveLink: "https://example.com/bright-way",
//     githubLink: "https://github.com/priyeshkhare",
//   },
//   {
//     title: "Full-Stack MERN Apps",
//     description:
//       "Production-ready MERN applications with JWT authentication, REST APIs, reusable UI components, and MongoDB integration.",
//     liveLink: "https://example.com/mern-app",
//     githubLink: "https://github.com/priyeshkhare",
//   },
// ];

// export default function Projects() {
//   return (
//     <section 
//       className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-neutral-200 px-6 py-24" 
//       id="projects"
//     >
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//           Featured Projects
//         </h2>

//         <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>

//         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//           A showcase of recent projects demonstrating my expertise in full-stack development.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 
//                        rounded-2xl p-6 hover:border-purple-500 transition-all flex flex-col 
//                        shadow-sm hover:shadow-xl hover:-translate-y-2 transform hover:shadow-purple-500/20"
//           >
//             <div className="mb-4 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg">
//               <Code2 className="w-6 h-6 text-white" />
//             </div>

//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//               {project.title}
//             </h3>

//             <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
//               {project.description}
//             </p>

//             <div className="flex gap-3 mt-auto">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
//                            bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
//                            text-white transition-all shadow-md hover:shadow-lg"
//               >
//                 <ExternalLink size={16} />
//                 Live
//               </a>

//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
//                            border-2 border-gray-300 dark:border-gray-700 
//                            hover:border-purple-500 dark:hover:border-purple-500 transition-all"
//               >
//                 <Github size={16} />
//                 GitHub
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";


const projects = [
  {
    title: "AuthSphere – Secure Auth Dashboard",
    description:
      "A production-ready authentication dashboard with login, registration, protected routes, and role-based access control.",
    tech: ["React", "JWT", "REST APIs", "Tailwind"],
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    title: "Distance Finder Web App",
    description:
      "A Next.js-based application that calculates real-time distance using map APIs with optimized performance.",
    tech: ["Next.js", "Map API", "JavaScript", "CSS"],
    live: "https://distancefinderapp.netlify.app/",
    github: "https://github.com/your-repo",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
      <section
        id="projects"
        className="py-24 px-6 bg-white dark:bg-black text-gray-900 dark:text-white"
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of projects that showcase my frontend skills,
              real-world problem solving, and UI craftsmanship.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative rounded-2xl p-8
                           bg-gray-50 dark:bg-white/5 backdrop-blur-xl
                           border border-gray-200 dark:border-white/10
                           hover:border-purple-500 dark:hover:border-purple-500
                           transition-all shadow-md hover:shadow-2xl
                           hover:shadow-purple-500/20 group"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-2xl
                                bg-linear-to-br from-purple-500/10 to-pink-500/10
                                opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg
                                   bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400
                                   border border-purple-200 dark:border-purple-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                                 bg-linear-to-r from-purple-600 to-pink-600 
                                 hover:from-purple-700 hover:to-pink-700
                                 text-white text-sm font-semibold
                                 transition-all shadow-lg hover:shadow-purple-500/50"
                    >
                      Live
                      <ExternalLink size={16} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                                 border-2 border-gray-300 dark:border-white/20
                                 hover:border-purple-500 dark:hover:border-purple-400
                                 text-gray-700 dark:text-white text-sm font-semibold
                                 transition-all hover:bg-purple-50 dark:hover:bg-white/5"
                    >
                      GitHub
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}