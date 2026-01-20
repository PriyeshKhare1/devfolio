///================downgrade os form the claude ai   ==========================
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, Send, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' or 'error'

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "priyesh@example.com", 
      link: "mailto:priyesh@example.com" 
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: "github.com/priyeshkhare", 
      link: "https://github.com/priyeshkhare" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "linkedin.com/in/priyeshkhare", 
      link: "https://linkedin.com/in/priyeshkhare" 
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_us4lzrj",
        "template_gc23jk3",
        formRef.current,
        "ZksYs3KXbf7BtNoZo"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setStatusType("success");
        setLoading(false);
        formRef.current.reset();
        setTimeout(() => setStatus(""), 5000);
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
        setStatusType("error");
        setLoading(false);
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section 
      className="min-h-screen py-24 px-6 bg-linear-to-br from-purple-50 via-white to-pink-50 
                 dark:from-black dark:via-neutral-900 dark:to-black text-gray-900 dark:text-white" 
      id="contact"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="p-6 border border-gray-200 dark:border-neutral-800 rounded-2xl 
                             hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-4 
                             shadow-sm hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 group"
                >
                  <div className="p-4 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg 
                                  group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-purple-600 
                                    dark:group-hover:text-purple-400 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 border border-gray-200 dark:border-neutral-800 rounded-2xl 
                       shadow-xl flex flex-col gap-5 bg-white dark:bg-neutral-900 hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white 
                           placeholder-gray-400 border border-gray-200 dark:border-neutral-700 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white 
                           placeholder-gray-400 border border-gray-200 dark:border-neutral-700 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white 
                           placeholder-gray-400 border border-gray-200 dark:border-neutral-700 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                         disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
                         text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 
                         transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
            
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-2 p-4 rounded-lg ${
                  statusType === "success" 
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800" 
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
                }`}
              >
                {statusType === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
                <p className="font-medium">{status}</p>
              </motion.div>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}