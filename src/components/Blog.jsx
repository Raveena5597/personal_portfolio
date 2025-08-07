import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const blogPosts = [
  {
    title: "Getting hands wet with JavaScript",
    excerpt:
      "Introduction to JavaScript, the language of the web. Learn its history, features, and why it’s essential for modern web development.",
    link: "https://blog.raveenawrites.com/introduction-to-javascript",
  },
  {
    title: "All about variables and data types in JavaScript",
    excerpt:
      "Understanding variables and data types is crucial for mastering JavaScript. This post covers the basics, including how to declare variables, the different data types available, and best practices for using them effectively.",
    link: "https://blog.raveenawrites.com/variables-and-datatypes-in-javascript",
  },
  {
    title: "JavaScript Quirks",
    excerpt:
      "Important quirks in JavaScript that every developer should know. This post covers common pitfalls, unexpected behaviors, and how to avoid them in your code.",
    link: "https://blog.raveenawrites.com/javascript-quirks",
  },
  {
    title: "Functions in JavaScript",
    excerpt:
      "Functions are a fundamental part of JavaScript, allowing you to encapsulate code for reuse. This post explains how functions work, different types of functions, and best practices for using them effectively.",
    link: "https://blog.raveenawrites.com/all-about-functions-in-js",
  },
  {
    title: "Callback functions and their features",
    excerpt:
      "Callback functions are a fundamental concept in JavaScript, allowing you to execute code asynchronously. This post explains what callback functions are, how they work, and their key features.",
    link: "https://blog.raveenawrites.com/callback-functions-and-their-features",
  },
  {
    title: "Breaking Into Full Stack Development After a Break",
    excerpt:
      "Here’s how I made a comeback into tech — and everything I learned on the way.",
    link: "https://hercomebackstory.hashnode.dev/breaking-into-full-stack-development-after-a-break-my-comeback-story",
    featured: true, // mark this as featured
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
            className={`relative bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-all duration-300 border ${
              post.featured
                ? "border-pink-500 scale-[1.02]"
                : "border-purple-100"
            }`}
          >
            {post.featured && (
              <div className="absolute top-3 right-3 bg-purple-500 text-white text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider">
                Must Read
              </div>
            )}
            <h3
              className={`text-xl font-semibold mb-2 ${
                post.featured ? "text-pink-600" : "text-darkDesert"
              }`}
            >
              {post.title}
            </h3>
            <p
              className={`text-sm mb-4 ${
                post.featured ? "text-gray-700" : "text-gray-600"
              }`}
            >
              {post.excerpt}
            </p>
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
          href="https://hashnode.com/@RaveenaPutta"
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
