
const Projects = () => {
  const projects = [
    {
      name: "Connected Buildings",
      description: "Led the successful implementation of the Connected Building Project in Mumbai, targeting 10 high-revenue commercial buildings and reducing internet service delivery time by 25%, making Mumbai the first circle to meet rollout targets.",
      technologies: ["Project Management", "Data Analysis", "Service Delivery Optimization", "Reporting", "Quality Management"]
    },
    {
      name: "Transcelestial Centauri Phase Testing",
      description: "Led end-to-end testing of Centauri Transcelestial's laser-based wireless internet device, resulting in successful validation and purchase decision by Vodafone Idea Limited.",
      technologies: ["Customer Resolution", "Product Testing", "Wireless Communication", "Risk Management"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-8 hover:bg-gray-850 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500/50"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.name}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
