import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ use from react-router-dom
import { FaBars, FaTimes } from "react-icons/fa";

const linkClasses = "block py-2 px-4 text-gray-900 hover:text-purple-400 hover:underline transition duration-200";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "Blog", to: "/blog" },
  { name: "Education", to: "/education" },
  { name: "Contact", to: "/contact" },
];

const NavLink = ({ to, onClick, children, isActive }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className={`${linkClasses} ${isActive ? "text-pink-600 font-bold" : ""}`}
    >
      {children}
    </Link>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation(); // ✅ to detect current route

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`${
          scrolled ? "shadow-md" : ""
        } bg-white/60 backdrop-blur-md border-b border-gray-200 px-4 lg:px-6 py-2 fixed top-0 w-full z-50`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
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
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto`}>
            <ul className="flex flex-col mt-2 lg:flex-row lg:space-x-1 lg:mt-0 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={toggleOpen}
                  isActive={pathname === item.to}
                >
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
