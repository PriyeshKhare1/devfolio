import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero3D() {
  return (
    <section
      id="home"
      className="h-screen w-full relative flex items-center justify-center bg-black"
    >
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Interactive Glass Sphere */}
        <Sphere args={[1.2, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}      // wobble amount
            speed={2}          // animation speed
            roughness={0.5}
            metalness={0.5}
          />
        </Sphere>

        {/* Stars in background */}
        <Stars
          radius={100}    // spread radius
          depth={50}      // z-depth
          count={500}     // number of stars
          factor={4}      // size factor
          saturation={0.5}
          fade
        />

        {/* Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Overlay Text */}
      <div className="absolute z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Priyesh Khare
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 mb-10"
        >
          Frontend Developer • React • 3D & UX-focused
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 
                       hover:from-purple-700 hover:to-pink-700 text-white rounded-xl 
                       font-semibold transition-all shadow-lg hover:shadow-purple-500/50 
                       hover:scale-105 transform flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/Priyesh_Khare_Resume.pdf"
            download
            className="px-8 py-4 border-2 border-white/30 hover:border-purple-400
                       text-white rounded-xl font-semibold transition-all
                       hover:bg-white/10 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
