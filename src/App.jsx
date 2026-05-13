import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import HomeV2 from "./pages/HomeV2";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Blog from "./pages/Blog";
import Faqs from "./pages/Faqs";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-v2" element={<HomeV2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;