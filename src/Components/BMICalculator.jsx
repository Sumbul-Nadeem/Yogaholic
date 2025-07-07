import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BMICalculator = () => {

  const [routineSuggestion, setRoutineSuggestion] = useState('');


  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const navigate = useNavigate();


  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    // BMI Category logic
    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory('Normal');
    else if (bmiValue >= 25 && bmiValue < 29.9) setCategory('Overweight');
    else setCategory('Obese');

    if (bmiValue < 18.5) {
  setCategory('Underweight');
  setRoutineSuggestion('Try gentle Hatha yoga to build core strength and posture. Start slow and be consistent.');
} else if (bmiValue >= 18.5 && bmiValue < 24.9) {
  setCategory('Normal');
  setRoutineSuggestion('Maintain your fitness with energizing Vinyasa flows and weekly flexibility routines.');
} else if (bmiValue >= 25 && bmiValue < 29.9) {
  setCategory('Overweight');
  setRoutineSuggestion('Focus on beginner-friendly fat-burning flows like Power Yoga and deep stretching.');
} else {
  setCategory('Obese');
  setRoutineSuggestion('Start with low-impact chair yoga, deep breathing, and meditation. Build stamina over time.');
}


  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <div className="min-h-[90vh] bg-[#2D6A6A] text-white px-6 py-12 flex flex-col items-center ">
      <h1 className="text-4xl font-bold mb-8 mt-28">BMI Calculator</h1>

      <div className="bg-white text-[#2D6A6A] p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <div>
          <label className="block font-semibold mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            className="w-full px-4 py-2 rounded-md bg-[#f3f3f3] outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="w-full px-4 py-2 rounded-md bg-[#f3f3f3] outline-none"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateBMI}
            className="bg-[#2D6A6A] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#3C8181] transition"
          >
            Calculate
          </button>
          <button
            onClick={reset}
            className="bg-[#A7D7C5] text-[#2D6A6A] font-semibold px-6 py-2 rounded-md hover:bg-[#8acbb6] transition"
          >
            Reset
          </button>
        </div>

        {bmi && (
  <>
    <div className="mt-6 bg-[#DCEAD9] text-[#2D6A6A] p-4 rounded-md text-center shadow">
      <h2 className="text-xl font-bold">Your BMI: {bmi}</h2>
      <p className="text-lg font-medium mt-2">{category}</p>
    </div>
      
    {/* BMI Chart Box */}
    <div className="mt-8 bg-white text-[#2D6A6A] rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-bold mb-3">BMI Categories</h3>
      <ul className="space-y-2 text-sm">
        <li className="flex justify-between border-b pb-1">
          <span className="text-red-500 font-medium">Underweight</span>
          <span className="text-red-500">&lt; 18.5</span>
        </li>
        <li className="flex justify-between border-b pb-1">
          <span className="text-green-500 font-medium">Normal</span>
          <span className="text-green-500">18.5 – 24.9</span>
        </li>
        <li className="flex justify-between border-b pb-1">
          <span className="text-yellow-500 font-medium">Overweight</span>
          <span className="text-yellow-500">25 – 29.9</span>
        </li>
        <li className="flex justify-between">
          <span className="text-orange-500 font-medium">Obese</span>
          <span className="text-orange-500">&ge; 30</span>
        </li>
      </ul>
    </div>
      
    {/* 🧘 Routine Suggestion */}
<div className="bg-[#A7D7C5] text-[#1B1B1B] p-5 rounded-xl shadow">
  <h3 className="font-bold text-lg mb-2">Recommended Yoga Routine:</h3>
  <p className="text-md leading-relaxed mb-4">{routineSuggestion}</p>
  
  <button
    onClick={() => navigate('/routine')}
    className="bg-[#2D6A6A] text-white px-6 py-2 rounded-full text-sm hover:bg-[#3C8181] transition"
  >
    Start Routine
  </button>
</div>


    
  </>
)}



      </div>
    </div>
  );
};

export default BMICalculator;
