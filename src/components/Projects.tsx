import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world applications I've built for businesses and education
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
      </div>
    </section>
  );
};

export default Projects;
