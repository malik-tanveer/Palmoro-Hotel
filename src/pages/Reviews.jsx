import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

// Review Card Component
const ReviewCard = ({ name, review, date, image, Icon }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
    className="bg-[#F9F6F2] p-8 border border-gray-200 flex flex-col justify-between h-full shadow-sm"
  >
    <div>
      {/* Top */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <h3 className="text-gray-800 font-medium tracking-widest uppercase text-sm">
            {name}
          </h3>
        </div>

        <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
          <Icon className="text-gray-600 text-sm" />
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-600 italic leading-relaxed text-md mb-8">
        "{review}"
      </p>
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center border-t border-gray-200 pt-6">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900">
        LOGOIPSUM
      </span>
      <span className="text-gray-400 text-xs tracking-wider">{date}</span>
    </div>
  </motion.div>
);

const ReviewPage = () => {
  const reviewsData = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    name: [
      "Christopher L",
      "Benjamin Harris",
      "Matthew Scott",
      "Dominic Lewis",
      "Alexander Carter",
      "Franklin Parker",
    ][i % 6],

    review: [
      "From arrival to departure, every moment reflects comfort and luxury.",
      "Guests are treated with personalized attention and premium service.",
      "Every stay is designed for elegance, peace, and unforgettable memories.",
      "Hospitality here feels natural, warm, and extremely professional.",
      "A perfect blend of modern luxury and timeless hotel experience.",
    ][i % 5],

    date: "Apr 01, 2026",

    // FIXED IMAGE
    image: `https://i.pravatar.cc/150?img=${i + 1}`,

    // FIXED ICON (component reference)
    Icon: [FaTwitter, FaFacebookF, FaLinkedinIn][i % 3],
  }));

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden font-serif">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1974')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 uppercase text-sm tracking-[0.3em] mb-4"
          >
            Guest Experiences
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-light uppercase tracking-[0.2em]"
          >
            Reviews
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.4 }}
            className="h-[2px] bg-amber-400 mt-8"
          />
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border border-gray-800 text-xs uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition">
            Show More Reviews
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;