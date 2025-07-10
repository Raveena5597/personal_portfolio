import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const linkClasses =
  "block py-2 pr-4 pl-3 text-gray-900 hover:text-purple-400 hover:underline hover:scale-105 transition-colors duration-300 cursor-pointer";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-60}
      spy={true}
      onClick={onClick}
      className={`${linkClasses}`}
      activeClass="text-pink-600 font-bold"
    >
      {children}
    </Link>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`${
          scrolled ? "shadow-md" : ""
        } bg-white/60 backdrop-blur-md border-b border-gray-200 px-4 lg:px-6 py-1.2 fixed top-0 w-full z-50 transition-all duration-300`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 via-yellow-300 to-sky-400 bg-clip-text text-transparent tracking-tight font-elegant">
                  raveenawrites.com
                </span>
              </Link>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleOpen}
              type="button"
              className="text-gray-700 hover:text-purple-300 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-2 lg:flex-row lg:space-x-5 lg:mt-0 items-center">
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.to} onClick={toggleOpen}>
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
