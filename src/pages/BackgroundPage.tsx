
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

const BackgroundPage = () => {
  const educationItems = [
    {
      id: 1,
      title: "Master in Machine Intelligence: AI",
      organization: "African Institute of Mathematics and Science (AIMS), MBour",
      period: "2024 - 2025",
      description: ["Specialized in Machine Learning and Deep Learning techniques."]
    },
    {
      id: 2,
      title: "Telecom Design Engineer Cycle (Master's equivalent)",
      organization: "École Supérieure Multinationale des Télécommunications (ESMT), Dakar",
      period: "2021 - 2024",
      description: ["Specialization in Big Data & AI", "Bachelor's Degree in Engineering Sciences (2022)"]
    },
    {
      id: 3,
      title: "Preparatory Classes (CPGE)",
      organization: "École Polytechnique de Ouagadougou (EPO)",
      period: "2019 - 2021",
      description: [
        "CPGE - Specialty Mathematics Physics (MP) (2020 - 2021)",
        "CPGE - Specialty Mathematics, Physics, and Engineering Sciences (MPSI) (2019 - 2020)"
      ]
    },
    {
      id: 4,
      title: "Baccalaureate Series C (Mathematics & Physical Sciences)",
      organization: "Complexe Scolaire Horizon International, Ouagadougou",
      period: "2018 - 2019",
      description: ["Graduated with honors in Mathematics and Physical Sciences"]
    }
  ];
  
  const certificationItems = [
    {
      id: 1,
      title: "Python for Beginners",
      organization: "Simplilearn",
      period: "2022",
      description: ["Comprehensive introduction to Python programming fundamentals"]
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence",
      organization: "Simplilearn",
      period: "2022",
      description: ["Foundation in AI concepts and applications"]
    }
  ];
  
  const awardItems = [
    {
      id: 1,
      title: "PTN Hackathon Participation",
      organization: "Digital Technology Park of Senegal",
      period: "2021",
      description: ["Received ESMT & PTN Certificate for participation and innovative ideas"],
      link: {
        url: "https://drive.google.com/file/d/1d8Ak9H18Oonoyfd5pmTS9SuOYlhTLZhX/view",
        text: "View Certificate"
      }
    },
    {
      id: 2,
      title: "Excellence Award",
      organization: "",
      period: "August 2019",
      description: ["Recognized for outstanding academic performance"]
    },
    {
      id: 3,
      title: "4th Prize: Inter-school Mathematics Excellence Competition",
      organization: "",
      period: "May 2018",
      description: ["Recognized for exceptional mathematical aptitude in an inter-school competition"]
    },
    {
      id: 4,
      title: "Certificate of Congratulations",
      organization: "President of the National Assembly of Burkina Faso",
      period: "April 2018",
      description: ["Official recognition for academic achievements"]
    },
    {
      id: 5,
      title: "WonMoPyeongAe Scholarship",
      organization: "",
      period: "February 2017",
      description: ["Awarded for academic excellence and contribution to promoting a peaceful world"]
    },
    {
      id: 6,
      title: "1st Prize for Excellence and Honor Roll",
      organization: "",
      period: "May 2017",
      description: ["Top academic performance in 'Seconde' grade (French system)"]
    },
    {
      id: 7,
      title: "Special Jury Prize: Kouka Competition No. 11",
      organization: "REN-LAC (National Anti-Corruption Network)",
      period: "2012",
      description: ["Recognized for exceptional work in anti-corruption awareness"]
    }
  ];
  
  return (
    <main className="pt-24">
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-joshua-dark">My Background</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My academic journey has equipped me with a strong foundation in mathematics, 
            engineering, and artificial intelligence. Below you'll find details about my 
            education, certifications, and notable recognition.
          </p>
        </div>
      </AnimatedSection>
      
      <section className="py-8 bg-joshua-light/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6">
            <a 
              href="https://drive.google.com/drive/folders/1TfeVE2bxir1Y7_qDkj--zWFP5df3hBPp?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-joshua-secondary text-white rounded-md hover:bg-joshua-secondary/90 transition-all shadow-md hover:shadow-lg"
            >
              View All Certificates
            </a>
          </div>
        </div>
      </section>
      
      <Timeline 
        title="Academic Background" 
        items={educationItems} 
      />
      
      <Timeline 
        title="Certifications" 
        items={certificationItems} 
      />
      
      <Timeline 
        title="Awards and Distinctions" 
        items={awardItems} 
      />
      
      <ContactForm />
    </main>
  );
};

export default BackgroundPage;
