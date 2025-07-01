import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cofounder & Product Lead',
      company: 'Hyxos',
      location: 'Toronto, ON',
      period: '2013 - Present',
      description: 'Bootstrapped and developed custom tooling for a board games company',
      achievements: [
        'Built asset generation software using modern web stacks',
        'Balanced software development, product design and business goals',
        'Created unique branding foundation, developed marketing materials and media'
      ]
    },
    {
      title: 'Senior Developer',
      company: 'Playline.com',
      location: 'Toronto, ON',
      period: '2019 - 2020',
      description: 'Led full stack development for a sports prediction web platform with thousands of daily users.',
      achievements: [
        'Built and maintained React components and RESTful APIs',
        'Used Node.js and PostgreSQL for scalable backend solutions',
        'Mentored junior developers and maintained code quality standards'
      ]
    },
    {
      title: 'Mentor',
      company: 'Lighthouse Labs',
      location: 'Toronto, ON',
      period: '2017 - 2018',
      description: 'Taught full stack JavaScript, database design, and deployment strategies to cohorts of junior developers.',
      achievements: [
        'Provided one-on-one coaching and comprehensive project feedback',
        'Helped students prepare for technical interviews',
        'Supported learning through curriculum of real-world development workflows'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'The BrewBox Company',
      location: 'Toronto, ON',
      period: '2016 - 2017',
      description: 'Developed a custom subscription and e-commerce system using Ruby on Rails and Custom JavaScript.',
      achievements: [
        'Developed customized API for data collection and semgentations for targeted marketing campaigns',
        'Expanded administrative features of internal dashboards',
        'Provided technical documentation and comprehensive testing coverage'
      ]
    },
    {
      title: 'Advanced Emergency Medical Dispatcher',
      company: 'City of Toronto',
      location: 'Toronto, ON',
      period: '2006 - 2015',
      description: 'Delivered high-stakes, real-time communication and problem-solving under pressure.',
      achievements: [
        'Coordinated emergency response across multiple teams and departments',
        'Gained expertise in process-oriented systems and clear communication',
        'Developed strong skills in critical thinking and rapid decision-making'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey from emergency services to full stack development and entrepreneurship
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-blue-200 dark:bg-yellow-400/30"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-yellow-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <div className="flex items-center text-blue-600 dark:text-yellow-400">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{experience.title}</h3>
                    <p className="text-blue-600 dark:text-yellow-400 font-medium mb-3">{experience.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
                    
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
