import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Project = ({ title, description, backgroundImage, githubLink }) => {
  return (
    <div
      tabIndex={0}
      className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white hover:shadow-2xl transition-transform hover:scale-105 duration-300"
    >
      {/* Image with Overlay */}
      <div
        role="img"
        aria-label={title}
        className="h-60 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="text-white p-4 w-full">
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="p-5">
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>

      {/* GitHub Link */}
      <div className="absolute top-4 right-4 flex gap-3 z-10">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors"
            aria-label="GitHub Repository"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      title: 'Predico-Disease-Prediction-Application',
      description:
        'This project is designed to predict diseases based on symptoms provided by the user. It utilizes a machine learning model trained on a dataset and is integrated with a Django backend. PostgreSQL is used as the database to store application data.',
      backgroundImage: '/bgimgpredico.jpg',
      githubLink: 'https://github.com/Monishgithub123/Predico-Disease-Prediction-Application-',
    },
    {
      title: 'HEALTH-ADVISORY-FOR-ADULT',
      description:
        'This application aims to provide valuable health information and guidance to adult users for maintaining their well-being.',
      backgroundImage: '/dietbghealthadvisory.png',
      githubLink: 'https://github.com/Monishgithub123/HEALTH-ADVISORY-FOR-ADULT',
    },
    {
      title: 'Crypto-Tracker',
      description:
        'A sleek, real-time cryptocurrency price tracker built with HTML, CSS, and JavaScript. Stay updated with the latest prices of your favorite cryptocurrencies.',
      backgroundImage: '/bgcrypto.jpg',
      githubLink: 'https://github.com/Monishgithub123/Crypto-Tracker',
    },
    {
      title: 'Employee-Review-System',
      description:
        'Built enterprise-grade performance review system using MongoDB, Express.js, React.js, and Node.js with JWT authentication.',
      backgroundImage: '/bgemployee.png',
      githubLink: 'https://github.com/Monishgithub123/employee-review-system',
    },
    {
      title: 'Portfolio Website',
      description:
        'A clean, responsive developer portfolio made with React, Tailwind, and scroll animations.',
      backgroundImage: '/bgimgportfolio.jpg',
      githubLink: 'https://github.com/Monishgithub123/personal-project',
    },
    {
      title: 'PING-PONG-GAME',
      description:
        'Ping Pong Game is a classic arcade game implemented using HTML, CSS, and JavaScript. It brings the nostalgia of the ping pong table to your browser. Control your paddles, hit the ball back and forth, and relive the excitement of this timeless game.',
      backgroundImage: '/bgimgpingpong.jpg',
      githubLink: 'https://github.com/Monishgithub123/PING-PONG-GAME',
    },
  ];

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
          Projects I've Built
        </h2>

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleProjects).map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={showMoreProjects}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
