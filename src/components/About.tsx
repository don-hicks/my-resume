import React from 'react';
import { Database, Bot, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I build the source of truth and derive everything else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I've spent twenty years in systems where being wrong is expensive: a decade dispatching
              emergency responses for the City of Toronto, then a decade building software. Today I design
              and deliver solutions for enterprise clients: architecture, integration, and AI-assisted
              development in C#, Go, and the Microsoft Power Platform.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              The through-line is the same in every domain: establish a single source of truth, derive
              everything else from it, and know exactly where the representation stops being reliable.
              I build in Rust, Lua, and TypeScript on my own time, hold a defensive publication in rational
              addressing and geometric memory, and have run an independent product company since 2013.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-100 dark:bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Database size={24} className="text-blue-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Source of Truth</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">One authoritative model, every view derived from it</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-green-100 dark:bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Bot size={24} className="text-green-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">AI-Assisted Delivery</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Architecture that keeps agent-assisted codebases coherent</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-purple-100 dark:bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck size={24} className="text-purple-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Judgment Under Pressure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">A decade of emergency dispatch at Toronto scale</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 dark:from-yellow-400 dark:to-yellow-500 rounded-2xl p-8 text-white dark:text-black">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  20 years in high-stakes systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  Solutions Developer at SoloSquid Inc.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  Co-founder &amp; Product Lead at Hyxos Inc. since 2013
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white dark:bg-black rounded-full mr-3"></span>
                  Based in Toronto, Ontario
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
