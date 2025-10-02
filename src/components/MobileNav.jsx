import React, { useState } from "react";
import logo from "../assets/pinnacleLogo.png";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src={logo} alt="Pinnacle Edu Logo" className="h-10" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row space-x-6 text-lg font-medium">
          <li><a href="/" className="hover:text-[#396D8C]">Home</a></li>
          <li><a href="/Consulting" className="hover:text-[#396D8C]">Consulting</a></li>
          <li><a href="/Tutoring" className="hover:text-[#396D8C]">Tutoring & Test Prep</a></li>
          <li><a href="/Team" className="hover:text-[#396D8C]">Our Team</a></li>
          <li><a href="/Contact" className="hover:text-[#396D8C]">Contact Us</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
            <li><a href="/" className="hover:text-[#396D8C]" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/Consulting" className="hover:text-[#396D8C]" onClick={() => setIsOpen(false)}>Consulting</a></li>
            <li><a href="/Tutoring" className="hover:text-[#396D8C]" onClick={() => setIsOpen(false)}>Tutoring & Test Prep</a></li>
            <li><a href="/Team" className="hover:text-[#396D8C]" onClick={() => setIsOpen(false)}>Our Team</a></li>
            <li><a href="/Contact" className="hover:text-[#396D8C]" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileNav;
