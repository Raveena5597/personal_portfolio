import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../constants/projects.json";

export default function Projects() {
  const reversedProjects = [...projects].reverse(); // latest first

  return (
    <section
      id="projects"
      className="min-h-screen bg-lightDesert px-6 py-16 text-darkDesert"
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reversedProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-105 border border-purple-100 overflow-hidden flex flex-col"
          >
            {/* Thumbnail */}
            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="w-full h-40 object-cover"
              />
            )}

            {/* Project Content */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                {project.description}
              </p>

              {project.tech && (
                <p className="text-xs text-gray-500 mb-4">
                  <strong>Tech:</strong> {project.tech}
                </p>
              )}

              <div className="mt-auto flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-pink-500 transition"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.deployed && (
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-pink-500 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
