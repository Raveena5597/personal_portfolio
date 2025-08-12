// Home.jsx
import React,{ useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import heroImg from "/images/landing.png";

export default function Home() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const imageSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 60, friction: 30 },
    delay: 100,
  });

  // Example static content
  const posts = [
    { title: "Getting Started with React", excerpt: "Learn the basics of React, JSX, and components with this beginner-friendly guide.", link: "/blog/react-basics" },
    { title: "My First Web App", excerpt: "How I built my first full-stack application using React and Node.js.", link: "/blog/first-web-app" },
    { title: "Styling with Tailwind CSS", excerpt: "A quick guide to creating responsive and beautiful designs with Tailwind.", link: "/blog/tailwind-guide" },
  ];

  const projects = [
    { name: "Portfolio Website", description: "A personal portfolio showcasing my skills and projects.", link: "/projects/portfolio" },
    { name: "Weather App", description: "A weather forecasting app with live updates and geolocation support.", link: "/projects/weather-app" },
    { name: "Task Manager", description: "A Kanban-style task manager with drag-and-drop functionality.", link: "/projects/task-manager" },
  ];

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

      {/* Hero */}
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

      {/* Featured Blogs */}
      <section className="relative z-10 container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-pink-500 hover:underline">Read more →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-700 mb-4">{proj.description}</p>
              <a href={proj.link} className="text-blue-500 hover:underline">View project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* About / Mission */}
      <section className="relative z-10 container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          I’m Raveena, a passionate frontend developer with a love for building beautiful and functional web applications. 
          This site is where I share my projects, write technical blogs, and document my coding journey. 
          I believe in writing code that not only works but tells a story.
        </p>
      </section>
    </div>
  );
}
