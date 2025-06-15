
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { IterationBasic } from "@/components/IterationBasic";
import { IterationRefine } from "@/components/IterationRefine";
import { IterationEnhance } from "@/components/IterationEnhance";
import { IterationPerfect } from "@/components/IterationPerfect";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = currentScrollY / totalScroll;
      
      setScrollProgress(currentProgress);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 z-50 shadow-sm">
        <div 
          className="h-full bg-gradient-to-r from-loom-primary via-loom-secondary via-loom-accent to-loom-warm transition-all duration-500 shadow-lg"
          style={{ 
            width: `${scrollProgress * 100}%`,
            boxShadow: `0 0 20px rgba(59, 130, 246, ${scrollProgress * 0.8})`
          }}
        />
        <div 
          className="absolute top-0 h-full w-1 bg-white rounded-full shadow-lg transition-all duration-300"
          style={{ left: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 backdrop-blur-xl bg-white/15 border border-white/30 rounded-2xl px-8 py-4 shadow-xl transition-all duration-500 ${scrollDirection === 'up' ? 'translate-y-0' : scrollProgress > 0.1 ? '-translate-y-20' : 'translate-y-0'}`}>
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-loom-primary via-loom-secondary to-loom-accent bg-clip-text text-transparent animate-pulse-color">
            Loom
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {[
              { href: '#basic', label: 'Basic' },
              { href: '#refine', label: 'Refine' },
              { href: '#enhance', label: 'Enhance' },
              { href: '#perfect', label: 'Perfect' }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-loom-primary transition-all duration-300 hover:scale-110 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-loom-primary to-loom-secondary transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-loom-primary/10 to-loom-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              </a>
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
