
import React from 'react';
import { Code, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Versatile full stack developer with over a decade of experience building, maintaining, and scaling web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I specialize in both frontend and backend development with a strong foundation in JavaScript, React, Node.js, and PostgreSQL. 
              My passion lies in solving real-world problems with practical solutions and delivering reliable, human-centered software products.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              With experience ranging from high-stakes emergency dispatch to teaching the next generation of developers, 
              I bring a unique perspective to software development that values clear communication, mentorship, and thoughtful design.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-100 dark:bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Code size={24} className="text-blue-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Clean Architecture</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building maintainable and scalable solutions</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-green-100 dark:bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-green-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Mentorship</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Teaching and guiding junior developers</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-purple-100 dark:bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Lightbulb size={24} className="text-purple-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Problem Solving</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Practical solutions for real-world challenges</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 dark:from-yellow-400 dark:to-yellow-500 rounded-2xl p-8 text-white dark:text-black">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  10+ years of development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  Former mentor at Lighthouse Labs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  Based in Toronto, Ontario
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  Co-founder & Product Lead at Hyxos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
