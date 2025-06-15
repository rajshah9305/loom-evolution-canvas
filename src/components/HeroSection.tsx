
import { useEffect, useState } from "react";
import { MousePointerClick } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-loom-primary/5 rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-loom-secondary/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-loom-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-loom-primary to-loom-secondary bg-clip-text text-transparent leading-tight">
          Loom
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Where AI weaves your words into visual masterpieces
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
          watch as each iteration brings us closer to the perfect synthesis of human creativity and artificial intelligence.
        </p>

        <div className="space-y-4 mb-24">
          <div className="inline-block px-8 py-4 bg-white rounded-lg shadow-lg border border-gray-200">
            <code className="text-sm text-gray-700 font-mono">
              "Create a modern landing page with smooth animations"
            </code>
          </div>
        </div>
      </div>

      {/* Enhanced "Watch the magic unfold" section */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center">
        <div className="group cursor-pointer">
          {/* Floating background circle */}
          <div className="absolute inset-0 w-32 h-16 bg-gradient-to-r from-loom-primary/10 to-loom-secondary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow" />
          
          {/* Main content */}
          <div className="relative flex flex-col items-center space-y-3">
            {/* Icon with enhanced styling */}
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 group-hover:scale-110 transition-all duration-300">
              <MousePointerClick className="w-5 h-5 text-loom-primary group-hover:text-loom-secondary transition-colors duration-300" />
            </div>
            
            {/* Text with gradient and animation */}
            <div className="bg-gradient-to-r from-loom-primary via-loom-secondary to-loom-accent bg-clip-text text-transparent font-medium text-sm tracking-wide group-hover:scale-105 transition-all duration-300">
              ↓ Watch the magic unfold
            </div>
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12" />
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-loom-primary/60 rounded-full flex justify-center relative overflow-hidden group cursor-pointer">
          <div className="w-1 h-3 bg-gradient-to-b from-loom-primary to-loom-secondary rounded-full mt-2 animate-pulse" />
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-loom-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
};
