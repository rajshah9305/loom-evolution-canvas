
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

  // Create particles
  const particles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    />
  ));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background with Mouse Interaction */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(99, 102, 241, 0.1) 0%, 
            rgba(139, 92, 246, 0.05) 30%, 
            rgba(6, 182, 212, 0.03) 60%, 
            transparent 100%),
            linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)`
        }}
      />

      {/* Particle System */}
      <div className="particles">
        {particles}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 animate-float"
          style={{
            background: 'linear-gradient(45deg, var(--loom-primary-0), var(--loom-secondary-0))',
            top: '10%',
            left: '10%',
            animationDelay: '0s',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-10 animate-float"
          style={{
            background: 'linear-gradient(45deg, var(--loom-accent-0), var(--loom-warm-0))',
            bottom: '20%',
            right: '15%',
            animationDelay: '2s',
            animationDuration: '10s'
          }}
        />
        <div 
          className="absolute w-32 h-32 rounded-full opacity-15 animate-float"
          style={{
            background: 'linear-gradient(45deg, var(--loom-secondary-0), var(--loom-cool-0))',
            top: '50%',
            right: '30%',
            animationDelay: '4s',
            animationDuration: '6s'
          }}
        />
      </div>

      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Main Title with Enhanced Typography */}
        <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
          <span 
            className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-flow 8s ease-in-out infinite'
            }}
          >
            Loom
          </span>
        </h1>
        
        {/* Subtitle with Refined Animation */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6 leading-relaxed font-light">
            Where AI weaves your words into visual masterpieces
          </p>
        </div>

        {/* Description with Staggered Animation */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
            watch as each iteration brings us closer to the perfect synthesis of human creativity and artificial intelligence.
          </p>
        </div>

        {/* Enhanced Code Block */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
          <div className="inline-block px-8 py-6 glass-effect rounded-2xl shadow-2xl border border-white/20 mb-16 hover-lift">
            <code className="text-sm md:text-base text-gray-800 font-mono leading-relaxed">
              "Create a modern landing page with smooth animations"
            </code>
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-sm text-gray-500 mb-6 flex items-center justify-center space-x-3">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <span className="font-medium tracking-wide">Watch the magic unfold</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full" />
        </div>
      </div>
    </section>
  );
};
