import React from 'react';
import { useNavigate } from 'react-router-dom';

const moods = [
   { name: 'Calm', emoji: '🧘‍♀️', color: 'bg-[#E3FCE9]' },
  { name: 'Tired', emoji: '😴', color: 'bg-[#FDF6E3]' },
  { name: 'Sad', emoji: '😢', color: 'bg-[#FCE1E4]' },
  { name: 'Stressed', emoji: '😫', color: 'bg-red-200' },
  { name: 'Energetic', emoji: '💪', color: 'bg-[#CFE8E5]' },
 
];

const Poses = () => {
  const navigate = useNavigate();

  const handleMoodClick = (mood) => {
    navigate(`/poses/${mood.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-[#2D6A6A] text-white px-6 py-40">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#A7D7C5]">How Are You Feeling Today?</h1>
        <p className="text-[#DCEAD9] mt-2 text-lg">
          Select a mood to explore yoga poses tailored for your emotional and physical state 🌿
        </p>
      </div>

      <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {moods.map((mood) => (
          <div
            key={mood.name}
            onClick={() => handleMoodClick(mood.name)}
            className={`cursor-pointer ${mood.color} text-[#2D6A6A] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg`}
          >
            <div className="text-5xl mb-3 text-center">{mood.emoji}</div>
            <h3 className="text-xl font-semibold text-center">{mood.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poses;
