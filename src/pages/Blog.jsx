import React from "react";
import { motion } from "framer-motion";

import blogImage from "../images/luxuryRoom.png";

import blogIm1 from "../images/blogImg1.png";
import blogImg2 from "../images/blogImg2.png";
import blogIm3 from "../images/blogImg3.png";
import blogIm4 from "../images/blogImg4.png";
import blogIm5 from "../images/blogImg5.png";
import blogIm6 from "../images/blogImg6.png";
import blogIm7 from "../images/blogImg7.png";
import blogIm8 from "../images/blogImg8.png";
import blogIm9 from "../images/blogImg9.png";
import blogIm10 from "../images/blogImg10.png";
import blogIm11 from "../images/blogImg11.png";
import blogIm12 from "../images/blogImg12.png";

// Blog Images
const blogImages = [
  blogIm1,
  blogImg2,
  blogIm3,
  blogIm4,
  blogIm5,
  blogIm6,
  blogIm7,
  blogIm8,
  blogIm9,
  blogIm10,
  blogIm11,
  blogIm12,
];

// Blog data
const blogs = [
  {
    date: "APR 16",
    category: "CUISINE",
    title: "BIRDS SING IN HARMONY",
    desc: "Twilight falls, the lakeside comes alive with reflections...",
  },
  {
    date: "APR 15",
    category: "BEACH",
    title: "PANORAMIC MOUNTAIN VIEWS",
    desc: "Experience the heart of culture through authentic local cuisine...",
  },
  {
    date: "APR 14",
    category: "NATURE",
    title: "FRESH MOUNTAIN BREEZE",
    desc: "When summer arrives, the Alps transform into paradise...",
  },
  {
    date: "APR 19",
    category: "NATURE",
    title: "ALPINE SCENERY IN SUMMER",
    desc: "When summer arrives, the Alps transform into a breathtaking paradise...",
  },
  {
    date: "APR 20",
    category: "CUISINE",
    title: "A TASTE OF LOCAL TRADITION",
    desc: "Experience the heart of culture through authentic local cuisine...",
  },
  {
    date: "APR 22",
    category: "LAKESIDE",
    title: "EVENINGS BY THE LAKESIDE",
    desc: "Twilight falls, the lakeside comes alive with reflections...",
  },
  {
    date: "APR 12",
    category: "NATURE",
    title: "SCENIC TRAILS ATTRACT HIKERS",
    desc: "When summer arrives, the Alps transform into paradise...",
  },
  {
    date: "APR 25",
    category: "BEACH",
    title: "MEADOWS ALIVE WITH COLORS",
    desc: "Experience the heart of culture through authentic local cuisine...",
  },
  {
    date: "APR 26",
    category: "CUISINE",
    title: "MOUNTAINS MEET THE SKY",
    desc: "Twilight falls, the lakeside comes alive with reflections...",
  },
  {
    date: "APR 27",
    category: "NATURE",
    title: "BIRDSONG FILLS MOUNTAIN AIR",
    desc: "When summer arrives, the Alps transform into paradise...",
  },
  {
    date: "APR 28",
    category: "NATURE",
    title: "SNOWY PEAKS TOWER HIGH",
    desc: "Experience the heart of culture through authentic local cuisine...",
  },
  {
    date: "APR 29",
    category: "RIVERS",
    title: "CRYSTAL RIVERS RUN CLEAR",
    desc: "Twilight falls, the lakeside comes alive with reflections...",
  },
];

// MERGE IMAGES
const fullBlogs = blogs.map((blog, index) => ({
  ...blog,
  img: blogImages[index],
}));

// Animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const BlogPage = () => {
  return (
    <div className="w-full font-serif bg-white">

      // Hero Section
      <div className="relative w-full h-[95vh] overflow-hidden">

        {/* Background Image */}
        <motion.img
          src={blogImage}
          alt="Blog Hero"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        // Overlay
        <div className="absolute inset-0 bg-black/50"></div>

        // Hero Content
        <div className="relative z-10 flex items-center justify-center h-full">

          <motion.h1
            initial={{ opacity: 0, y: 60, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl lg:text-8xl uppercase font-light tracking-widest drop-shadow-2xl text-center"
          >
            Blog & Insight
          </motion.h1>

        </div>
      </div>

      // Blog Cards
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="px-6 md:px-14 lg:px-24 py-24"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          {fullBlogs.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group bg-white overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700 ease-out"
                />

                {/* DATE BADGE */}
                <div className="absolute top-5 left-5 bg-white px-5 py-4 text-center shadow-lg">

                  <p className="text-xs tracking-widest uppercase text-gray-500">
                    {item.date.split(" ")[0]}
                  </p>

                  <p className="text-3xl font-light text-[#1a1a1a]">
                    {item.date.split(" ")[1]}
                  </p>

                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="pt-7">

                <p className="text-sm uppercase tracking-[0.25em] text-[#C56B51]">
                  {item.category}
                </p>

                <h2 className="text-2xl uppercase leading-snug font-light tracking-wide mt-4 text-[#1a1a1a] group-hover:text-[#C56B51] transition duration-500">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-4 text-[15px] leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-6 text-sm uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-[#C56B51] hover:border-[#C56B51] transition duration-300">
                  Read More →
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

    </div>
  );
};

export default BlogPage;