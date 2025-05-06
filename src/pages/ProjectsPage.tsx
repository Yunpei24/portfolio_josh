
import ProjectShowcase from '@/components/ProjectShowcase';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "University Analysis & Reporting (Power BI)",
      description: "Designed a Power BI dashboard for a university to effectively visualize and manage teacher and student tardiness and absences. The goal is to optimize schedules and improve academic tracking.",
      imageSrc: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Web Data Generator",
      description: "Developed an interactive web application (potentially using Python/Flask/Django for the backend) to generate realistic and customizable datasets. Ideal for testing analysis algorithms or learning multidimensional database design.",
      imageSrc: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Dashboard via MongoDB Atlas API (Streamlit & FastAPI)",
      description: "Created an API (FastAPI) to extract data from MongoDB Atlas and developed an interactive dashboard (Streamlit) to visualize this data. Allows for intuitive exploration and analysis of information.",
      imageSrc: "/placeholder.svg",
      link: "https://dashboardmongodatlasapp-josh24.streamlit.app/"
    },
    {
      id: 4,
      title: "Runner-up - P.A.S Challenge 2023 (2nd edition)",
      description: "Contributed to a reforestation tracking solution using Computer Vision (AI) for UNDP. Our application maps and assesses vegetation cover and carbon credits.",
      imageSrc: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Winning Team - P.A.S Challenge 2022 (1st edition)",
      description: "Developed an AI tool (in partnership with IAS, UNDP, AUF) to transcribe and translate medical notes (French, English, local languages) to generate digital prescriptions.",
      imageSrc: "/placeholder.svg",
    }
  ];

  return (
    <main className="pt-24 relative">
      {/* Background with subtle pattern and gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-joshua-secondary/5 to-joshua-primary/5" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/placeholder.svg')] bg-cover bg-center" />
      
      <div className="relative z-10">
        <AnimatedSection className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-joshua-dark">My Work and Projects</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Throughout my journey, I have had the opportunity to work on various projects to deepen my skills in IT, 
              data analysis, and artificial intelligence, both alone and in teams. Here are some significant examples.
            </p>
          </div>
        </AnimatedSection>
        
        <ProjectShowcase 
          title="Featured Projects"
          projects={projects}
        />
        
        <AnimatedSection className="py-16 bg-joshua-light/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-heading">DataCamp Portfolio</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              I've completed various data science and machine learning projects on DataCamp, 
              enhancing my skills through practical applications. Check out my DataCamp portfolio 
              to see these projects and my progress in data science.
            </p>
            <a 
              href="https://www.datacamp.com/portfolio/joshuanikiema24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-joshua-secondary text-white rounded-md hover:bg-joshua-secondary/90 transition-all shadow-md hover:shadow-lg"
            >
              View DataCamp Portfolio
            </a>
          </div>
        </AnimatedSection>
        
        <ContactForm />
      </div>
    </main>
  );
};

export default ProjectsPage;
