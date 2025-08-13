import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  PERSONAL_WEBSITE_URL,
  CURRENT_YEAR,
} from "../constants/index";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToProjects = () => {
    if (location.pathname === "/projects") {
      // Already on projects page — scroll to top just in case
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/projects");
    }
  };

  return (
    <footer className="bg-purple-100 text-gray-700 text-sm py-4 px-6 flex flex-col sm:flex-row justify-between items-center shadow-inner">
      {/* Left side: Copyright + Privacy */}
      <div className="mb-3 sm:mb-0 flex items-center gap-4">
        <span>
          © {CURRENT_YEAR}{" "}
          <a
            href={PERSONAL_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-pink-600 transition-colors duration-300"
          >
            raveenawrites.com
          </a>
        </span>
        <Link
          to="/privacy-policy"
          className="hover:text-pink-600 transition-colors duration-300"
        >
          Privacy Policy
        </Link>
      </div>

      {/* Right side: Icons + Button */}
      <div className="flex items-center space-x-6">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition duration-300"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition duration-300"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition duration-300"
        >
          <FaFileAlt className="w-5 h-5" />
        </a>

        {/* View Projects Button */}
        <button
          onClick={goToProjects}
          className="ml-4 inline-block bg-pink-600 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-pink-700 transition-all duration-300"
        >
          View My Projects
        </button>
      </div>
    </footer>
  );
}
