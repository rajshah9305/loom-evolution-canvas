
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { IterationBasic } from "@/components/IterationBasic";
import { IterationRefine } from "@/components/IterationRefine";
import { IterationEnhance } from "@/components/IterationEnhance";
import { IterationPerfect } from "@/components/IterationPerfect";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? window.pageYOffset / totalScroll : 0;
      setScrollProgress(Math.min(currentProgress, 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-loom-primary via-loom-secondary to-loom-accent transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 glass-effect rounded-full px-6 py-3">
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold bg-gradient-to-r from-loom-primary to-loom-secondary bg-clip-text text-transparent">
            Loom
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            <button 
              onClick={() => handleNavClick('basic')}
              className="hover:text-loom-primary transition-colors cursor-pointer"
            >
              Basic
            </button>
            <button 
              onClick={() => handleNavClick('refine')}
              className="hover:text-loom-primary transition-colors cursor-pointer"
            >
              Refine
            </button>
            <button 
              onClick={() => handleNavClick('enhance')}
              className="hover:text-loom-primary transition-colors cursor-pointer"
            >
              Enhance
            </button>
            <button 
              onClick={() => handleNavClick('perfect')}
              className="hover:text-loom-primary transition-colors cursor-pointer"
            >
              Perfect
            </button>
          </div>
        </div>
      </nav>

      <HeroSection />
      <IterationBasic />
      <IterationRefine />
      <IterationEnhance />
      <IterationPerfect />
      <Footer />
    </div>
  );
};

export default Index;
