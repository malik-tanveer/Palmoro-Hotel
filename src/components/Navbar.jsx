import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-blue-900">
        PALMORO
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <Link className="hover:text-blue-900 transition" to="/">Home</Link>
        <Link className="hover:text-blue-900 transition" to="/home-v2">Home V2</Link>
        <Link className="hover:text-blue-900 transition" to="/about">About</Link>
        <Link className="hover:text-blue-900 transition" to="/news">News</Link>
        <Link className="hover:text-blue-900 transition" to="/rooms">Rooms</Link>
        <Link className="hover:text-blue-900 transition" to="/blog">Blog</Link>
        <Link className="hover:text-blue-900 transition" to="/faqs">Faqs</Link>
        <Link className="hover:text-blue-900 transition" to="/reviews">Reviews</Link>
        <Link className="hover:text-blue-900 transition" to="/contact">Contact</Link>
        <Link className="hover:text-blue-900 transition" to="/career">Career</Link>
      </div>

      {/* Button */}
      <div>
        <button className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
          Reservation →
        </button>
      </div>

    </nav>
  );
};

export default Navbar;