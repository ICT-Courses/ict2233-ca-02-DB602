import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of your first project. What technologies did you use? What problem did it solve?",
      image: "/api/placeholder/400/250",
      githubLink: "https://github.com/yourusername/project1",
      demoLink: "https://your-project-demo.com"
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of your second project. What technologies did you use? What problem did it solve?",
      image: "/api/placeholder/400/250",
      githubLink: "https://github.com/yourusername/project2",
      demoLink: "https://your-project-demo.com"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of your third project. What technologies did you use? What problem did it solve?",
      image: "/api/placeholder/400/250",
      githubLink: "https://github.com/yourusername/project3",
      demoLink: "https://your-project-demo.com"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;