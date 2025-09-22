import React from 'react';

const Contact = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 font-semibold mr-4">Email:</span>
                <span className="text-gray-600">your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 font-semibold mr-4">LinkedIn:</span>
                <span className="text-gray-600">linkedin.com/in/yourusername</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 font-semibold mr-4">GitHub:</span>
                <span className="text-gray-600">github.com/yourusername</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;