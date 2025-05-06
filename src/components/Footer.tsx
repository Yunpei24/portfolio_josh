
import { Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-joshua-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-6">Let's Stay Connected</h3>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/Yunpei24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-joshua-primary transition-colors transform hover:-translate-y-1 inline-block"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joshua-nikiema-17572b23b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-joshua-primary transition-colors transform hover:-translate-y-1 inline-block"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/joshua_juste/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-joshua-primary transition-colors transform hover:-translate-y-1 inline-block"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://t.me/JoshuaJuste" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-joshua-primary transition-colors transform hover:-translate-y-1 inline-block"
              aria-label="Telegram"
            >
              <MessageCircle size={24} />
            </a>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-2">Ready to collaborate or discuss a project?</p>
            <a 
              href="mailto:joshuanikiema24@gmail.com"
              className="flex items-center justify-center text-white hover:text-joshua-primary transition-colors"
            >
              <Mail size={18} className="mr-2" />
              joshuanikiema24@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-between w-full text-center md:text-left text-gray-400 text-sm pt-8 border-t border-gray-800">
            <p>© {currentYear} Joshua NIKIEMA - All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed by 2JYEN</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
