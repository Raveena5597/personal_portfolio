import React from "react";
import heroImg from "/images/photo.jpeg"; // or your own photo

export default function About() {
  return (
    <section className="bg-white px-6 py-20 text-gray-800 text-center md:text-left">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Image Left Side */}
        <div className="flex-1">
        <img
        src={heroImg}
        alt="Raveena"
        className="w-170 h-170 object-cover rounded-full md:mt-[-40px] md:ml-[-40px] shadow-md"
      />

        </div>

        {/* Text Right Side */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-purple-500 mb-4 font-elegant">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-4">
              Hey there 👋 I'm <span className="text-pink-500 font-semibold">Raveena</span> — a Full Stack Developer who likes her code clean, her UI sleek, and her coffee strong ☕️💻.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              I build web experiences that not only function flawlessly but also flirt with elegance. Whether it's React charming the frontend or Node handling backend logic like a pro — I’m the one pulling the strings.
            </p>

            <p className="text-lg leading-relaxed">
              I’m passionate about JavaScript, obsessed with intuitive design, and always exploring how AI can add that extra sparkle ✨. Outside of code, you’ll find me writing tech blogs, experimenting in the kitchen, or silently judging poorly aligned buttons 😏.
          </p>


          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">React</span>
            <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
            <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">Tech Blogger</span>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">AI Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
}
