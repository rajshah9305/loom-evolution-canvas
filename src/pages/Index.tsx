
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
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 glass-effect rounded-full px-6 py-3">
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold bg-gradient-to-r from-loom-primary to-loom-secondary bg-clip-text text-transparent">
            Loom
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            <a href="#basic" className="hover:text-loom-primary transition-colors">Basic</a>
            <a href="#refine" className="hover:text-loom-primary transition-colors">Refine</a>
            <a href="#enhance" className="hover:text-loom-primary transition-colors">Enhance</a>
            <a href="#perfect" className="hover:text-loom-primary transition-colors">Perfect</a>
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
