import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile-photo.jpg';

const Home = () => {
  return (
    <div className="dark:bg-gray-900">
      {/* This is Hero section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 py-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Text content section */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Dasunika
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                  Bandara
                </h2>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Passionate UI/UX Designer & Frontend Developer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl">
                Undergraduate Student at University of Sri Jayewardenepura | UI/UX Enthusiast | Frontend Developer | Creative Problem Solver
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Navigate to projects page */}
                <Link
                  to="/projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-center"
                >
                  View My Work
                </Link>

                {/* Navigate to Contact page */}
                <Link
                  to="/contact"
                  className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* This is photo Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                
                {/* Main photo container */}
                <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-300 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Dasunika Bandara - UI/UX Designer & Frontend Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold hidden"
                    style={{ display: 'none' }}
                  >
                    DB
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Skills Highlights */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2nd</div>
              <div className="text-gray-600 dark:text-gray-300">Year Student</div>
            </div>
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Created</div>
            </div>
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">A+</div>
              <div className="text-gray-600 dark:text-gray-300">Academic Grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Elements */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 z-50 hidden lg:block">
        <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-blue-400 cursor-pointer transition-all hover:scale-110 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-700 dark:hover:bg-purple-400 cursor-pointer transition-all hover:scale-110 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;