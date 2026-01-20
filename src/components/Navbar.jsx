

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Update active link on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-white/10" 
          : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent 
                     hover:from-purple-500 hover:to-pink-500 transition-all"
        >
          PriFolio
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(link.id)}
              className={`relative text-sm font-medium transition-all group
                ${active === link.id
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-purple-600 to-pink-600 
                transition-all ${active === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </motion.button>
          ))}

          <motion.a
            href="/Priyesh_Khare_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                       bg-linear-to-r from-purple-600 to-pink-600 
                       hover:from-purple-700 hover:to-pink-700
                       text-white rounded-lg transition-all
                       shadow-lg hover:shadow-purple-500/50 hover:shadow-xl"
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl bg-white/90 dark:bg-black/90
                       border-t border-gray-200/20 dark:border-white/10 px-4 py-6 space-y-3 overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all
                  ${active === link.id
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="/Priyesh_resume_2.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold
                         bg-linear-to-r from-purple-600 to-pink-600
                         hover:from-purple-700 hover:to-pink-700
                         text-white rounded-lg transition-all
                         shadow-lg hover:shadow-purple-500/50 w-full justify-center"
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}