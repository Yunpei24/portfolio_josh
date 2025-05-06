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
        "bg-white rounded-xl shadow-md overflow-hidden card-hover flex",
        "min-h-[400px] md:min-h-[500px]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "flex flex-col md:flex-row w-full",
        reverse && "md:flex-row-reverse"
      )}>
        {/* Image container with aspect ratio to preserve full image */}
        <div className="md:w-1/2 w-full">
          <div className="w-full aspect-video overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className={cn(
                "w-full h-full object-contain transition-transform duration-700",
                isHovered && "scale-105"
              )}
            />
          </div>
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
                    size={18} 
                    className="ml-2 transition-transform group-hover:translate-x-1" 
                  />
                </>
              ) : (
                <>
                  Learn More
                  <ArrowRight 
                    size={18} 
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