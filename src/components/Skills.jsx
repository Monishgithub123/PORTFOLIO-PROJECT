import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3Alt, name: 'CSS3' },
    { Icon: FaJs, name: 'JavaScript' },
    { Icon: FaReact, name: 'ReactJS' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: FaBootstrap, name: 'Bootstrap' },
    { Icon: FaNodeJs, name: 'NodeJS' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiExpress, name: 'Express JS' },
    { Icon: FaServer, name: 'RESTful APIs' }, // Updated icon
    { Icon: FaGitAlt, name: 'Version Control (Git)' },
  ];

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.05 },
  };

  const iconStyle = {
    fontSize: '4rem',
    color: '#007bff',
    filter: 'drop-shadow(0 4px 6px rgba(50, 50, 93, 0.25)), drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08))',
  };

  return (
    <div className="bg-gradient-to-l from-gray-100 via-gray-200 to-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8 lg:mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial="initial"
              animate="animate"
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out cursor-pointer mb-6"
              style={{
                boxShadow: '0 10px 15px -3px rgba(66, 153, 225, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-400 to-teal-600 rounded-lg opacity-0 transition-opacity duration-300 ease-in-out" />
              <div className="p-6 flex items-center justify-center">
                <skill.Icon className="text-teal-500" style={iconStyle} />
              </div>
              <p className="text-blue-900 text-2xl mb-3 font-bold text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
