import React from 'react';
import { Link } from 'react-router-dom';
import {  FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B3C3C] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-4">
        
        {/* 🧘 Brand / About */}
        <div>
          <h2 className="text-3xl font-bold text-[#A7D7C5]">Yogaholic</h2>
          <p className=" text-[#DCEAD9] mt-2">
            Find your peace, one pose at a time. 🌿
          </p>
        </div>

        {/* 🧭 Navigation Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold text-[#A7D7C5] text-2xl mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-[#A7D7C5] text-lg">Home</Link>
          <Link to="/about" className="hover:text-[#A7D7C5] text-lg">About</Link>
          <Link to="/contact" className="hover:text-[#A7D7C5] text-lg">Contact</Link>
          <Link to="/bmiCalculator" className="hover:text-[#A7D7C5] text-lg">BMI Calculator</Link>
          <Link to="/poses" className="hover:text-[#A7D7C5] text-lg">Mood-Based Poses</Link>
        </div>

        {/* 📱 Social Media */}
        <div>
          <h3 className="font-semibold text-[#A7D7C5] mb-2 text-2xl">Connect With Us</h3>
          <div className="flex gap-6 text-xl ml-2 mt-4">
  <a href="mailto:sumbuln13@gmail.com">
    <FaEnvelope className="hover:text-[#A7D7C5]" />
  </a>
  <a href="https://www.linkedin.com/in/sumbul-nadeem/" target="_blank" rel="noreferrer">
    <FaLinkedin className="hover:text-[#A7D7C5]" />
  </a>
  <a href="https://github.com/Sumbul-Nadeem" target="_blank" rel="noreferrer">
    <FaGithub className="hover:text-[#A7D7C5]" />
  </a>
</div>

        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-[#DCEAD9] mt-16 -mb-6">
        © {new Date().getFullYear()} Yogaholic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
