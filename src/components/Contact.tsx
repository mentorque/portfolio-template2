
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a 
              href="mailto:barvesimraneu@gmail.com"
              className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500/50 group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300 text-xs">barvesimraneu@gmail.com</p>
            </a>

            <a 
              href="tel:+353874862206"
              className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500/50 group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">+353 87 486 2206</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/simran-barve/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500/50 group"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">LinkedIn</p>
            </a>

            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-700">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300 text-sm">Dublin, Ireland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
