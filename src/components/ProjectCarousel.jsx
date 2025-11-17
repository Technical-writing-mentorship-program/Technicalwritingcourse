import React, { useState } from 'react';

const projects = [
  {
    title: 'PLAID API DOCUMENTATION',
    description: 'A Postman documentation consisting of the first 30 endpoints of Plaid API',
    tags: ['API', 'Technical Writing', 'OpenAPI spec', 'Postman', 'Swagger', 'API testing'],
    previewUrl: '#',
  },
  {
    title: 'E-COMMERCE PLATFORM',
    description: 'A full-stack e-commerce solution with a React frontend and Node.js backend.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    previewUrl: '#',
  },
  {
    title: 'PROJECT MANAGEMENT TOOL',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    tags: ['Vue.js', 'Firebase', 'Real-time', 'UI/UX Design'],
    previewUrl: '#',
  }
];

const ProjectCarousel = ({ userProjects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? userProjects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === userProjects.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = userProjects[currentIndex];

  return (
    <div className="relative w-full">
      <div className="bg-white p-6 sm:p-8 rounded-xl w-full text-black text-left">
        <h3 className="text-xl sm:text-2xl font-mono font-bold text-black tracking-wider">
          {currentProject.title}
        </h3>
        <p className="mt-3 text-black-100 text-sm sm:text-base leading-relaxed">
          {currentProject.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {currentProject.tags.map((tag) => (
            <span key={tag} className="bg-[#8a4dff] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={currentProject.link} className="mt-6 inline-flex items-center gap-2 text-white hover:text-violet-200 font-semibold transition-colors duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          <span className="group-hover:underline">Preview</span>
        </a>
      </div>

      <button
        onClick={handlePrev}
        aria-label="Previous project"
        className="absolute top-1/2 -left-3 sm:-left-5 transform -translate-y-1/2 bg-[#6b2eff] text-white p-2 rounded-full hover:bg-white/30 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-600 focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <button
        onClick={handleNext}
        aria-label="Next project"
        className="absolute top-1/2 -right-3 sm:-right-5 transform -translate-y-1/2 bg-[#6b2eff] text-white p-2 rounded-full hover:bg-white/30 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-600 focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  );
};

export default ProjectCarousel;
