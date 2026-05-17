import React from "react";
import { motion } from "framer-motion";
import Contact from "./Contact"

// Images

import heroImg from "/heroImg.png";
import graph from "/graphImg.png";

import logo1 from "/logo1.png";
import logo2 from "/logo2.png";
import logo3 from "/logo3.png";
import logo4 from "/logo4.png";

import gallery1 from "/room1.png";
import gallery2 from "/room2.png";
import gallery3 from "/room3.png";
import gallery4 from "/room4.png";
import gallery5 from "/room5.png";
import gallery6 from "/room6.png";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen overflow-x-hidden">

        <div className="w-full px-5 sm:px-6 md:px-12 pt-24 md:pt-28">

          {/* Animated Heading */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="w-full text-[22vw] sm:text-[18vw] md:text-[18vw] font-serif text-[#0b1c3d] leading-[0.9]"
          >
            {"PALMORO".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-6 text-gray-500 text-xs sm:text-sm md:text-base"
          >
            <p>Welcome to a world where luxury meets serenity.</p>
            <p className="sm:text-right">
              Heart of Horow, Switzerland
            </p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 sm:mt-14 px-5 sm:px-6 md:px-12"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            src={heroImg}
            alt="hero"
            className="w-full object-cover rounded-xl"
          />
        </motion.div>
      </section>

      <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 text-gray-900">

        <div className="flex justify-between items-center mb-16">
          <span className="text-red-300 text-xl tracking-widest">
            .....
          </span>

          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">
            Established 1993
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight uppercase">
              Welcome to a sanctuary of sophistication,
              where every detail is designed to delight.
            </h1>
          </motion.div>

          {/* FLOATING CIRCLE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">

              <svg className="absolute w-full h-full -rotate-90">

                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#f3f4f6"
                  strokeWidth="1"
                  fill="transparent"
                />

                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#fecaca"
                  strokeWidth="2"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  initial={{ strokeDashoffset: 1000 }}
                  whileInView={{ strokeDashoffset: 300 }}
                  transition={{ duration: 1.5 }}
                />
              </svg>

              <div className="text-center z-10">

                <motion.h2
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="text-5xl sm:text-6xl md:text-7xl font-light"
                >
                  50+
                </motion.h2>

                <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase mt-2">
                  Completed Projects
                </p>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-10">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

          <div className="lg:w-1/3"></div>

          <div className="lg:w-2/3">

            <div className="max-w-2xl text-gray-700 text-sm md:text-xl leading-relaxed space-y-6">

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our story is built on the belief that true luxury lies in the art of attention.
                Every guest is treated as a personal guest of honor with experiences crafted
                around their preferences and passions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Welcome to a sanctuary of sophistication,
                where every detail is designed to delight.
                Our luxury hotel redefines comfort and exclusivity.
              </motion.p>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 px-8 py-4 border border-gray-200 text-lg tracking-widest uppercase hover:bg-gray-50 transition-all"
                >
                  <span className="text-red-400">→</span>
                  READ MORE
                </motion.button>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-t border-gray-100 pt-10"
        >
          <img
            src={graph}
            alt="Palmero Architecture"
            className="w-full h-auto object-contain opacity-80"
          />
        </motion.div>
      </section>

      //  NEW LOGO & GALLERY SECTION
      <section className="w-full px-6 md:px-16 py-16 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Logo Grid Row */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-8 mb-16 border-b border-gray-100 pb-12"
          >
            <img src={logo1} alt="Logoipsum 1" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={logo2} alt="Logoipsum 2" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={logo3} alt="Logoipsum 3" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={logo4} alt="Logoipsum 4" className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </motion.div>

          {/* Masonry-Style Image Row */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-end"
          >
            <div className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-sm">
              <img src={gallery1} alt="Interior 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-sm lg:mb-12">
              <img src={gallery2} alt="Interior 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-sm">
              <img src={gallery3} alt="Interior 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full aspect-[1/1] overflow-hidden rounded-lg shadow-sm lg:mb-8">
              <img src={gallery4} alt="Interior 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full aspect-[4/5] overflow-hidden rounded-lg shadow-sm">
              <img src={gallery5} alt="Interior 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm lg:mb-16">
              <img src={gallery6} alt="Interior 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

        </div>
      </section>

      <Contact />
    </>
  );
};

export default Hero;
