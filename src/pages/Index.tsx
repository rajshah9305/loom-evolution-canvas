
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { IterationBasic } from "@/components/IterationBasic";
import { IterationRefine } from "@/components/IterationRefine";
import { IterationEnhance } from "@/components/IterationEnhance";
import { IterationPerfect } from "@/components/IterationPerfect";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset / totalScroll;
      setScrollProgress(currentProgress);

      // Determine active section for navigation highlighting
      const sections = ['basic', 'refine', 'enhance', 'perfect'];
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      {/* Professional Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-slate-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-slate-700 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Professional Navigation - Lightened fonts */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 glass-morph rounded-full px-6 py-3 shadow-lg border border-slate-200/50">
        <div className="flex items-center space-x-6">
          <div className="text-lg font-medium text-red-500 tracking-tight">
            Loom
          </div>
          <div className="hidden md:flex space-x-1 text-sm">
            {[
              { id: 'basic', label: 'Basic' },
              { id: 'refine', label: 'Refine' },
              { id: 'enhance', label: 'Enhance' },
              { id: 'perfect', label: 'Perfect' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 text-sm font-normal ${
                  activeSection === id 
                    ? 'bg-indigo-500 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
              >
                {label}
              </button>
            ))}
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
