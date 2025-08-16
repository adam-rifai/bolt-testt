import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Alex Morgan</h3>
            <p className="text-gray-400">Creative Designer & Frontend Developer</p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right Section - Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} fill="currentColor" /> by Alex Morgan
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;