import React from 'react'
import { useNavigate } from 'react-router-dom';
import mainImage from '../assets/MainPose.png';

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/bmicalculator');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 min-h-[90vh] bg-[#2D6A6A] text-white">
      
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left mt-4">
        <h1 className="text-5xl font-bold mb-4 mt-8">Welcome to Yogaholic!</h1>
        <p className="text-xl md:text-2xl font-light mb-6">
          Find your inner balance through daily yoga, custom<br/> routines, and mindful living. 🌿
        </p>
        <button
          onClick={handleRedirect}
          className="bg-white text-[#2D6A6A] font-semibold px-6 py-3 rounded-full hover:bg-[#A7D7C5] transition mt-4 mx-auto md:ml-0"

        >
          Check Your BMI Now
        </button>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-20px flex justify-center">
        <img
          src={mainImage}
          alt="Meditation Pose"
          className="w-[300px] md:w-[400px] object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
