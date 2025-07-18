import React from "react";
import schools from "../constants/schools.json";
import { useSpring, animated, useTrail } from "react-spring";

const School = ({ school, style }) => (
  <animated.div
    style={style}
    className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-6 max-w-2xl w-full mx-auto"
  >
    <h3 className="text-xl font-semibold text-purple-700 mb-1">{school.degree}</h3>
    <p className="text-md text-gray-800">{school.university}</p>
    <p className="text-sm text-gray-500">{school.timePeriod}</p>
  </animated.div>
);

export default function Education() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const trails = useTrail(schools.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { mass: 5, tension: 1200, friction: 80 },
    delay: 300,
  });

  return (
    <animated.section
      id="education"
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-white via-pink-50 to-blue-50 flex flex-col items-center justify-start"
      style={fadeIn}
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-10">Education</h2>

      {schools.map((school, index) => (
        <School key={school.id} school={school} style={trails[index]} />
      ))}
    </animated.section>
  );
}
