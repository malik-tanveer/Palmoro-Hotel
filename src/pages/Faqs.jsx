import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqData = [
  {
    question: "WHAT TIME IS CHECK-IN AND CHECK-OUT?",
    answer:
      "Check-in time is from 2:00 PM, and check-out is until 12:00 PM. Early check-in or late check-out may be available upon request.",
  },
  {
    question: "DO YOU OFFER AIRPORT TRANSPORTATION?",
    answer:
      "Yes, we provide luxury airport pickup and drop-off services for our guests upon request.",
  },
  {
    question: "IS BREAKFAST INCLUDED WITH THE ROOM?",
    answer:
      "Complimentary breakfast is included with selected room packages and suites.",
  },
  {
    question: "ARE PETS ALLOWED IN THE HOTEL?",
    answer:
      "Yes, pets are welcome in selected rooms. Additional charges may apply.",
  },
  {
    question: "DO YOU HAVE FREE WIFI AVAILABLE?",
    answer:
      "High-speed complimentary WiFi is available throughout the hotel premises.",
  },
  {
    question: "DO YOU HAVE A SWIMMING POOL AND SPA?",
    answer:
      "Yes, our hotel features a luxury swimming pool, wellness spa, sauna, and relaxation lounge for all guests.",
  },
  {
    question: "IS PARKING AVAILABLE AT THE HOTEL?",
    answer:
      "Complimentary secure parking and valet parking services are available for hotel guests.",
  },
  {
    question: "CAN I CANCEL OR MODIFY MY RESERVATION?",
    answer:
      "Yes, reservations can be modified or canceled according to our booking and cancellation policy.",
  },
  {
    question: "DO YOU PROVIDE ROOM SERVICE?",
    answer:
      "Our premium 24/7 room service offers a wide range of gourmet meals, beverages, and personalized guest assistance.",
  },
];

const FAQPage = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] font-serif">

      <section className="px-6 md:px-14 lg:px-24 pt-32 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-[52px] md:text-[80px] leading-none uppercase font-light text-[#111]">
            FAQ Pages
          </h1>

          <p className="max-w-3xl text-gray-500 text-lg leading-relaxed mt-10">
            Welcome to a sanctuary of sophistication, where every detail is
            designed to delight. Our luxury hotel redefines comfort and
            exclusivity — from world-class suites.
          </p>

        </motion.div>

        <div className="w-full h-[1px] bg-gray-300 mt-20"></div>

      </section>

      <section className="px-6 md:px-14 lg:px-24 pb-32">

        <div className="max-w-4xl mx-auto space-y-5">

          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border transition-all duration-500 overflow-hidden
                ${
                  active === index
                    ? "border-[#d69b86] bg-[#f7f7f5]"
                    : "border-gray-300 bg-transparent"
                }`}
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-8 text-left"
              >

                <h2 className="text-xl md:text-[32px] uppercase font-light tracking-wide text-[#111]">
                  {faq.question}
                </h2>

                <span className="ml-6 text-[#1a1a1a]">
                  {active === index ? (
                    <Minus size={28} strokeWidth={1.5} />
                  ) : (
                    <Plus size={28} strokeWidth={1.5} />
                  )}
                </span>

              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >

                    <div className="px-8 pb-8">

                      <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>

                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default FAQPage;