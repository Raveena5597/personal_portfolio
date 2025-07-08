import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFileAlt,
  FaBlog,
} from "react-icons/fa";
import { SiPerplexity } from "react-icons/si";
import landingImg from "/logo.svg";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  RESUME_URL,
  BLOG_URL,
  PERPLEXITY_URL,
} from "../constants";

export default function Home() {
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

  return (
    <div
      id="home"
      className="container mx-auto bg-lightDesert flex flex-col items-center justify-center min-h-screen px-4"
    >
      <animated.div style={logoSpring} className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-darkDesert mb-4">
          Hi, I'm <span className="text-pink-600">Raveena Putta</span>
        </h1>
        <p className="text-lg md:text-xl text-darkDesert">
          Frontend Developer & Tech Blogger ✨
        </p>
      </animated.div>
  
      <animated.div
        style={iconSpring}
        className="flex mt-8 space-x-6 justify-center"
      >
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkDesert hover:text-pink-600 transition-colors duration-300"
        >
          <FaGithub className="w-8 h-8" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkDesert hover:text-pink-600 transition-colors duration-300"
        >
          <FaLinkedin className="w-8 h-8" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkDesert hover:text-pink-600 transition-colors duration-300"
        >
          <FaFileAlt className="w-8 h-8" />
          <span className="sr-only">Resume</span>
        </a>
      </animated.div>
    </div>
  );
  
}
