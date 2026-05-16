import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] text-gray-300 overflow-hidden mt-10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-800/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 px-8 py-14 max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">
              PALMORO
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              Welcome to a world where luxury meets serenity.
              Experience comfort, elegance, and personalized
              hospitality like never before.
            </p>

            <p className="mt-5 text-sm text-white font-medium">
              📞 +123 456 789 00
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all duration-300"
                  >
                    <Icon className="text-white text-sm" />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-5 text-lg">
              Products
            </h3>

            <ul className="space-y-3 text-sm">
              {["Rooms", "Luxury Suites", "Dining", "Spa & Wellness"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-5 text-lg">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              {["About Us", "Careers", "Reviews", "Contact"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-5 text-lg">
              Stay Updated
            </h3>

            <p className="text-sm mb-5 text-gray-400 leading-6">
              Subscribe to get the latest offers, luxury deals &
              exclusive updates.
            </p>

            <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full bg-transparent outline-none text-white placeholder:text-gray-400"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-blue-700 to-cyan-500 px-5 text-white font-semibold"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-400">
            © 2026 Palmoro. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;