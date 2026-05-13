import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-blue-900">
        PALMORO
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
        <Link className="hover:text-blue-900 transition" to="/">Home</Link>
        <Link className="hover:text-blue-900 transition" to="/home-v2">Home V2</Link>
        <Link className="hover:text-blue-900 transition" to="/about">About</Link>
        <Link className="hover:text-blue-900 transition" to="/rooms">Rooms</Link>
        <Link className="hover:text-blue-900 transition" to="/blog">Blog</Link>
        <Link className="hover:text-blue-900 transition" to="/faqs">Faqs</Link>
        <Link className="hover:text-blue-900 transition" to="/reviews">Reviews</Link>
        <Link className="hover:text-blue-900 transition" to="/contact">Contact</Link>
        <Link className="hover:text-blue-900 transition" to="/career">Career</Link>
      </div>

      {/* Button (Desktop) */}
      <div className="hidden lg:block">
        <button className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
          Reservation →
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={() => setOpen(!open)} className="text-2xl">
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 lg:hidden z-50"
          >
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/home-v2" onClick={() => setOpen(false)}>Home V2</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
            <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link to="/faqs" onClick={() => setOpen(false)}>Faqs</Link>
            <Link to="/reviews" onClick={() => setOpen(false)}>Reviews</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/career" onClick={() => setOpen(false)}>Career</Link>

            <button className="bg-blue-900 text-white px-5 py-2 rounded-full w-full">
              Reservation →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;