// import { motion } from "framer-motion";
// import { Download } from "lucide-react";

// export default function Home() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black text-white px-4"
//     >
//       <div className="max-w-4xl text-center">

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-6xl font-bold mb-6"
//         >
//           Hi, I’m{" "}
//           <span className="text-purple-500">Priyesh Khare</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-lg md:text-xl text-gray-400 mb-10"
//         >
//           Frontend Developer • React • Tailwind • UX-focused
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-col sm:flex-row justify-center gap-4"
//         >
//           <button
//             onClick={() =>
//               document
//                 .getElementById("projects")
//                 .scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
//           >
//             View Projects
//           </button>

//           <a
//             href="/Priyesh_Khare_Resume.pdf"
//             download
//             className="px-8 py-3 border border-purple-500 rounded-lg hover:bg-purple-600 transition flex items-center justify-center gap-2"
//           >
//             <Download size={18} />
//             Download CV
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



///================downgrade os form the claude ai   ==========================

import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center 
                 bg-linear-to-br from-purple-50 via-white to-pink-50
                 dark:from-black dark:via-neutral-900 dark:to-black 
                 text-gray-900 dark:text-white px-4 pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium animate-pulse">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Priyesh Khare
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-10">
          Frontend Developer • React • Tailwind • UX-focused
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                       text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-purple-500/50 
                       hover:scale-105 transform"
          >
            View Projects
          </button>

          <a
            href="/Priyesh_Khare_Resume.pdf"
            download
            className="px-8 py-4 border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 
                       rounded-xl hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white 
                       transition-all flex items-center justify-center gap-2 font-semibold hover:scale-105 transform"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}