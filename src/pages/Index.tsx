
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { IterationBasic } from "@/components/IterationBasic";
import { IterationRefine } from "@/components/IterationRefine";
import { IterationEnhance } from "@/components/IterationEnhance";
import { IterationPerfect } from "@/components/IterationPerfect";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset / totalScroll;
      setScrollProgress(currentProgress);

      // Determine active section based on scroll position
      const sections = ['hero', 'basic', 'refine', 'enhance', 'perfect'];
      const sectionElements = sections.map(id => {
        const element = document.getElementById(id);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top,
          height: rect.height
        };
      }).filter(Boolean);

      // Find the section that's most visible in the viewport
      const viewportHeight = window.innerHeight;
      let currentActiveSection = 'hero';

      for (const section of sectionElements) {
        if (section && section.top <= viewportHeight / 2 && section.top + section.height > viewportHeight / 2) {
          currentActiveSection = section.id;
          break;
        }
      }

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'basic', label: 'Basic' },
    { id: 'refine', label: 'Refine' },
    { id: 'enhance', label: 'Enhance' },
    { id: 'perfect', label: 'Perfect' }
  ];

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
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 glass-effect rounded-full px-4 md:px-6 py-3">
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-loom-primary to-loom-secondary bg-clip-text text-transparent">
            Loom
          </div>
          <div className="flex space-x-2 md:space-x-4 text-xs md:text-sm">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-2 md:px-3 py-1 md:py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-loom-primary text-white shadow-lg transform scale-105'
                    : 'hover:text-loom-primary hover:bg-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div id="hero">
        <HeroSection />
      </div>
      <div id="basic">
        <IterationBasic />
      </div>
      <div id="refine">
        <IterationRefine />
      </div>
      <div id="enhance">
        <IterationEnhance />
      </div>
      <div id="perfect">
        <IterationPerfect />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
