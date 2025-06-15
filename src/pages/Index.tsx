
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
      {/* Enhanced Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50 backdrop-blur">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 through-pink-500 to-cyan-500 transition-all duration-300 shadow-lg"
          style={{ 
            width: `${scrollProgress * 100}%`,
            filter: 'drop-shadow(0 0 4px rgba(99, 102, 241, 0.5))'
          }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Loom
            </span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {[
              { id: 'basic', label: 'Basic', color: 'from-gray-600 to-gray-800' },
              { id: 'refine', label: 'Refine', color: 'from-blue-600 to-purple-600' },
              { id: 'enhance', label: 'Enhance', color: 'from-purple-600 to-pink-600' },
              { id: 'perfect', label: 'Perfect', color: 'from-pink-600 to-cyan-600' }
            ].map(({ id, label, color }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 group ${
                  activeSection === id 
                    ? `bg-gradient-to-r ${color} text-white shadow-lg` 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="relative z-10">{label}</span>
                {activeSection !== id && (
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
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
