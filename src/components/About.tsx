
const About = () => {
  const skills = [
    'Project Management and Delivery', 'Stakeholder Communication', 'Cross-Functional Coordination', 
    'Process Optimization', 'Excel (Pivot tables, VLOOKUP)', 'Field Operations',
    'Documentation Control', 'Research & Development', 'Vendor Management', 
    'Telecom Infrastructure Deployment', 'Data Management', 'Audit Compliance'
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Results-oriented project manager with experience at Vodafone Idea, specializing in large-scale telecom infrastructure deployment and certified in Google Project Management. Excels at driving complex projects from conception to completion, having successfully led a 350+ site rollout and spearheaded an initiative that cut service delivery time by 25%.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              A strategic leader adept at managing cross-functional teams, stakeholder communications, and technology evaluation to deliver measurable business improvements and operational excellence.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in 0.5s ease-out forwards'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
