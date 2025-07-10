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
      className="relative z-10 container mx-auto flex flex-col items-center justify-start px-4 pt-20 pb-10 text-center space-y-6"
    >

        <animated.img
          src={heroImg}
          alt="Raveena working"
          style={imageSpring}
          className="w-full md:w-[800px] h-[500px] mb-6 shadow-lg rounded-lg"
        />

        <animated.div style={logoSpring} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-purple-400">Raveena</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            A self-taught Full Stack Developer, rebuilding her tech dreams after a break.  
            I blend clean code with powerful AI tools to craft elegant, modern web experiences.
          </p>
        </animated.div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
            Full Stack Developer
          </span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            React & Node.js
          </span>
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
            AI-Savvy Coder
          </span>
          <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium">
            Former Frontend Engineer
          </span>
        </div>
      </div>
    </div>
  );
}
