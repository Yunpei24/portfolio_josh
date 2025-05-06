
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const calculateTransform = (multiplier: number) => {
    const moveX = (mousePosition.x - window.innerWidth / 2) / window.innerWidth * multiplier;
    const moveY = (mousePosition.y - window.innerHeight / 2) / window.innerHeight * multiplier;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 bg-joshua-light/30 overflow-hidden relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-joshua-primary/10 to-joshua-secondary/10" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/placeholder.svg')] bg-cover bg-center" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap-reverse md:flex-nowrap items-center">
          <AnimatedSection 
            className="w-full md:w-1/2 pt-8 md:pt-0" 
            delay={300}
          >
            <h1 className="mb-4">
              I am <span className="highlight">Joshua Juste</span> NIKIEMA
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
              Junior Data Scientist, Data Analytics & AI Engineer. <br />
              Graduate Telecom Design Engineer (Master's equivalent) from <span className="highlight">ESMT</span>, 
              specializing in Data Engineering and Artificial Intelligence.
              Currently pursuing a Master's degree (African Master in Machine Intelligence) 
              specialized in AI called AMMI at <span className="highlight">AIMS-Senegal</span>.<br />
              Discover my achievements and background.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1NkUlY9PuLCCuVewtOgmYpv2KaIePB5uH?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-joshua-primary text-white rounded-md hover:bg-joshua-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Download size={18} className="mr-2" />
              Download my Resume
            </a>
          </AnimatedSection>
          
          <AnimatedSection 
            className="w-full md:w-1/2 flex justify-center md:justify-end" 
            delay={600}
            direction="none"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0"
                style={{
                  transform: calculateTransform(15),
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <img
                  src="/placeholder.svg"
                  alt="Background Shape"
                  className="w-full opacity-50"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                style={{
                  transform: calculateTransform(5),
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img
                  src="/placeholder.svg"
                  alt="Portrait of Joshua NIKIEMA"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
