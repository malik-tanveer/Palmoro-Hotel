import React from "react";
import {
  Bed,
  MapPin,
  Sparkles,
  Utensils,
  Leaf,
  Bath,
} from "lucide-react";
import { motion } from "framer-motion";

import aboutImg1 from "../images/aboutImg1.png";
import aboutImg2 from "../images/aboutImg2.png";
import aboutImg3 from "../images/aboutImg3.png";
import aboutImg4 from "../images/aboutImg4.png";
import aboutImg5 from "../images/aboutImg5.png";
import aboutImg6 from "../images/aboutImg6.png";

const HotelExperienceSection = () => {
  const timelineData = [
    {
      year: "1990",
      title: "THE BEGINNING",
      description:
        "Founded with a vision to provide luxury and comfort, starting as a small boutique property.",
      image: aboutImg3,
    },
    {
      year: "2005",
      title: "INTERNATIONAL RECOGNITION",
      description:
        "Gained global attention, welcoming travelers from multiple countries and earning acclaim for service excellence.",
      image: aboutImg4,
    },
    {
      year: "2015",
      title: "SUSTAINABILITY & GROWTH",
      description:
        "Introduced eco-friendly practices and upgraded facilities, enhancing guest experience while promoting green initiatives.",
      image: aboutImg5,
    },
    {
      year: "2026",
      title: "A NEW ERA",
      description:
        "Continuing to redefine modern luxury hospitality with timeless elegance and unforgettable experiences.",
      image: aboutImg6,
    },
  ];

  const featuresLeft = [
    {
      icon: <Bed size={26} />,
      title: "Luxurious Rooms",
    },
    {
      icon: <MapPin size={26} />,
      title: "Prime Location",
    },
    {
      icon: <Sparkles size={26} />,
      title: "Modern Amenities",
    },
  ];

  const featuresRight = [
    {
      icon: <Utensils size={26} />,
      title: "Exceptional Service",
    },
    {
      icon: <Leaf size={26} />,
      title: "Sustainable Practices",
    },
    {
      icon: <Bath size={26} />,
      title: "Memorable Experiences",
    },
  ];

  return (
    <section className="bg-[#f8f5f2] overflow-hidden relative py-24 font-serif">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c1664d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c1664d]/10 rounded-full blur-3xl"></div>

      {/* HERO SECTION */}
      <div className="px-6 md:px-16 lg:px-24 mb-32 relative z-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-sm text-[#c1664d] mb-4"
        >
          Luxury Hotel & Resort
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl leading-tight mb-6 text-[#1d1d1d]"
        >
          SERVING <br />
          SINCE 1990
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-gray-600 text-lg leading-relaxed"
        >
          Welcome to a sanctuary of sophistication, where every detail is
          designed to delight. Our luxury hotel redefines comfort and
          exclusivity — from world-class suites to unforgettable experiences.
        </motion.p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 relative">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] shadow-2xl group"
          >
            <img
              src={aboutImg1}
              alt="Luxury Suite"
              className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] shadow-2xl group md:mt-20"
          >
            <img
              src={aboutImg2}
              alt="Hotel Lobby"
              className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
            />
          </motion.div>

          {/* Floating Circle */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -bottom-14 -translate-x-1/2"
          >
            <div className="relative flex items-center justify-center">

              {/* Rotating Text */}
              <div className="absolute w-36 h-36 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />

                  <text className="text-[8px] uppercase tracking-[0.25em] fill-[#7a3b2e] font-semibold">
                    <textPath xlinkHref="#circlePath">
                      Luxury • Comfort • Elegance • Since 1990 •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="bg-[#c1664d] w-24 h-24 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10"
              >
                <Bed className="text-white w-10 h-10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="px-6 md:px-16 lg:px-24 mb-36 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-sm text-[#c1664d] mb-5">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl tracking-[0.1em] uppercase font-light leading-tight text-[#1a2b48]">
            Exceptional Hospitality <br />
            You Can Trust
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 items-center">

          {/* Left Features */}
          <div className="flex flex-col gap-20">
            {featuresLeft.map((item, index) => (
              <FeatureItem key={index} item={item} delay={index * 0.2} />
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="h-[600px] w-full rounded-[30px] shadow-2xl overflow-hidden group"
          >
            <img
              src={aboutImg2}
              alt="Luxury Hotel"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-20">
            {featuresRight.map((item, index) => (
              <FeatureItem key={index} item={item} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">

        {/* Vertical Line */}
        <div className="absolute left-[35%] top-0 bottom-0 w-[1px] bg-gray-300 hidden md:block"></div>

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative"
            >

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full md:w-[30%] shrink-0"
              >
                <div className="overflow-hidden rounded-[25px] shadow-xl group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </motion.div>

              {/* Circle Marker */}
              <div className="hidden md:flex absolute left-[35%] -translate-x-1/2 z-20">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="w-5 h-5 rounded-full bg-[#c1664d] border-4 border-white shadow-lg"
                ></motion.div>
              </div>

              {/* Content */}
              <div className="w-full md:w-[60%]">

                <span className="text-sm tracking-[0.3em] uppercase text-[#c1664d]">
                  {item.year}
                </span>

                <h2 className="text-3xl md:text-5xl mt-3 mb-4 leading-tight text-[#1d1d1d]">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-xl">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

/* Reusable Feature Component */
const FeatureItem = ({ item, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="mb-6 text-[#c1664d] border border-[#c1664d]/20 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#c1664d] group-hover:text-white transition duration-500">
        {item.icon}
      </div>

      <h3 className="text-lg tracking-[0.2em] uppercase font-medium max-w-[220px] text-[#1a2b48]">
        {item.title}
      </h3>
    </motion.div>
  );
};

export default HotelExperienceSection;