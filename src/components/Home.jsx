import React,{ useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import heroImg from "/images/landing.png";

export default function Home() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 20000); // 15 seconds
  
    return () => clearTimeout(timer); // clean up on unmount
  }, []);
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 60, friction: 30 },
    delay: 100,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 overflow-hidden">
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={200}
          recycle={true}
          gravity={0.02}
          wind={0}
          colors={['#fbcfe8', '#c7d2fe', '#bbf7d0', '#fde68a', '#bae6fd']}
        />
)}


      {/* blobs Background */}
      <div className="animated-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
        <div className="blob blob5"></div>
        <div className="blob blob6"></div>
        <div className="blob blob7"></div>
      </div>
      {/* Main Content */}
      <div
        id="home"
        className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-10 text-center"
      >
        <animated.img
          src={heroImg}
          alt="Raveena working"
          style={imageSpring}
          className="w-full md:w-[800px] h-[470px] mb-6 shadow-lg rounded-lg"
        />

        <animated.div style={logoSpring} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-purple-400">Raveena</span>
          </h1>
          <blockquote className="italic text-gray-700 text-lg mt-6 max-w-2xl mx-auto border-l-4 border-pink-400 pl-6 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-md shadow-sm">
            “Once a curious little girl staring at glowing computer screens…  
            now a woman turning dreams into deploys — writing code that speaks, connects, and inspires.” ✨
          </blockquote>

        </animated.div>
      </div>
    </div>
  );
}
