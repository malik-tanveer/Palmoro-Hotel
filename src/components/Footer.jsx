// Footer

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 px-8 py-12 mt-10">
      
      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">PALMORO</h2>
          <p className="text-sm leading-6">
            Welcome to a world where luxury meets serenity. Experience comfort,
            elegance, and personalized hospitality like never before.
          </p>
          <p className="mt-4 text-sm">📞 +123 456 789 00</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Rooms</li>
            <li>Luxury Suites</li>
            <li>Dining</li>
            <li>Spa & Wellness</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to get latest offers & updates
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full rounded-l-md outline-none text-black"
            />
            <button className="bg-blue-900 px-4 rounded-r-md text-white">
              →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2026 Palmoro. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;