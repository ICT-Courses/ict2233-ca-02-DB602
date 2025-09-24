import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating beautiful, functional digital experiences through code and design
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Journey */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm Dasunika Bandara, a passionate second-year undergraduate student at the University of Sri Jayewardenepura. 
                  My journey into the world of technology began with a curiosity about how beautiful websites come to life.
                </p>
                <p>
                  What started as a fascination with web design quickly evolved into a deep love for UI/UX design and frontend development. 
                  I'm driven by the challenge of solving complex problems through creative coding solutions and designing intuitive user experiences.
                </p>
                <p>
                  Every day, I'm learning something new and pushing myself to create better, more accessible, and more beautiful digital experiences. 
                  I believe that great design combined with solid development skills can truly make a difference in people's lives.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
                Education
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">University of Sri Jayewardenepura</h3>
                  <p className="text-blue-600 font-medium dark:text-blue-400">BSc Information Technology - Second Year</p>
                  <p className="mt-2">2024 - Present</p>
                  <p className="mt-2">
                    Currently pursuing my Bachelor's degree in Information Technology with a focus on software development, 
                    system design, and emerging technologies. Actively involved in programming courses, design thinking workshops, and collaborative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Technical Skills
              </h2>
              {/* Keep your skills as before */}
            </div>

            {/* Soft Skills */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                Soft Skills
              </h2>
              {/* Keep your soft skills as before */}
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-700 dark:to-gray-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">My Goals & Aspirations</h2>
          <p className="text-lg mb-6 max-w-4xl mx-auto opacity-90">
            I'm constantly learning and growing, with the goal of becoming a skilled full-stack developer 
            who can bridge the gap between beautiful design and robust functionality. My dream is to work 
            on projects that make a positive impact on people's lives through technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
