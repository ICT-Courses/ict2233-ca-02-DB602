import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* I add Animated 404 Number */}
        <div className="relative mb-8">
          <div className="text-[200px] md:text-[300px] font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-none animate-pulse">
            404
          </div>
          
          {/* Floating element section */}
          <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-40 animate-bounce delay-300"></div>
          <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-pink-200 rounded-full opacity-50 animate-bounce delay-500"></div>
          <div className="absolute bottom-16 right-1/3 w-6 h-6 bg-indigo-200 rounded-full opacity-60 animate-bounce delay-700"></div>
        </div>

        {/* Main content section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow">
          
          {/* Error msg */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Oops! Page Not Found
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Looks like you've wandered off the beaten path!
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, even the best developers get lost sometimes. 
            Let's get you back on track!
          </p>

          {/* This is action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🏠 Back to Home
            </Link>
            
            <Link
              to="/projects"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              🚀 View My Projects
            </Link>
          </div>

          {/* It is fun error code section */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Developer's Note:
            </h3>
            <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-left max-w-md mx-auto">
              <div className="text-sm">
                <span className="text-red-400">if</span> (pageFound === <span className="text-yellow-300">false</span>) {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-blue-300">console.log</span>(<span className="text-green-300">"404 Error!"</span>);
                <br />
                &nbsp;&nbsp;<span className="text-purple-300">redirect</span>(<span className="text-green-300">"/home"</span>);
                <br />
                {'}'}
              </div>
            </div>
          </div>

          {/* Quick navigation part */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Navigation:
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                About
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Projects
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-red-500 mb-1">404</div>
            <div className="text-gray-600 text-sm">Error Code</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-blue-500 mb-1">∞</div>
            <div className="text-gray-600 text-sm">Possibilities</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-green-500 mb-1">1</div>
            <div className="text-gray-600 text-sm">Way Back</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-purple-500 mb-1">100%</div>
            <div className="text-gray-600 text-sm">Fixable</div>
          </div>
        </div>

        {/* Floating Elements for Ambiance */}
        <div className="fixed top-20 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-20 animate-ping"></div>
        <div className="fixed top-40 right-16 w-6 h-6 bg-purple-300 rounded-full opacity-30 animate-ping delay-1000"></div>
        <div className="fixed bottom-32 left-20 w-3 h-3 bg-pink-300 rounded-full opacity-25 animate-ping delay-2000"></div>
        <div className="fixed bottom-20 right-32 w-5 h-5 bg-indigo-300 rounded-full opacity-35 animate-ping delay-3000"></div>
      </div>
    </div>
  );
};

export default NotFound;