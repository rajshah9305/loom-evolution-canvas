
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

  // Subtle particles
  const particles = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
      }}
    />
  ));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Dynamic Background with Mouse Interaction */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(79, 70, 229, 0.04) 0%, 
            transparent 50%)`
        }}
      />

      {/* Particle System */}
      <div className="particles">
        {particles}
      </div>

      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-gradient-primary">
            Loom
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
            Where AI weaves your words into visual masterpieces
          </p>
        </div>

        {/* Description */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-base md:text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
            watch as each iteration brings us closer to perfect synthesis.
          </p>
        </div>

        {/* Code Block */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
          <div className="inline-block px-6 py-4 glass-effect rounded-xl shadow-lg border border-slate-200/50 mb-16 hover-lift-subtle">
            <code className="text-sm md:text-base text-slate-700 font-mono">
              "Create a modern landing page with smooth animations"
            </code>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-sm text-slate-400 mb-6 flex items-center justify-center space-x-3">
            <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="font-medium">Scroll to explore</span>
            <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center relative">
          <div className="w-0.5 h-2 bg-slate-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
