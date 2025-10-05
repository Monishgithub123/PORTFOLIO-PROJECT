import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
 {
  date: 'May 2025 - Present',
  title: 'Frontend Developer',
  company: 'K-lite Education',
  location: 'New Delhi',
  description: [
    'Led the UI/UX design and frontend implementation for AutopilotMyBusiness — a comprehensive business automation platform.',
    'Built responsive and user-friendly interfaces using React.js, Mantine, and Vanilla CSS, enhancing user satisfaction with a seamless experience across devices.',
    'Collaborated closely with product and backend teams to integrate key features such as checklists, delegation workflows, MIS reports, and several other advanced modules.'
  ],
  technologies: ['MERN Stack', 'Tailwind CSS', 'Bootstrap', 'Mantine', 'Vanilla CSS', 'Git'],
  isCurrent: true,
},

  {
    date: 'Nov 2024 - April 2025',
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

const TimelineCard = ({ experience }) => (
  <motion.div
    className="bg-gray-900 text-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-all duration-300 w-full"
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-sm text-gray-400 mb-2 flex justify-between items-center">
      <span>{experience.date}</span>
      {experience.isCurrent && (
        <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
          Current
        </span>
      )}
    </div>
    <h3 className="text-xl font-bold">{experience.title}</h3>
    <a
      href={experience.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-500"
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
);

const Timeline = () => {
  return (
    <section id="experience" className="bg-gradient-to-br from-gray-100 to-gray-300 py-24">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="relative z-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Work Experience</h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-12" />
        </div>

        {/* Vertical timeline line for desktop */}
        <div className="hidden md:block absolute top-32 left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-[calc(100%-8rem)] z-0" />

        {/* Timeline entries */}
        <div className="hidden md:block space-y-16 relative z-10">
          {experiences.map((exp, i) => (
            <div key={i} className="flex items-center">
              {i % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8">
                    <TimelineCard experience={exp} />
                  </div>
                  <div className="flex justify-center items-center w-12 relative z-10">
                    <div
                      className={`w-5 h-5 rounded-full ${
                        exp.isCurrent ? 'bg-green-500' : 'bg-blue-500'
                      } border-4 border-white shadow-lg`}
                    />
                  </div>
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div className="flex justify-center items-center w-12 relative z-10">
                    <div
                      className={`w-5 h-5 rounded-full ${
                        exp.isCurrent ? 'bg-green-500' : 'bg-blue-500'
                      } border-4 border-white shadow-lg`}
                    />
                  </div>
                  <div className="w-1/2 pl-8">
                    <TimelineCard experience={exp} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline (only mobile) */}
        <div className="block md:hidden space-y-12 relative z-10">
          {experiences.map((exp, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div
                className={`w-4 h-4 rounded-full mt-2 ${
                  exp.isCurrent ? 'bg-green-500' : 'bg-blue-500'
                } border-4 border-white`}
              />
              <TimelineCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
