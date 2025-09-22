import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-4">🎉 Success!</h1>
        <h2 className="text-2xl mb-6">ICT 2233 Portfolio</h2>
        <p className="text-lg mb-6">
          React + Tailwind CSS is working perfectly!
        </p>
        <div className="space-y-2 text-sm bg-black/20 p-4 rounded-lg">
          <p>✅ React App: Running</p>
          <p>✅ Tailwind CSS: Configured</p>
          <p>✅ Dev Branch: Ready</p>
          <p>✅ GitHub Repo: Connected</p>
        </div>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
          Start Building Portfolio
        </button>
      </div>
    </div>
  );
}

export default App;