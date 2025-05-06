
import Hero from '@/components/Hero';
import ProjectShowcase from '@/components/ProjectShowcase';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  // Featured projects for the homepage
  const featuredProjects = [
    {
      id: 1,
      title: "Runner-up - P.A.S Challenge 2023 (2nd edition)",
      description: "Contributed to a reforestation tracking solution using Computer Vision (AI) for UNDP. Our application maps and assesses vegetation cover and carbon credits.",
      imageSrc: "/images/fdTeam2.jpg",
    },
    {
      id: 2,
      title: "Winning Team - P.A.S Challenge 2022 (1st edition)",
      description: "Developed an AI tool (in partnership with IAS, UNDP, AUF) to transcribe and translate medical notes (French, English, local languages) to generate digital prescriptions.",
      imageSrc: "/images/fdTeam.jpg",
    }
  ];

  return (
    <main className="pt-16">
      <Hero />
      
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-joshua-light/30 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-joshua-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-joshua-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Science</h3>
              <p className="text-gray-600">Analyzing complex datasets to extract valuable insights and patterns using statistical methods and machine learning algorithms.</p>
            </div>
            
            <div className="bg-joshua-light/30 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-joshua-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-joshua-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Engineering</h3>
              <p className="text-gray-600">Building and deploying machine learning and deep learning models that solve real-world problems with artificial intelligence.</p>
            </div>
            
            <div className="bg-joshua-light/30 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-joshua-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-joshua-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-600">Translating data into clear visualizations and actionable insights to drive business decisions and strategy.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <ProjectShowcase 
        title="Some Notable Achievements"
        projects={featuredProjects}
      />
      
      <ContactForm />
    </main>
  );
};

export default Index;
