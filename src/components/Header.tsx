
import { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            Simran Barve
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:lorem.ipsum@email.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Phone size={20} />
            </a>
            <a href="https://www.linkedin.com/in/simran-barve/" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4 mt-6">
              <a href="mailto:lorem.ipsum@email.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={20} />
              </a>
              <a href="https://www.linkedin.com/in/simran-barve/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
