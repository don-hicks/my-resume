import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Glyphtoids',
      description: 'Asteroids-inspired Rust project built with Bevy and the Hyxos Numerals.',
      image: 'glyphtoids.png',
      technologies: ['Rust', 'Bevy', 'Hyxos Numerals'],
      liveUrl: 'https://glyphtoids.hyxos.io',
      githubUrl: 'https://github.com/macbraughton/glyphtoids'
    },
    {
      title: 'Golden Triangle Graph',
      description: 'Generates graphs of stacked and divided golden triangles.',
      image: 'graph.png',
      technologies: ['TypeScript', 'Vite', 'HTML', 'CSS'],
      liveUrl: 'https://graph.hyxos.io',
      githubUrl: 'https://github.com/macbraughton/golden-triangle-graph'
    }
  ];

  const publications = [
    {
      title: 'Rational Addressing and Geometric Memory',
      description: 'Defensive publication establishing prior art for the rational-addressing and geometric-memory concepts behind the Hyxos numeral system.',
      url: 'https://github.com/hyxos/defensive-publications'
    },
    {
      title: 'Hyxos Numerals',
      description: 'The public layer of the numeral system: language specification and Rust crate.',
      url: 'https://github.com/hyxos/hyxos_numerals'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Public Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Code, a typeface, and a defensive publication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-yellow-400/20 text-blue-800 dark:text-yellow-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Learn More
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Publications</h3>
          <ul className="space-y-6">
            {publications.map((pub, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-100 dark:bg-yellow-400/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <FileText size={20} className="text-blue-600 dark:text-yellow-400" />
                </div>
                <div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200"
                  >
                    {pub.title}
                  </a>
                  <p className="text-gray-600 dark:text-gray-300">{pub.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
