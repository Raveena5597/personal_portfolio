import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const blogPosts = [
  {
    title: "Mastering useEffect: The Secret Sauce of React Hooks",
    excerpt:
      "Confused about useEffect? Let’s simplify it once and for all with practical examples and analogies.",
    link: "https://blog.raveenawrites.com/mastering-useeffect-the-secret-sauce",
  },
  {
    title: "5 AI Tools That Supercharged My Coding Workflow",
    excerpt:
      "From debugging to documentation, here are the tools I use to save time and code smarter.",
    link: "https://blog.raveenawrites.com/5-ai-tools-that-supercharged-coding",
  },
  {
    title: "Breaking Into Full Stack Development After a Break",
    excerpt:
      "Here’s how I made a comeback into tech — and everything I learned on the way.",
    link: "https://blog.raveenawrites.com/breaking-into-fullstack-dev",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-purple-500 mb-6">Raveena Writes ✍️</h2>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
        I turn my code into words. Through my blog, I share stories, tutorials,
        and tools that help developers level up. Here are a few reads people loved.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-all duration-300 border border-purple-100"
          >
            <h3 className="text-xl font-semibold text-darkDesert mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-purple-500 flex items-center text-sm font-medium"
            >
              Read More <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://blog.raveenawrites.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-purple-500 transition-all duration-300"
        >
          Visit Full Blog →
        </a>
      </div>
    </section>
  );
}
