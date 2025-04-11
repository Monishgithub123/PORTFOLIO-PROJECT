import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-teal-500 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transform transition-transform duration-300"
              aria-label="Toggle Menu"
            >
              <svg
                className={`h-8 w-8 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <img
            src="/1145.jpg"
            alt="Logo"
            className="h-12 w-12 lg:h-14 lg:w-14 rounded-full border-2 border-white shadow-sm ml-auto lg:ml-0"
          />
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-4 text-lg w-full lg:w-auto`}
        >
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((section) => (
            <a
              key={section.toLowerCase()}
              href={`#${section.toLowerCase()}`}
              className="block py-2 px-3 lg:px-4 text-lg lg:text-xl font-semibold hover:text-gray-300 hover:underline transition-colors duration-300 transform hover:scale-105"
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
