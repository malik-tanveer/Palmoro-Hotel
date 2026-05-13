import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, ChevronDown } from "lucide-react";
import luxuryroom from "/luxuryRoom.png";

const CombinedHero = () => {
  const [open, setOpen] = useState(null);

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full">

      <div className="relative h-screen w-full overflow-hidden font-serif">

        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src={luxuryroom}
            alt="Luxury Room"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
        </motion.div>

        <div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 lg:px-16">

          <div className="flex flex-col items-center justify-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70"
            >
              Luxury Hotel & Resort
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="text-[14vw] font-light leading-none text-white md:text-[11vw]"
            >
              PALMORO
            </motion.h1>
          </div>

          {/* Booking Bar */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-white w-full max-w-6xl mx-auto flex flex-col md:flex-row shadow-2xl mt-16"
          >
            {/* Check In */}
            <div
              onClick={() => setOpen(open === "in" ? null : "in")}
              className="flex-1 relative border-r p-5 flex space-x-4 cursor-pointer hover:bg-gray-50"
            >
              <Calendar className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <span className="text-xs font-semibold uppercase">
                  Check in
                </span>
                <p className="text-sm text-gray-500">26 June 2026</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 mt-2" />
            </div>

            {/* Check Out */}
            <div
              onClick={() => setOpen(open === "out" ? null : "out")}
              className="flex-1 relative border-r p-5 flex space-x-4 cursor-pointer hover:bg-gray-50"
            >
              <Calendar className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <span className="text-xs font-semibold uppercase">
                  Check out
                </span>
                <p className="text-sm text-gray-500">30 June 2026</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 mt-2" />
            </div>

            {/* Guest */}
            <div
              onClick={() => setOpen(open === "guest" ? null : "guest")}
              className="flex-1 relative p-5 flex space-x-4 cursor-pointer hover:bg-gray-50"
            >
              <Users className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <span className="text-xs font-semibold uppercase">
                  Guest
                </span>
                <p className="text-sm text-gray-500">1 - 3 person</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 mt-2" />
            </div>

            <button className="bg-[#C56B51] text-white uppercase text-xs px-10 py-6">
              CHECK AVAILABILITY
            </button>
          </motion.div>
        </div>
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white text-[#1a1a1a] font-serif p-8 md:p-16 lg:p-24"
      >
        {/* Header */}
        <motion.div variants={item} className="flex justify-between mb-12">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="h-1 w-1 bg-gray-400 rounded-full"
              ></span>
            ))}
          </div>

          <a href="#" className="text-sm uppercase tracking-widest">
            About Us
          </a>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-16 max-w-5xl"
        >
          DISCOVER A SANCTUARY OF COMFORT AND SOPHISTICATION CRAFTED TO
          ELEVATE YOUR TRAVEL EXPERIENCE.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div variants={item} className="md:col-span-3 pb-8">
            <p className="text-lg text-gray-700 mb-8">
              Welcome to our hotel, where comfort and elegance meet.
            </p>

            <button className="bg-[#001a33] text-white px-8 py-4">
              Read More
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="md:col-span-6 flex justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-md aspect-[4/5] overflow-hidden rounded-t-full border"
            >
              <img
                src={luxuryroom}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="md:col-span-3 pb-8">
            <p className="text-gray-700">
              Inspired by modern luxury and warm hospitality for every guest.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CombinedHero;