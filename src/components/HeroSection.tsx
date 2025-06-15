
import { useEffect, useState } from "react";

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

      {/* Watch the magic unfold text positioned with better visual balance */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-gray-500 mb-3">
          ↓ Watch the magic unfold
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
