
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
}

interface ProjectShowcaseProps {
  title: string;
  description?: string;
  projects: Project[];
}

const ProjectShowcase = ({ title, description, projects }: ProjectShowcaseProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-heading">{title}</h2>
          {description && (
            <p className="text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </AnimatedSection>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              delay={index * 150}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
                reverse={index % 2 !== 0}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
