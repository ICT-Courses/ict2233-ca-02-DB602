import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Background</h2>
            <p className="text-gray-600 mb-6">
              Add your background information here. Talk about your journey, what got you into web development, and what drives you.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
            <p className="text-gray-600">
              Add your educational background here.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soft Skills</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Problem Solving</li>
              <li>• Team Collaboration</li>
              <li>• Communication</li>
              <li>• Time Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;