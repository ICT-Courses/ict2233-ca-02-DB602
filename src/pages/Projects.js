import React from "react";
import wireframe1 from "../assets/wireframe1.png";
import wireframe2 from "../assets/wireframe2.png";
import voxvotingImage from "../assets/voxvoting-preview.webp";
import edunovaImage from "../assets/Blue Modern Academy new Logo.png";
import recipeAppImage from "../assets/istockphoto-1316145932-612x612.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VoxVoting",
      description:
        "A C# .NET Framework based voting system desktop application with MySQL database and custom dashboards.",
      image: voxvotingImage,
      githubLink:
        "https://github.com/ICT-Courses/application-development-ca1-DB602",
      demoLink:
        "https://drive.google.com/file/d/1HSX4qKzHghXPFoOM0oSWn9O6uGSZ5OU-/view?usp=drive_link",
      technologies: ["C#", ".NET Framework", "MySQL", "Windows Forms"],
    },
    {
      id: 2,
      title: "EduNova Institution Website",
      description:
        "Group project built using Flask, HTML, CSS, and JavaScript. I worked as the UI/UX designer and created wireframes using Figma.",
      image: edunovaImage,
      githubLink:
        "https://github.com/SD187/EduNova-Student-Registration-System",
      demoLink:
        "https://drive.google.com/file/d/1zX0wiXJheNVqdzi82dMys6wW1FSkfIiE/view?usp=sharing",
      technologies: ["Flask", "HTML", "CSS", "JavaScript", "Figma"],
    },
    {
      id: 3,
      title: "Recipe App",
      description:
        "A recipe management web app built with React.js and Bootstrap. It helps users search, view, and organize recipes easily.",
      image: recipeAppImage,
      githubLink: "https://github.com/DB602",
      demoLink:
        "https://drive.google.com/file/d/1a5OxqVTRl7IqkU3CS-ki7r3LEmgBIjlq/view?usp=drive_link",
      technologies: ["React.js", "Bootstrap", "JavaScript", "API Integration"],
    },
    {
      id: 4,
      title: "VoxVoting Figma Wireframes - User Flow 1",
      description:
        "Complete UI/UX wireframes for the VoxVoting project, showcasing user registration flow, dashboard design, and navigation structure created in Figma.",
      image: wireframe1,
      githubLink: "https://github.com/DB602",
      demoLink:
        "https://www.figma.com/proto/CXbGz5fQYJAjkcTaOsfwGd/Untitled?node-id=0-1&t=APL5xeYAZt3s5I5M-1",
      isDesignProject: true,
    },
    {
      id: 5,
      title: "EduNova Figma Wireframes - User Flow 2",
      description:
        "Detailed wireframe prototypes showing the complete user journey, responsive design layouts, and interactive components for the student registration system.",
      image: wireframe2,
      githubLink: "https://github.com/DB602",
      demoLink:
        "https://www.figma.com/proto/i5aA0kWGGWVOQcxTroDqAj/Untitled?node-id=0-1&t=sb31jZChl4OV9Ol4-1",
      isDesignProject: true,
    },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image with fallback */}
              <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    <h2 className="text-xl font-bold text-white text-center px-4">
                      {project.title}
                    </h2>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech badges */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Design project tags */}
                {project.isDesignProject && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                      Figma
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs">
                      UI/UX Design
                    </span>
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded-full text-xs">
                      Wireframing
                    </span>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors"
                  >
                    {project.isDesignProject ? "Portfolio" : "GitHub"}
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    {project.isDesignProject ? "View Design" : "Demo"}
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
