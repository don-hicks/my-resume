
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-yellow-400">Don Hicks</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A seasoned Full Stack Developer with over a decade of experience building scalable web applications and mentoring development teams
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/don-hicks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-700 dark:text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/don-hicks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-blue-600 dark:text-yellow-400" />
            </a>
            <a 
              href="mailto:don.hicks.dev@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-green-600 dark:text-yellow-400" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black rounded-full hover:bg-blue-700 dark:hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
            <ArrowDown size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
