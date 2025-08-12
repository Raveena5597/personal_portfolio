import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import heroImg from "/images/landing.png";
import projects from "../constants/projects.json";
import blogPosts from "../constants/blogPosts"; 

export default function Home() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  // Animations
  const logoSpring = useSpring({ from: { opacity: 0, transform: "scale(0.5)" }, to: { opacity: 1, transform: "scale(1)" } });
  const imageSpring = useSpring({ from: { opacity: 0, transform: "translateY(-20px)" }, to: { opacity: 1, transform: "translateY(0px)" }, config: { tension: 60, friction: 30 }, delay: 100 });

  // Featured + Latest Blogs
  const featuredBlog = blogPosts.find((post) => post.featured);
  const latestBlogs = blogPosts.filter((post) => !post.featured).slice(0, 2);

  // Latest Projects (2)
  const latestProjects = [...projects].reverse().slice(0, 2);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 overflow-hidden">
      {showConfetti && (
        <ReactConfetti width={width} height={height} numberOfPieces={200} recycle={true} gravity={0.02} wind={0} colors={['#fbcfe8', '#c7d2fe', '#bbf7d0', '#fde68a', '#bae6fd']} />
      )}

      {/* Blobs Background */}
      <div className="animated-bg">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="blob"></div>
        ))}
      </div>

      {/* Main Section */}
      <div id="home" className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-10 text-center">
        <animated.img src={heroImg} alt="Raveena working" style={imageSpring} className="w-full md:w-[800px] h-[470px] mb-6 shadow-lg rounded-lg" />

        <animated.div style={logoSpring} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-purple-400">Raveena</span>
          </h1>
          <blockquote className="italic text-gray-700 text-lg mt-6 max-w-2xl mx-auto border-l-4 border-pink-400 pl-6 leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-md shadow-sm">
            “Once a curious little girl staring at glowing computer screens… now a woman turning dreams into deploys — writing code that speaks, connects, and inspires.” ✨
          </blockquote>

          <div className="mt-6 flex gap-4 justify-center">
            <button onClick={() => scrollToSection("projects")} className="px-5 py-3 bg-purple-500 text-white rounded-full font-medium hover:bg-pink-500 transition-all duration-300">
              View Projects
            </button>
            <button onClick={() => scrollToSection("blog")} className="px-5 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-purple-500 transition-all duration-300">
              View Blog
            </button>
          </div>
        </animated.div>
      </div>

      {/* Featured Blog */}
      {featuredBlog && (
        <section className="relative z-10 py-16 bg-white/60 backdrop-blur-md">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-500 mb-6">Featured Blog</h2>
            <div className="bg-white rounded-lg shadow-md p-6 border border-pink-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-pink-600">{featuredBlog.title}</h3>
              <p className="text-gray-700 mt-2">{featuredBlog.excerpt}</p>
              <a href={featuredBlog.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-purple-500 transition">Read More</a>
            </div>
          </div>
        </section>
      )}

      {/* Latest Blogs */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-purple-500 mb-8 text-center">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {latestBlogs.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-600">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-pink-500 transition">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="relative z-10 py-16 bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-purple-500 mb-8 text-center">Latest Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {latestProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition border border-purple-100">
                {project.thumbnail && <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />}
                <h3 className="text-xl font-semibold text-purple-600">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-pink-500 font-medium">
                      GitHub
                    </a>
                  )}
                  {project.deployed && (
                    <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-pink-500 font-medium">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
