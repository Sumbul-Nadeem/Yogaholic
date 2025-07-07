import { useParams } from 'react-router-dom';
import React from 'react';

const moodFlows = {
  tired: {
    title: "Recharge Flow",
     description:
      "A slow and restorative session to soothe your tired body and gently stretch fatigued muscles. Ideal after a long day.",
    time: "10 min",
    poses: ["Child’s Pose", "Cat-Cow", "Mountain Pose"],
  },
  stressed: {
    title: "De-Stress Flow",
        description:
      "This flow releases built-up tension and stress, calming the nervous system and helping you breathe with ease.",
    time: "15 min",
    poses: ["Forward Fold", "Seated Twist", "Legs Up the Wall"],
  },
  sad: {
    title: "Heart-Opener Flow",
    description:
      "This gentle heart-opening flow helps release emotional tension and uplift your mood through expansive chest stretches.",
    time: "12 min",
    poses: ["Cobra Pose", "Camel Pose", "Corpse Pose"],
  },
  energetic: {
    title: "Power Flow",
    time: "20 min",
    description:
      "An energizing sequence that boosts strength and stamina. Perfect for when you're full of energy and want to channel it mindfully.",
    poses: ["Plank", "Warrior II", "Chair Pose"],
  },
  calm: {
  title: "Peaceful Flow",
   description:
      "This calming sequence promotes relaxation and mindfulness, helping you stay grounded and centered.",
  time: "15 min",
  poses: ["Easy Pose", "Child's Pose", "Legs-Up-the-Wall Pose"],
},
};

const MoodPoses = () => {
  const { mood } = useParams();
  const flow = moodFlows[mood];

  if (!flow) {
    return <div className="text-white text-center py-20">Invalid mood selected.</div>;
  }

  return (
    <div className="min-h-screen bg-[#2D6A6A] text-white px-6 py-44">
      <h1 className="text-4xl font-bold text-center mb-4 text-[#A7D7C5]">{flow.title}</h1>
      <h3 className="text-xl font-semibold mb-6 text-center">{flow.description}</h3>
      <p className="text-center text-lg mb-6">⏱ {flow.time}</p>

      <div className="bg-white text-[#2D6A6A] max-w-md mx-auto p-6 rounded-xl shadow">
        <h2 className="text-xl text-center font-bold mb-3">Recommended Poses</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          {flow.poses.map((pose, idx) => (
            <li key={idx}>{pose}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodPoses;
