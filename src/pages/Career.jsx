import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

/* ================= JOB DATA ================= */

const jobs = [
  {
    id: 1,
    title: "FRONT DESK ASSOCIATE",
    description:
      "We're looking for a warm and organized Front Desk Associate to greet guests and ensure a seamless experience.",
    location: "NEW YORK",
    type: "FULL-TIME",
  },
  {
    id: 2,
    title: "EXECUTIVE CHEF",
    description:
      "We're seeking an experienced Executive Chef to lead our kitchen team and craft luxury dining experiences.",
    location: "LOS ANGELES",
    type: "FULL-TIME",
  },
  {
    id: 3,
    title: "HOUSEKEEPING ATTENDANT",
    description:
      "Join our housekeeping team to maintain guest rooms and hotel facilities with premium standards.",
    location: "MIAMI, FL",
    type: "FULL-TIME",
  },

  /* ===== NEW JOBS ===== */

  {
    id: 4,
    title: "VALET PARKING ATTENDANT",
    description:
      "We're hiring a professional and courteous Valet Parking Attendant to welcome guests and manage luxury vehicle parking services.",
    location: "LOS ANGELES",
    type: "FULL-TIME",
  },
  {
    id: 5,
    title: "HOTEL MANAGER",
    description:
      "Oversee daily hotel operations, staff performance, and guest satisfaction while maintaining luxury hospitality standards.",
    location: "NEW YORK",
    type: "FULL-TIME",
  },
  {
    id: 6,
    title: "HOUSEKEEPING SUPERVISOR",
    description:
      "Lead and supervise housekeeping staff to ensure exceptional cleanliness and premium guest room presentation.",
    location: "MIAMI",
    type: "FULL-TIME",
  },
  {
    id: 7,
    title: "GUEST RELATIONS OFFICER",
    description:
      "Deliver outstanding guest experiences by handling guest inquiries, VIP services, and ensuring complete satisfaction.",
    location: "CHICAGO",
    type: "FULL-TIME",
  },
];

/* ================= COMPONENT ================= */

const CareerPage = () => {
  return (
    <div className="bg-[#f8f5f2] overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1974&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-serif text-white uppercase tracking-[0.2em] mb-6"
          >
            Open Opportunity
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "180px" }}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-[2px] bg-white mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/80 max-w-2xl mx-auto text-lg font-sans"
          >
            Join our luxury hospitality team and build unforgettable guest experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              color: "#000",
            }}
            className="mt-10 border border-white px-8 py-3 text-white uppercase tracking-[0.2em] transition-all duration-300"
          >
            Explore Careers
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute bottom-8 z-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* ================= JOB LISTINGS ================= */}

      <section className="max-w-6xl mx-auto px-4 py-24">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Current Openings
          </h2>

          <div className="w-32 h-[2px] bg-black mx-auto mb-6"></div>

          <p className="text-gray-600 max-w-2xl mx-auto font-sans text-lg">
            Discover exciting opportunities to grow your career in luxury hospitality.
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between gap-8">
                
                {/* Left Side */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                    {job.title}
                  </h2>

                  <p className="text-gray-600 text-lg mb-8 max-w-2xl font-sans leading-relaxed">
                    {job.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-4">
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center border border-gray-300 rounded-full px-5 py-2 text-sm uppercase tracking-wide font-sans"
                    >
                      <MapPin size={14} className="mr-2" />
                      {job.location}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center border border-gray-300 rounded-full px-5 py-2 text-sm uppercase tracking-wide font-sans"
                    >
                      <Clock size={14} className="mr-2" />
                      {job.type}
                    </motion.div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      x: 8,
                    }}
                    className="flex items-center text-sm font-bold uppercase tracking-[0.2em]"
                  >
                    Apply Now
                    <ArrowRight size={18} className="ml-3" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;