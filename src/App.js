import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename="/ict2233-ca-02-DB602">
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-lg dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400">
                Your Name
              </Link>
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300">
                  About
                </Link>
                <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300">
                  Projects
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300">
                  Contact
                </Link>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </nav>
        
        <main className="flex-grow bg-white dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-white py-6 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;