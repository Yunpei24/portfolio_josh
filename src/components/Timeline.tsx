
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string[];
  link?: {
    url: string;
    text: string;
  };
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

const Timeline = ({ title, items }: TimelineProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-10">
          <h2 className="section-heading">{title}</h2>
        </AnimatedSection>
        
        <div className="relative border-l-2 border-joshua-secondary ml-6 md:ml-0 md:mx-auto md:max-w-3xl">
          {items.map((item, index) => (
            <AnimatedSection
              key={item.id}
              className="relative mb-8 ml-8"
              delay={index * 150}
            >
              <div 
                className="absolute w-4 h-4 bg-joshua-primary rounded-full -left-10 top-5 shadow-md"
                style={{ left: '-34px' }}
              />
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-joshua-dark">{item.title}</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">{item.period}</span>
                </div>
                <p className="text-joshua-secondary font-medium mb-3">{item.organization}</p>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedId === item.id ? "max-h-96" : "max-h-20"
                )}>
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  
                  {item.link && (
                    <a 
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-joshua-secondary hover:text-joshua-primary mt-3 transition-colors"
                    >
                      {item.link.text}
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
                
                {item.description.length > 1 && (
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="text-sm text-joshua-secondary hover:text-joshua-primary mt-2 focus:outline-none"
                  >
                    {expandedId === item.id ? "Show less" : "Show more"}
                  </button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
