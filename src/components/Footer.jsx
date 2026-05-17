import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="relative bg-[#02153a] text-white overflow-hidden pt-16">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d1735c]/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d1735c]/10 blur-[140px] rounded-full"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 backdrop-blur-sm bg-white/[0.02]">

          {/* Left Side */}
          <motion.div
            variants={fadeUp}
            className="p-8 flex flex-col justify-between border-r border-white/10"
          >
            <div>

              {/* Animated Logo */}
              <motion.h2
                initial={{ opacity: 0, letterSpacing: "25px" }}
                whileInView={{ opacity: 1, letterSpacing: "6px" }}
                transition={{ duration: 1.2 }}
                className="text-3xl font-semibold tracking-[6px] text-[#d1735c]"
              >
                PALMORO
              </motion.h2>

              {/* Animated Heading */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="mt-10 text-3xl leading-[55px] font-light text-white"
              >
                SUPERPOWERS, EVERYWHERE
                <br />
                YOU WORK
              </motion.p>
            </div>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-16 text-sm text-gray-300"
            >
              2026 Copyright & design by @CaseFlow
            </motion.p>
          </motion.div>

          {/* Products */}
          <motion.div
            variants={fadeUp}
            className="p-8 border-r border-white/10"
          >
            <h3 className="text-3xl font-semibold mb-8">Products</h3>

            <ul className="space-y-5 text-xl text-gray-200">
              {[
                "About Us",
                "Blog",
                "Faq",
                "Testimonials",
                "Contact Us",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 12,
                    color: "#d1735c",
                    scale: 1.03,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={fadeUp}
            className="p-8 border-r border-white/10"
          >
            <h3 className="text-3xl font-semibold mb-8">Company</h3>

            <ul className="space-y-5 text-xl text-gray-200">
              {["Room", "Careers", "Reviews"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 12,
                    color: "#d1735c",
                    scale: 1.03,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeUp}
            className="p-8"
          >
            <h3 className="text-3xl font-semibold mb-8">Products</h3>

            <ul className="space-y-5 text-xl text-gray-200">
              {["License", "Change Log", "Style Guide"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      x: 12,
                      color: "#d1735c",
                      scale: 1.03,
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        {/* Huge Animated Text */}
        <div className="w-full overflow-hidden text-center">

          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            whileHover={{
              letterSpacing: "12px",
            }}
            className="text-[150px] lg:text-[200px] leading-none font-serif text-[#d1735c] tracking-wide cursor-default"
          >
            PALMORO
          </motion.h1>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;