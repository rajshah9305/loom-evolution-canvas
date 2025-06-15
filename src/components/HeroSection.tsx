
import { useEffect, useState } from "react";
import { MousePointer } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-loom-primary/5 rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-loom-secondary/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 md:w-32 h-16 md:h-32 bg-loom-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-800 via-loom-primary to-loom-secondary bg-clip-text text-transparent leading-tight">
          Loom
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4">
          Where AI weaves your words into visual masterpieces
        </p>

        <p className="text-base sm:text-lg text-gray-500 mb-16 md:mb-20 max-w-2xl mx-auto leading-relaxed px-4">
          Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
          watch as each iteration brings us closer to the perfect synthesis of human creativity and artificial intelligence.
        </p>

        <div className="space-y-6 mb-16 md:mb-20">
          <div className="inline-block px-4 md:px-8 py-3 md:py-4 bg-white rounded-lg shadow-lg border border-gray-200 max-w-full mx-4">
            <code className="text-xs sm:text-sm text-gray-700 font-mono break-words">
              "Create a modern landing page with smooth animations"
            </code>
          </div>
        </div>

        {/* Watch the magic unfold section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3 text-sm sm:text-base text-gray-500">
            <MousePointer className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            <span>Watch the magic unfold</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            ↓ Scroll to explore
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
