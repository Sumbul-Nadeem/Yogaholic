import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Poses", path: "/poses" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#F9FAF9] text-black px-6 py-4 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-[#2D6A6A]">
          Yogaholic
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
           <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-6 h-6 text-black"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  {isOpen ? (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  ) : (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  )}
</svg>

          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="hover:text-[#A7D7C5] hover:text-xl text-lg font-semibold">
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
  <div className="md:hidden bg-[#F3F4F6] text-[#2D6A6A] shadow-inner rounded-b-lg mt-2 px-6 py-4 space-y-3">
    {menuItems.map((item, index) => (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setIsOpen(false)}
        className="block text-base font-medium fade-in"
        style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
      >
        {item.name}
      </Link>
    ))}
  </div>
)}


    </nav>
  );
};

export default Navbar;
