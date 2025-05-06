
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection = ({ 
  children, 
  className,
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            section.classList.add('animate-fade-in-up');
            section.style.opacity = '1';
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);

  // Set initial styles based on direction
  let initialStyles = 'opacity-0 transform';
  switch(direction) {
    case 'up':
      initialStyles += ' translate-y-8';
      break;
    case 'down':
      initialStyles += ' -translate-y-8';
      break;
    case 'left':
      initialStyles += ' translate-x-8';
      break;
    case 'right':
      initialStyles += ' -translate-x-8';
      break;
    case 'none':
      initialStyles = 'opacity-0';
      break;
  }

  return (
    <div 
      ref={sectionRef} 
      className={cn(initialStyles, className)}
      style={{ 
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
