
import React, { useState } from "react";
import { Home, Calendar, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md font-sans sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 h-[90px] sm:h-[120px] flex items-center justify-between">
          {/* Left Section */}
          <div className="flex h-full items-center divide-x divide-gray-200">
            {/* Logo */}
            <div className="h-full flex items-center">
              <Link to="/">
                <img
                  src="aimllogo.jpg"
                  alt="Artificial Intelligence, Machine Learning and Robotics Conference Logo"
                  className="h-[70px] sm:h-[120px] w-auto object-contain transition-all duration-300"
                />
              </Link>
            </div>

            {/* Event Details (visible on sm and up) */}
            <div className="pl-4 sm:pl-6 flex-col space-y-1 sm:space-y-2 text-[11px] sm:text-sm text-gray-800 min-w-[180px] sm:min-w-[200px] flex">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Calendar className="text-indigo-900" size={16} />
                <span className="font-bold tracking-tight sm:text-sm">
                  July 28–30, 2026
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="text-indigo-900" size={16} />
                <span className="font-bold tracking-tight sm:text-sm leading-snug">
                  Crowne Plaza - St. Peter’s Rome, Italy
                </span>
              </div>
            </div>
          </div>

          {/* Right Section (desktop buttons) */}
          <div className="hidden md:flex items-center gap-4 ml-12">
            <Link to="/register">
              <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)" }} className="w-[120px] text-white font-bold py-2 hover:bg-[#425a92] transition-colors duration-300">
                REGISTER
              </button>
            </Link>

            <Link to="/AbstractSubmission">
              <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }} className="w-[232px] text-white font-bold py-2 hover:bg-[#011136] transition-colors duration-300">
                ABSTRACT SUBMISSION
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-3">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav (desktop only) */}
      <nav className="hidden md:flex w-full h-[50px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)",
        }}
      >
        <div className="container mx-auto px-4 hidden md:flex items-center justify-center gap-9 text-white font-semibold text-[16px]">
          <Link to="/">
            <a className="flex items-center hover:text-gray-300 text-sm">
              <Home size={20} />
            </a>
          </Link>
          <a href="/#about-section" className="tracking-wider hover:text-gray-300 text-sm">
            ABOUT
          </a>
          <a href="/#Speakers-section" className="tracking-wider hover:text-gray-300 text-sm">
            SPEAKERS
          </a>
          <a href="/#Sponsors-section" className="tracking-wider hover:text-gray-300 text-sm">
            SPONSORS
          </a>
          <a href="/#agenda-section" className="tracking-wider hover:text-gray-300 text-sm">
            AGENDA
          </a>
          <Link to="/agenda">
            <a className="tracking-wider hover:text-gray-300 text-sm">
              SESSIONS
            </a>
          </Link>
          <a href="/#event-overviewsection" className="tracking-wider hover:text-gray-300 text-sm">
            EVENT OVERVIEW
          </a>
          <a href="/#highlets-section" className="tracking-wider hover:text-gray-300 text-sm">
            MEDIA
          </a>
          {/* <a href="/#highlets-section" className="tracking-wider hover:text-gray-300 text-sm">
            MEDIA
          </a> */}
          <a href="/#contact-form" className="tracking-wider hover:text-gray-300 text-sm">
            CONTACT US
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-6">
          {/* Nav Links */}
          <div className="space-y-3">
            <a href="/#about-section" className="block text-gray-800 font-semibold">
              ABOUT
            </a>
            <a href="/#Speakers-section" className="block text-gray-800 font-semibold">
              SPEAKERS
            </a>
            <a href="/#Sponsors-section" className="block text-gray-800 font-semibold">
              SPONSORS
            </a>
            <a href="/#agenda-section" className="block text-gray-800 font-semibold">
              AGENDA
            </a>
            <a href="/#testimonial-section" className="block text-gray-800 font-semibold">
              TESTIMONIALS
            </a>
            <a href="/#event-overviewsection" className="block text-gray-800 font-semibold">
              EVENT OVERVIEW
            </a>
            <a href="/#highlets-section" className="block text-gray-800 font-semibold">
              MEDIA
            </a>
            <a href="/#contact-form" className="block text-gray-800 font-semibold">
              CONTACT US
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/register">
              <button className="w-full bg-[#0047bd] text-white font-bold py-2 rounded-md hover:bg-[#178E70] transition-colors duration-300">
                REGISTER
              </button>
            </Link>
            <Link to="/AbstractSubmission">
              <button className="w-full bg-[#000f30] text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
                ABSTRACT SUBMISSION
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
