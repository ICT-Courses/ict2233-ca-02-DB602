import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Web Developer | React Enthusiast | Problem Solver
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            View My Work
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;