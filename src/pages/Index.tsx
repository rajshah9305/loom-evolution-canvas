
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
      const currentProgress = window.pageYOffset / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-8 py-4 shadow-lg shadow-black/5">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-loom-primary via-loom-secondary to-loom-accent bg-clip-text text-transparent">
            Loom
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#basic" className="text-gray-700 hover:text-loom-primary transition-all duration-300 hover:scale-105 relative group">
              Basic
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-loom-primary to-loom-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#refine" className="text-gray-700 hover:text-loom-primary transition-all duration-300 hover:scale-105 relative group">
              Refine
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-loom-primary to-loom-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#enhance" className="text-gray-700 hover:text-loom-primary transition-all duration-300 hover:scale-105 relative group">
              Enhance
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-loom-primary to-loom-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#perfect" className="text-gray-700 hover:text-loom-primary transition-all duration-300 hover:scale-105 relative group">
              Perfect
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-loom-primary to-loom-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
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
