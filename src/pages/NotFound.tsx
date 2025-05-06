
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-joshua-light/30 pt-16">
      <AnimatedSection className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-joshua-primary">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-joshua-secondary text-white rounded-md hover:bg-joshua-secondary/90 transition-all shadow-md hover:shadow-lg"
        >
          Return to Home
        </Link>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;
