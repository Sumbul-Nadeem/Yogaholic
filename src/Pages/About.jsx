import React from 'react';
import MainPose from '../assets/MainPose.png';


const About = () => {
  return (
    <div className="min-h-screen bg-[#2D6A6A] text-white px-6 py-16">
      {/* Grid: Left Text, Right Image */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
  {/* Left: Illustration (now first) */}
  <div className="flex justify-center mt-10 ">
    <img
      src={MainPose} 
      alt="Yoga Girl"
      className="w-full max-w-sm rounded-xl shadow-lg  "
    />
  </div>

  {/* Right: Title + Intro */}
  <div >
    <h1 className="text-4xl font-bold mb-2 text-center text-[#A7D7C5]">About Us</h1>
    <h2 className="text-2xl font-semibold mb-6 text-center">Balance your body, calm your mind.</h2>
    <p className="text-[#DCEAD9] leading-relaxed text-base">
      Yogaholic is your go-to yoga companion — built with simplicity, care, and a deep love for mindful living.
      Whether you're a student, a beginner, or someone in need of daily peace, our website are here to guide you.
    </p>
  </div>
</div>


      {/* Mission Section */}
      <div className="mt-24 text-center max-w-3xl mx-auto bg-white text-[#2D6A6A] p-8 rounded-xl shadow">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl leading-relaxed">
          At Yogaholic, our goal is to make yoga accessible and enjoyable for all. We combine traditional practices with modern tools like mood-based flows, BMI calculators, and daily routines to help you grow physically, mentally, and emotionally.
        </p>
        <p className="mt-4 italic font-medium">Breathe in calm. Breathe out joy. 🌿</p>
      </div>
    </div>
  );
};

export default About;
