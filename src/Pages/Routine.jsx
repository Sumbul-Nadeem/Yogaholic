import React from "react";

const routineData = [
  {
    day: "Day 1",
    title: "Energize & Stretch",
    time: "15 min",
    poses: ["Mountain Pose", "Cat-Cow", "Child’s Pose"],
  },
  {
    day: "Day 2",
    title: "Core Strength Flow",
    time: "20 min",
    poses: ["Plank", "Boat Pose", "Bridge Pose"],
  },
  {
    day: "Day 3",
    title: "Flexibility & Calm",
    time: "18 min",
    poses: ["Forward Fold", "Seated Twist", "Cobra Pose"],
  },
  {
    day: "Day 4",
    title: "Balance & Breathe",
    time: "15 min",
    poses: ["Tree Pose", "Eagle Arms", "Corpse Pose"],
  },
  {
    day: "Day 5",
    title: "Hip Opener Series",
    time: "20 min",
    poses: ["Butterfly Pose", "Low Lunge", "Pigeon Pose"],
  },
  {
    day: "Day 6",
    title: "Strength & Stillness",
    time: "25 min",
    poses: ["Warrior I", "Chair Pose", "Downward Dog"],
  },
  {
    day: "Day 7",
    title: "Relax & Reflect",
    time: "10 min",
    poses: ["Legs Up the Wall", "Happy Baby", "Corpse Pose"],
  },
];

const Routine = () => {
  return (
    <div className="min-h-screen bg-[#2D6A6A] text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 mt-20">7-Day Yoga Routine</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {routineData.map((item, index) => (
          <div
            key={index}
            className="bg-white text-[#2D6A6A] rounded-xl shadow-md p-6 space-y-4 hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold text-center -mb-0.5">{item.day}</h2>
            <p className="text-lg font-medium text-center">🧘 {item.title}</p>
            <p className="text-lg">⏱ {item.time}</p>
            <ul className="list-disc list-inside text-md space-y-1">
              {item.poses.map((pose, idx) => (
                <li key={idx}>{pose}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;
