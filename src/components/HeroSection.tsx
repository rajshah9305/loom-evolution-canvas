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
    <section className="min-h-screen flex flex-col justify-between items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
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

      {/* Spacer for top balance */}
      <div className="h-20"></div>

      {/* Main Content Container - Better centered with improved spacing */}
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-8 flex-1 flex flex-col justify-center items-center transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] font-bold leading-[0.8] tracking-[-0.03em]">
            <span className="text-gradient-primary drop-shadow-sm">
              Loom
            </span>
          </h1>
        </div>
        
        {/* Enhanced Subtitle - Closer spacing to title */}
        <div className={`transition-all duration-1200 delay-200 ease-out mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-700 font-semibold leading-relaxed tracking-[-0.015em]">
            Where AI weaves your words into visual masterpieces
          </p>
        </div>

        {/* Enhanced Description - Reduced spacing */}
        <div className={`transition-all duration-1200 delay-400 ease-out mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
            watch as each iteration brings us closer to perfect synthesis.
          </p>
        </div>

        {/* Enhanced Code Block */}
        <div className={`transition-all duration-1200 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-98'}`}>
          <div className="inline-block px-10 py-6 glass-effect rounded-3xl shadow-2xl border border-slate-200/50 hover-lift-subtle group">
            <code className="text-base md:text-lg lg:text-xl text-slate-800 font-mono font-semibold tracking-wide group-hover:text-slate-900 transition-colors duration-300">
              "Create a modern landing page with smooth animations"
            </code>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator Section - Positioned lower with reduced bottom padding */}
      <div className={`relative z-10 flex flex-col items-center space-y-6 pt-16 pb-12 transition-all duration-1200 delay-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Scroll Text with improved spacing */}
        <div className="text-base text-slate-600 font-semibold flex items-center justify-center space-x-6 tracking-wide mb-2">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          <span className="px-3">Scroll to explore</span>
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        </div>
        
        {/* Enhanced Mouse Icon - Better positioned */}
        <div className="animate-bounce-slow">
          <div className="w-7 h-12 border-[3px] border-slate-500 rounded-full flex justify-center relative group hover:border-slate-600 transition-colors duration-300">
            <div className="w-1 h-4 bg-slate-600 rounded-full mt-3 animate-pulse group-hover:bg-slate-700 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
