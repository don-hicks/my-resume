
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/don-hicks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-yellow-400/20 transition-colors duration-200"
            >
              <Github size={20} className="dark:text-yellow-400" />
            </a>
            <a 
              href="https://linkedin.com/in/don-hicks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 dark:bg-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-yellow-400/20 transition-colors duration-200"
            >
              <Linkedin size={20} className="dark:text-yellow-400" />
            </a>
            <a 
              href="mailto:don.hicks.dev@gmail.com"
              className="p-3 bg-gray-800 dark:bg-gray-800 rounded-full hover:bg-gray-700 dark:hover:bg-yellow-400/20 transition-colors duration-200"
            >
              <Mail size={20} className="dark:text-yellow-400" />
            </a>
          </div>
          
          <p className="text-gray-400 dark:text-gray-300 mb-4">
            © {currentYear} Don Hicks. All rights reserved.
          </p>
          
          <div className="flex items-center justify-center text-gray-400 dark:text-gray-300">
            <span>Made with</span>
            <Heart size={16} className="mx-2 text-red-500 dark:text-yellow-400" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
