import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import heroImg from "/images/landing.png";
import projects from "../constants/projects.json";
import blogPosts from "../constants/blogPosts";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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

  // Blog data
  const featuredPost = blogPosts.find((post) => post.featured);
  const latestNonFeatured = blogPosts.filter((post) => !post.featured).slice(0, 2);

  // Latest 3 projects
  const latestProjects = [...projects].reverse().slice(0, 3);

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
          colors={["#fbcfe8", "#c7d2fe", "#bbf7d0", "#fde68a", "#bae6fd"]}
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

      {/* Hero Section */}
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

        <animated.div style={logoSpring}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-purple-400">Raveena</span>
          </h1>
          <blockquote className="italic text-gray-700 text-lg mt-6 max-w-2xl mx-auto border-l-4 border-pink-400 pl-6 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-md shadow-sm">
            “Once a curious little girl staring at glowing computer screens…  
            now a woman turning dreams into deploys — writing code that speaks, connects, and inspires.” ✨
          </blockquote>

          {/* Hero buttons */}
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#blogs"
              className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-purple-500 transition"
            >
              Go to Blogs
            </a>
            <a
              href="#projects"
              className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-pink-500 transition"
            >
              Go to Projects
            </a>
          </div>
        </animated.div>
      </div>

      {/* Blogs Section */}
      <section id="blogs" className="relative z-10 container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h2>

        {/* Featured */}
        {featuredPost && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-pink-400">
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">
              {featuredPost.title}
            </h3>
            <p className="text-gray-700 mb-4">{featuredPost.excerpt}</p>
            <a
              href={featuredPost.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline flex items-center font-medium"
            >
              Read more <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        )}

        {/* Latest 2 non-featured */}
        <div className="grid md:grid-cols-2 gap-6">
          {latestNonFeatured.map((post, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline flex items-center font-medium"
              >
                Read more <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Blogs */}
        <div className="mt-6 text-right">
          <a
            href="/blog"
            className="text-pink-500 hover:underline font-medium"
          >
            View All Blogs →
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              {proj.thumbnail && (
                <img
                  src={proj.thumbnail}
                  alt={`${proj.title} thumbnail`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4">{proj.description}</p>
              <div className="mt-auto flex gap-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-pink-500"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {proj.deployed && (
                  <a
                    href={proj.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-pink-500"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-6 text-right">
          <a
            href="/projects"
            className="text-pink-500 hover:underline font-medium"
          >
            View All Projects →
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          I’m Raveena, a passionate frontend developer who loves building modern, 
          user-friendly web apps. Here you’ll find my technical blog, projects, 
          and resources to help you on your coding journey. 
          My mission is to make tech simple, beautiful, and accessible for everyone.
        </p>
      </section>
    </div>
  );
}
