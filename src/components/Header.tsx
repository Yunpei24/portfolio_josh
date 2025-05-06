
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/Logo-sf.png" 
            alt="Joshua NIKIEMA Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={cn("nav-link", location.pathname === "/" && "active")}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/background" 
                className={cn("nav-link", location.pathname === "/background" && "active")}
              >
                BACKGROUND
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={cn("nav-link", location.pathname === "/projects" && "active")}
              >
                MY PROJECTS
              </Link>
            </li>
            <li>
              <a 
                href="https://www.datacamp.com/portfolio/joshuanikiema24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                DATACAMP PORTFOLIO
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="nav-link"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-joshua-dark p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-[60px] left-0 right-0 bg-white shadow-lg transition-transform duration-300 transform md:hidden",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto py-4">
          <ul className="flex flex-col space-y-4">
            <li className="px-4 py-2 hover:bg-joshua-light/50 rounded">
              <Link 
                to="/" 
                className={cn("block w-full", location.pathname === "/" && "text-joshua-primary font-medium")}
              >
                HOME
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-joshua-light/50 rounded">
              <Link 
                to="/background" 
                className={cn("block w-full", location.pathname === "/background" && "text-joshua-primary font-medium")}
              >
                BACKGROUND
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-joshua-light/50 rounded">
              <Link 
                to="/projects" 
                className={cn("block w-full", location.pathname === "/projects" && "text-joshua-primary font-medium")}
              >
                MY PROJECTS
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-joshua-light/50 rounded">
              <a 
                href="https://www.datacamp.com/portfolio/joshuanikiema24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                DATACAMP PORTFOLIO
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-joshua-light/50 rounded">
              <a 
                href="#contact" 
                className="block w-full"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
