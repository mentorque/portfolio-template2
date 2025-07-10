
import { ArrowDown } from 'lucide-react';
import profileImage from '@/assets/simran-profile.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/simran.jpeg" 
                alt="Simran Barve" 
                className="w-48 h-48 rounded-full border-4 border-white/20 shadow-xl object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Simran Barve
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Project Manager
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Results-oriented project manager with experience at Vodafone Idea, specializing in large-scale telecom infrastructure deployment and certified in Google Project Management. Excels at driving complex projects from conception to completion, having successfully led a 350+ site rollout and spearheaded an initiative that cut service delivery time by 25%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </button>
            <a 
              href="mailto:barvesimraneu@gmail.com"
              className="border border-gray-400 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            📍 Dublin, Ireland
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
