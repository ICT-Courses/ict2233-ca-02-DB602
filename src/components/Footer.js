import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Dasunika Bandara. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/DB602"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dasunika-bandara-82259b312/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dasunikabandara34@gmail.com"
            className="hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
