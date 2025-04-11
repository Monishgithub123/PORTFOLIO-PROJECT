import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="about"
      className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center"
        >
          <img
            src={`${process.env.PUBLIC_URL}/profile-pic (8).jpg`}
            alt="Monish Yedlewar"
            className="w-80 8-40 rounded-full object-cover shadow-lg transition-transform duration-500 transform hover:scale-110"
            loading="lazy"
          />
        </motion.div>

        {/* Right Side - About Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full lg:w-2/3 lg:pl-12"
        >
          <div className="max-w-lg">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-5xl font-bold text-navy-blue mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg text-gray-800 mb-4 leading-relaxed"
            >
              As a passionate full-stack developer with over 1.5 years of immersive  experience, I excel at creating sleek, user-friendly interfaces using the latest web technologies. My expertise lies in the powerful MERN stack, enabling me to develop dynamic, high-performing web applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg text-gray-800 mb-4 leading-relaxed"
            >
              I am driven by a love for innovation and a commitment to excellence. My journey in web development is fueled by continuous learning and a desire to push the boundaries of what's possible, delivering seamless user experiences and tackling complex challenges with creative solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-lg text-gray-800 leading-relaxed"
            >
              Browse my portfolio to see my work, and feel free to reach out if you'd like to collaborate or just say hello!
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="bg-navy-blue text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
