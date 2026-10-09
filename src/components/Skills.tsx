import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'Rust', 'Go', 'TypeScript / JavaScript', 'Lua', 'SQL']
    },
    {
      title: 'Enterprise Delivery',
      skills: [
        'Microsoft Power Platform (PowerApps, PowerAutomate, SharePoint)',
        'REST APIs',
        'PostgreSQL',
        'System integration and migration'
      ]
    },
    {
      title: 'AI-Assisted Development',
      skills: [
        'Agent-driven workflows in production',
        'Architecture for AI-maintainable codebases',
        'Claude Code / agent orchestration'
      ]
    },
    {
      title: 'Systems',
      skills: [
        'Exact / algebraic computation',
        'Font engineering (TrueType, GSUB)',
        'Site generation',
        'Self-hosted and federated infrastructure',
        'Linux, OpenWRT, reverse proxies, CA/TLS'
      ]
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Grouped by where I use them
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-100 dark:bg-yellow-400/20 text-blue-800 dark:text-yellow-400 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
