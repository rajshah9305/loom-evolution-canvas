
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Elegant particles with improved timing
  const particles = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 12}s`,
        animationDuration: `${10 + Math.random() * 6}s`,
      }}
    />
  ));

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Refined Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Enhanced Dynamic Background */}
      <div 
        className="absolute inset-0 transition-all duration-[1500ms] ease-out opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(79, 70, 229, 0.03) 0%, 
            rgba(79, 70, 229, 0.01) 40%,
            transparent 70%)`
        }}
      />

      {/* Refined Particle System */}
      <div className="particles">
        {particles}
      </div>

      {/* Main Content Container */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 flex-1 flex flex-col justify-center transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Main Title with Enhanced Typography */}
        <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-[0.85] tracking-[-0.02em]">
          <span className="text-gradient-primary">
            Loom
          </span>
        </h1>
        
        {/* Refined Subtitle */}
        <div className={`transition-all duration-1200 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium leading-relaxed tracking-[-0.01em]">
            Where AI weaves your words into visual masterpieces
          </p>
        </div>

        {/* Enhanced Description */}
        <div className={`transition-all duration-1200 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-base md:text-lg text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed font-normal">
            Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
            watch as each iteration brings us closer to perfect synthesis.
          </p>
        </div>

        {/* Refined Code Block */}
        <div className={`transition-all duration-1200 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-98'}`}>
          <div className="inline-block px-8 py-5 glass-effect rounded-2xl shadow-xl border border-slate-200/40 mb-20 hover-lift-subtle group">
            <code className="text-sm md:text-base text-slate-700 font-mono font-medium tracking-wide group-hover:text-slate-800 transition-colors duration-300">
              "Create a modern landing page with smooth animations"
            </code>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator Section */}
      <div className={`relative z-10 flex flex-col items-center space-y-6 pb-12 transition-all duration-1200 delay-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Scroll Text with Better Alignment */}
        <div className="text-sm text-slate-400 font-medium flex items-center justify-center space-x-4 tracking-wide">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <span className="px-2">Scroll to explore</span>
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>
        
        {/* Enhanced Mouse Icon */}
        <div className="animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center relative group hover:border-slate-400 transition-colors duration-300">
            <div className="w-0.5 h-3 bg-slate-400 rounded-full mt-2.5 animate-pulse group-hover:bg-slate-500 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
