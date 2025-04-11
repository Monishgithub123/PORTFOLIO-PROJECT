import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white dark:from-gray-800 dark:to-black">
      {/* Top Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://www.facebook.com/profile.php?id=100009268340775"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition transform hover:scale-110"
          >
            <i className="fab fa-facebook text-4xl text-blue-500 hover:text-blue-700"></i>
          </a>
          <a
            href="https://www.instagram.com/monish._y/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition transform hover:scale-110"
          >
            <i className="fab fa-instagram text-4xl text-pink-500 hover:text-pink-700"></i>
          </a>
          <a
            href="https://github.com/Monishgithub123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition transform hover:scale-110"
          >
            <i className="fab fa-github text-4xl text-gray-400 hover:text-gray-600"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/monishyedlewar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition transform hover:scale-110"
          >
            <i className="fab fa-linkedin text-4xl text-blue-400 hover:text-blue-600"></i>
          </a>
          <a
            href="https://wa.me/9399138837"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition transform hover:scale-110"
          >
            <i className="fab fa-whatsapp text-4xl text-green-500 hover:text-green-700"></i>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            <li>
              <a
                href="#hero"
                className="text-lg md:text-xl font-semibold opacity-80 hover:opacity-100 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg md:text-xl font-semibold opacity-80 hover:opacity-100 hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-lg md:text-xl font-semibold opacity-80 hover:opacity-100 hover:underline"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg md:text-xl font-semibold opacity-80 hover:opacity-100 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg md:text-xl font-semibold opacity-80 hover:opacity-100 hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Designer Credit */}
        <div className="text-center text-sm md:text-base">
          <p className="mb-2">
            Have questions? Contact me at{' '}
            <a
              href="mailto:yedlewarmonish@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-400 hover:text-blue-600"
            >
              yedlewarmonish@gmail.com
            </a>
          </p>
          <p>
            Designed by{' '}
            <span className="font-bold tracking-wide uppercase">
              Monish Yedlewar
            </span>
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="mt-6 text-center">
          <a
            href="#hero"
            className="text-blue-400 hover:text-blue-600 underline text-sm md:text-base"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black py-4 text-center text-gray-500 text-xs md:text-sm">
        © {new Date().getFullYear()} Monish Yedlewar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
