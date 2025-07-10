
const Education = () => {
  const education = [
    {
      institution: "Dublin City University",
      degree: "MSc. in Electronics and Computer Engineering",
      dates: "2023 – 2024",
      coursework: [
        "Advanced Digital Communications",
        "Computer Networks",
        "Signal Processing",
        "Embedded Systems"
      ]
    },
    {
      institution: "University of Mumbai",
      degree: "BE. in Electronic and Telecommunication Engineering",
      dates: "2018 – 2022",  
      coursework: [
        "Digital Signal Processing",
        "Wireless Communication",
        "Network Theory",
        "Microprocessors",
        "Communication Systems"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-gray-700 hover:border-blue-500/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right mt-4 lg:mt-0">
                  <p className="text-gray-300 font-medium">
                    {edu.dates}
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.coursework.map((course, courseIndex) => (
                    <div 
                      key={courseIndex}
                      className="bg-gray-700 text-gray-200 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
