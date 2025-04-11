import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    date: 'March 2025 - Present',
    title: 'Frontend Developer',
    company: 'Mamo Technolabs',
    location: 'Remote',
    companyUrl: 'https://mamotechnolabs.com',
    description: [
      'Developing Zodiya using Next.js for astrology predictions.',
      'Built Buzzingo - brain testing platform with real-time analytics.',
    ],
    technologies: ['React', 'Next.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    isCurrent: true,
  },
  {
    date: 'Nov 2024 - Feb 2025',
    title: 'Full Stack Developer',
    company: 'GreatHire',
    location: 'Remote',
    companyUrl: 'https://greathire.com',
    description: [
      'Developed enterprise job portal using React & Node.js.',
      'Led a team of 4 developers from scratch to launch.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
  },
  {
    date: 'May 2024 - Oct 2024',
    title: 'Full Stack Developer',
    company: 'Optimanage Software',
    location: 'Remote',
    companyUrl: 'https://optimanage.com',
    description: [
      'Built 3 large-scale MERN applications, including CRM & Healthcare.',
      'Optimized Redis caching reducing API response time by 40%.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
  },
  {
    date: 'Sep 2023 - Apr 2024',
    title: 'Full Stack Developer',
    company: 'Ans Academy',
    location: 'Nagpur',
    companyUrl: 'https://ansacademy.com',
    description: [
      'Developed ParikshaGruh platform serving 1000+ users.',
      'Integrated ML assessment, reducing grading time by 75%.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
  },
];

const TechBadge = ({ tech }) => (
  <span className="px-2 py-1 bg-blue-600 text-xs text-white font-medium rounded-full mr-2 mb-2 inline-block">
    {tech}
  </span>
);

const TimelineCard = ({ experience, side }) => {
  const isLeft = side === 'left';

  return (
    <div className={`md:w-1/2 w-full px-4 ${isLeft ? 'md:pr-8' : 'md:pl-8'} mb-12`}>
      <motion.div
        className="bg-gray-900 text-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-all duration-300"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-sm text-gray mb-2 flex justify-between items-center">
          <span>{experience.date}</span>
          {experience.isCurrent && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-full">Current</span>
          )}
        </div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-blue-500"
        >
          {experience.company} • {experience.location}
        </a>
        <ul className="mt-3 space-y-1 text-gray-300 list-disc list-inside">
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap">
          {experience.technologies.map((tech, i) => (
            <TechBadge key={i} tech={tech} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-gray-300 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Work Experience</h2>
        <div className="w-24 h-1 bg-gray-500 mx-auto mb-12" />

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400 hidden md:block z-0" />

          {/* Timeline cards */}
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center relative z-10">
              {i % 2 === 0 ? (
                <>
                  <TimelineCard experience={exp} side="left" />
                  <div className="hidden md:flex justify-center items-center w-0 md:w-12 relative z-10">
                    <div className={`w-5 h-5 rounded-full ${exp.isCurrent ? 'bg-green-500' : 'bg-blue-500'} border-4 border-white shadow-lg`} />
                  </div>
                  <div className="md:w-1/2" />
                </>
              ) : (
                <>
                  <div className="md:w-1/2" />
                  <div className="hidden md:flex justify-center items-center w-0 md:w-12 relative z-10">
                    <div className={`w-5 h-5 rounded-full ${exp.isCurrent ? 'bg-green-500' : 'bg-blue-500'} border-4 border-white shadow-lg`} />
                  </div>
                  <TimelineCard experience={exp} side="right" />
                </>
              )}

              {/* Mobile layout - vertical */}
              <div className="md:hidden w-full">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white mr-4" />
                  <span className="text-sm text-gray-600">{exp.date}</span>
                </div>
                <TimelineCard experience={exp} side="left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
