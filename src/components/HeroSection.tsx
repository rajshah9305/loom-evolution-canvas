
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      {/* Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.3) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-loom-primary/10 to-loom-secondary/10 rounded-full animate-float-gentle animate-morph" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-loom-secondary/10 to-loom-accent/10 rounded-full animate-float-gentle animate-morph" style={{ animationDelay: '2s', animationDuration: '6s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-loom-accent/10 to-loom-warm/10 rounded-full animate-float-gentle animate-morph" style={{ animationDelay: '4s', animationDuration: '5s' }} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              animation: 'gradient-wave 8s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-loom-primary via-loom-secondary to-loom-accent bg-clip-text text-transparent leading-tight glow-text">
            Loom
          </h1>
          
          {/* Animated Tagline */}
          <div className="relative">
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 leading-relaxed font-light">
              Where AI weaves your words into
            </p>
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-loom-primary via-loom-secondary to-loom-accent bg-clip-text text-transparent animate-pulse-color">
              visual masterpieces
            </p>
          </div>
        </div>

        <p className="text-xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
          Journey through the evolution of AI-powered design. From simple concepts to stunning interfaces, 
          watch as each iteration brings us closer to the perfect synthesis of human creativity and artificial intelligence.
        </p>

        {/* Enhanced Code Block */}
        <div className="mb-20">
          <div className="inline-block group">
            <div className="glass-card px-10 py-6 rounded-2xl hover-lift">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <code className="text-lg text-gray-700 font-mono">
                "Create a modern landing page with smooth animations"
              </code>
              <div className="mt-3 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-loom-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-loom-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-loom-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced "Watch the magic unfold" Section */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center">
        <div className="group cursor-pointer">
          <div className="text-lg text-gray-600 mb-4 font-medium group-hover:text-loom-primary transition-all duration-300">
            <span className="inline-block group-hover:scale-110 transition-transform duration-300">✨</span>
            <span className="mx-2 group-hover:tracking-wider transition-all duration-300">Watch the magic unfold</span>
            <span className="inline-block group-hover:scale-110 transition-transform duration-300">✨</span>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-loom-primary to-transparent mx-auto group-hover:w-24 transition-all duration-500"></div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center group hover:border-loom-primary transition-colors duration-300">
          <div className="w-1.5 h-4 bg-gradient-to-b from-loom-primary to-loom-secondary rounded-full mt-2 animate-pulse group-hover:h-5 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};
