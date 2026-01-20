import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      link: "https://github.com/priyeshkhare" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      link: "https://linkedin.com/in/priyeshkhare" 
    },
    { 
      icon: Mail, 
      label: "Email", 
      link: "mailto:priyesh@example.com" 
    }
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800 
                       text-gray-900 dark:text-neutral-200 pt-16 pb-8 px-6">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              PriFolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              Made with <Heart size={16} className="text-red-500 fill-current animate-pulse" /> by Priyesh Khare
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 
                               transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-100 dark:bg-neutral-900 hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600
                               text-gray-700 dark:text-gray-300 hover:text-white rounded-lg
                               transition-all shadow-sm hover:shadow-lg hover:shadow-purple-500/30"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-900 dark:text-white">Priyesh Khare</span>.  
              All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700
                         text-white rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
