
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  className?: string;
  reverse?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  link, 
  className,
  reverse = false
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden card-hover",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "flex flex-col md:flex-row", 
        reverse && "md:flex-row-reverse"
      )}>
        <div className="md:w-1/2 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className={cn(
              "w-full h-64 object-cover transition-transform duration-700", 
              isHovered && "scale-105"
            )}
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-3 text-joshua-dark">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-auto text-joshua-secondary hover:text-joshua-primary transition-colors group"
            >
              {link.includes('http') ? (
                <>
                  View Project
                  <ExternalLink 
                    size={16} 
                    className="ml-2 transition-transform group-hover:translate-x-1" 
                  />
                </>
              ) : (
                <>
                  Learn More
                  <ArrowRight 
                    size={16} 
                    className="ml-2 transition-transform group-hover:translate-x-1" 
                  />
                </>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
