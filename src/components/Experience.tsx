
const Experience = () => {
  const experiences = [
    {
      title: "Associate Project Manager",
      company: "Vodafone Idea",
      location: "Mumbai, India",
      dates: "Jun 2022 – Jun 2023",
      responsibilities: [
        "Spearheaded the deployment of telecom infrastructure across 350+ commercial sites, achieving a 98% on-time project completion rate.",
        "Managed 30-40 monthly service rollouts by coordinating cross-functional teams, maintaining 100% adherence to SLAs.",
        "Reduced service delivery delays by 30% through proactive on-site troubleshooting and coordinating logistics for field teams across 50+ locations.",
        "Automated project tracking for 30+ stakeholders using Excel dashboards, reducing manual reporting time by 10 hours per week",
        "Reduced internet service delivery time by 25% for 10 high-revenue commercial buildings, making the region first to meet all rollout targets."
      ]
    },
    {
      title: "Graduate Engineer",
      company: "Vodafone Idea",
      location: "Mumbai, India",
      dates: "Feb 2022 – May 2022",
      responsibilities: [
        "Directed the end-to-end project lifecycle for a centralized multiplexer database, managing system integration and stakeholder communication to cut network data query time by 60% and improve team efficiency by 20%.",
        "Authored and managed over 500 technical documents for service deployments, ensuring 100% audit compliance and traceability.",
        "Engineered a standardized onboarding process by creating a new workflow playbook, boosting new hire effectiveness.",
        "Contributed to a data center integration case study that influenced a €5M network expansion strategy and ensured 100% system compatibility."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-700"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              
              <div className="ml-16 bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-gray-300 font-medium">
                      {exp.dates}
                    </p>
                    <p className="text-gray-400">
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-blue-400 mr-3 mt-2 text-xs">▶</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
