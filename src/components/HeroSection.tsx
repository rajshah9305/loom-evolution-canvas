
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Create a modern landing page with smooth animations";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 50);

    return () => clearInterval(typewriterInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-loom-primary/5 rounded-full animate-float" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-loom-secondary/5 rounded-full animate-float" 
          style={{ animationDelay: '1s' }} 
        />
        <div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-loom-accent/5 rounded-full animate-float" 
          style={{ animationDelay: '2s' }} 
        />
      </div>

      {/* Main Hero Content - Dominant and Centered */}
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 flex-1 flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 bg-gradient-to-r from-gray-900 via-loom-primary to-loom-secondary bg-clip-text text-transparent leading-tight tracking-tight">
          Loom
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-12 leading-relaxed font-semibold max-w-4xl">
          Where AI weaves your words into visual masterpieces
        </p>

        <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
          Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
          watch as each iteration brings us closer to the perfect synthesis of human creativity and artificial intelligence.
        </p>
      </div>

      {/* Demo Section - Positioned Lower */}
      <div className="relative z-10 mb-16 space-y-6">
        <div className="inline-block px-8 py-4 bg-white rounded-xl shadow-lg border border-gray-200">
          <code className="text-sm md:text-base text-gray-700 font-mono">
            "{typewriterText}"
            <span className="animate-blink border-r-2 border-gray-700 ml-1"></span>
          </code>
        </div>
        <div className="text-base text-gray-500 animate-bounce flex items-center justify-center gap-2">
          <span>↓ Watch the magic unfold</span>
        </div>
      </div>

      {/* Scroll Indicator - Bottom positioned */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
