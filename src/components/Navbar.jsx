import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-black text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/home-v2">Home V2</Link>
      <Link to="/about">About</Link>
      <Link to="/news">News</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/faqs">Faqs</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/career">Career</Link>
    </nav>
  );
};

export default Navbar;