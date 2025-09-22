import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VoxVoting",
      description:
        "A C# .NET Framework based voting system desktop application with MySQL database and custom dashboards.",
      githubLink: "https://github.com/DB602",
      demoLink: "https://drive.google.com/file/d/1HSX4qKzHghXPFoOM0oSWn9O6uGSZ5OU-/view?usp=drive_link",
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    {
      id: 2,
      title: "EduNova Institution Website",
      description:
        "Group project built using Flask, HTML, CSS, and JavaScript. I worked as the UI/UX designer and created wireframes using Figma.",
      githubLink: "https://github.com/yourusername/edunova",
      demoLink: "https://your-edunova-demo.com",
    },
    {
      id: 3,
      title: "Recipe App",
      description:
        "A recipe management web app built with React.js and Bootstrap. It helps users search, view, and organize recipes easily.",
      githubLink: "https://github.com/yourusername/recipe-app",
      demoLink: "https://your-recipe-demo.com",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Animated Gradient Project Name */}
              <div className="w-full h-48 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
                <h2 className="text-2xl font-bold text-white animate-pulse">
                  {project.title}
                </h2>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
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

      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
