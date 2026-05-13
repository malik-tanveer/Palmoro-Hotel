import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryRooms from "../images/luxuryRoom.png";

import room1 from "../images/room1.png";
import room2 from "../images/room2.png";
import room3 from "../images/room3.png";
import room4 from "../images/room4.png";
import room5 from "../images/room5.png";
import room6 from "../images/room6.png";
import room7 from "../images/room7.png";
import room8 from "../images/room8.png";
import room9 from "../images/room9.png";
import room10 from "../images/room10.png";

const RoomGrid = () => {
  // Rooms Data
  const rooms = [
    {
      id: 1,
      name: "Royal Ambassador Suite",
      price: "99",
      guests: 4,
      size: "40 ft.",
      img: room1,
    },
    {
      id: 2,
      name: "Platinum Horizon Room",
      price: "69",
      guests: 4,
      size: "40 ft.",
      img: room2,
    },
    {
      id: 3,
      name: "Executive Ocean View",
      price: "85",
      guests: 2,
      size: "35 ft.",
      img: room3,
    },
    {
      id: 4,
      name: "Presidential Penthouse",
      price: "150",
      guests: 6,
      size: "80 ft.",
      img: room4,
    },
    {
      id: 5,
      name: "Sunset Deluxe Suite",
      price: "75",
      guests: 2,
      size: "38 ft.",
      img: room5,
    },
    {
      id: 6,
      name: "Heritage Classic Room",
      price: "55",
      guests: 2,
      size: "30 ft.",
      img: room6,
    },
    {
      id: 7,
      name: "Garden Villa",
      price: "110",
      guests: 4,
      size: "50 ft.",
      img: room7,
    },
    {
      id: 8,
      name: "Skyline Studio",
      price: "65",
      guests: 2,
      size: "32 ft.",
      img: room8,
    },
    {
      id: 9,
      name: "The Majestic Suite",
      price: "130",
      guests: 4,
      size: "45 ft.",
      img: room9,
    },
    {
      id: 10,
      name: "Zen Harmony Suite",
      price: "90",
      guests: 2,
      size: "42 ft.",
      img: room10,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleRooms = showAll ? rooms : rooms.slice(0, 4);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={LuxuryRooms}
            alt="Luxury Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif uppercase tracking-wide"
          >
            Luxury Rooms
          </motion.h1>
        </div>
      </section>

      {/* ================= ROOMS GRID ================= */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          <AnimatePresence>
            {visibleRooms.map((room) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 right-0 bg-[#b25a43] text-white p-4 flex items-center gap-2">
                    <div className="text-[10px] uppercase opacity-80">
                      Per Night
                    </div>

                    <div className="text-3xl font-light">
                      ${room.price}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6">
                  <h3 className="text-2xl font-serif text-[#0b1c3d] uppercase tracking-wide">
                    {room.name}
                  </h3>

                  <div className="flex items-center gap-6 mt-4 text-gray-500 text-sm">
                    <div>👥 {room.guests} Guests</div>
                    <div>📐 {room.size}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Button */}
        {!showAll && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-4 border border-gray-300 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              Read More Rooms
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default RoomGrid;