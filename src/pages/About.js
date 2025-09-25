import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating beautiful, functional digital experiences through code and design
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Background */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
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
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">University of Sri Jayewardenepura</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">BSc Information Technology - Second Year</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">2024 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Currently pursuing my Bachelor's degree in Information Technology with a focus on software development, 
                    system design, and emerging technologies. Actively involved in programming courses, design thinking workshops, and collaborative projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Academic Highlights</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Strong performance in programming and design courses</li>
                    <li>• Active participant in university tech events</li>
                    <li>• Member of coding and design communities</li>
                    <li>• Focus on practical application of theoretical concepts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Technical Skills
              </h2>

              <div className="space-y-6">
                {/* Programming Languages */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-700 dark:to-yellow-600 text-yellow-800 dark:text-yellow-100 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-700 dark:to-purple-600 text-purple-800 dark:text-purple-100 px-4 py-2 rounded-full text-sm font-medium">C#</span>
                    <span className="bg-gradient-to-r from-blue-100 to-green-200 dark:from-blue-700 dark:to-green-600 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium">Python</span>
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Frontend Development</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-700 dark:to-blue-600 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium">React</span>
                    <span className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-700 dark:to-orange-600 text-orange-800 dark:text-orange-100 px-4 py-2 rounded-full text-sm font-medium">HTML5</span>
                    <span className="bg-gradient-to-r from-blue-100 to-cyan-200 dark:from-blue-700 dark:to-cyan-600 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium">CSS3</span>
                    <span className="bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-700 dark:to-cyan-600 text-cyan-800 dark:text-cyan-100 px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
                  </div>
                </div>

                {/* UI/UX */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">UI/UX Design</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-700 dark:to-purple-600 text-purple-800 dark:text-purple-100 px-4 py-2 rounded-full text-sm font-medium">Figma</span>
                    <span className="bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-700 dark:to-pink-600 text-pink-800 dark:text-pink-100 px-4 py-2 rounded-full text-sm font-medium">Adobe XD</span>
                    <span className="bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-700 dark:to-indigo-600 text-indigo-800 dark:text-indigo-100 px-4 py-2 rounded-full text-sm font-medium">Prototyping</span>
                    <span className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-700 dark:to-green-600 text-green-800 dark:text-green-100 px-4 py-2 rounded-full text-sm font-medium">Wireframing</span>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">Tools & Others</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full text-sm font-medium">Git</span>
                    <span className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-700 dark:to-green-600 text-green-800 dark:text-green-100 px-4 py-2 rounded-full text-sm font-medium">VS Code</span>
                    <span className="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-700 dark:to-red-600 text-red-800 dark:text-red-100 px-4 py-2 rounded-full text-sm font-medium">Visual Studio</span>
                    <span className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-700 dark:to-blue-600 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium">Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                Soft Skills
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-700 dark:to-blue-600 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Creative Problem Solving</span>
                </div>
                <div className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-700 dark:to-purple-600 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Team Collaboration</span>
                </div>
                <div className="flex items-center p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-700 dark:to-green-600 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Effective Communication</span>
                </div>
                <div className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-700 dark:to-pink-600 rounded-lg">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Time Management</span>
                </div>
                <div className="flex items-center p-3 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-700 dark:to-indigo-600 rounded-lg">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Critical Thinking</span>
                </div>
                <div className="flex items-center p-3 bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-700 dark:to-cyan-600 rounded-lg">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Adaptability</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals & Aspirations */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">My Goals & Aspirations</h2>
          <p className="text-lg mb-6 max-w-4xl mx-auto opacity-90">
            I'm constantly learning and growing, with the goal of becoming a skilled full-stack developer 
            who can bridge the gap between beautiful design and robust functionality. My dream is to work 
            on projects that make a positive impact on people's lives through technology.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-2">Short Term</h3>
              <p className="text-sm opacity-90">Master React ecosystem and build impressive projects</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-2">Medium Term</h3>
              <p className="text-sm opacity-90">Complete my degree and gain internship experience</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-2">Long Term</h3>
              <p className="text-sm opacity-90">Become a full-stack developer at a tech company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
