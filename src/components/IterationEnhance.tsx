
import { useEffect, useState } from "react";

export const IterationEnhance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('enhance');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Dynamic floating particles
  const particles = Array.from({ length: 25 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full bg-white/40 backdrop-blur animate-float"
      style={{
        width: `${4 + Math.random() * 8}px`,
        height: `${4 + Math.random() * 8}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${4 + Math.random() * 3}s`
      }}
    />
  ));

  return (
    <section id="enhance" className="min-h-screen flex items-center gradient-loom-enhance relative overflow-hidden">
      {/* Advanced Particle System */}
      <div className="absolute inset-0">
        {particles}
      </div>

      {/* Complex Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
             style={{ 
               background: 'conic-gradient(from 0deg, var(--loom-primary-0), var(--loom-accent-0), var(--loom-secondary-0), var(--loom-warm-0), var(--loom-primary-0))',
               animationDuration: '12s'
             }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-15 animate-float"
             style={{ 
               background: 'linear-gradient(45deg, var(--loom-secondary-0), var(--loom-cool-0))',
               clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
               animationDelay: '3s',
               animationDuration: '10s'
             }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-morph text-white text-sm rounded-full shadow-2xl">
              <span className="font-mono">03</span>
              <span>/</span>
              <span>Iteration 3</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white text-shadow">Weaving</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent text-glow">
                Intricate Patterns
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-blue-100 font-medium leading-relaxed">
                "Beyond the basics: where design meets dynamic interaction."
              </p>
              
              <p className="text-lg text-blue-50/90 leading-relaxed">
                Complexity emerges with grace. Claude Sonnet 4 now interprets nuanced design language, 
                creating responsive layouts with sophisticated animations. Every micro-interaction tells a story, 
                every transition serves a purpose.
              </p>
            </div>
            
            <div className="space-y-4 p-6 glass-morph rounded-xl border border-white/20 shadow-2xl">
              <div className="text-sm text-blue-200 font-mono uppercase tracking-wide">Advanced Input</div>
              <div className="glass-effect p-4 rounded-lg border border-white/30 font-mono text-sm text-white shadow-lg">
                "responsive hero with animated background and glowing CTA"
              </div>
              <div className="flex items-center space-x-3 text-sm text-blue-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                <span>Generating interactive elements...</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Enhanced UI Demo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl" />
              <div className="relative glass-morph p-8 rounded-3xl shadow-2xl border border-white/30 hover-lift">
                <div className="space-y-8">
                  {/* Advanced header with enhanced gradients */}
                  <div className="flex justify-between items-center pb-6 border-b border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl shadow-lg"
                           style={{ background: 'conic-gradient(from 0deg, var(--loom-primary-0), var(--loom-accent-0), var(--loom-secondary-0), var(--loom-primary-0))' }} />
                      <span className="text-white font-bold text-xl">LOOM</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {['Home', 'Features', 'Pricing', 'Contact'].map((item, i) => (
                        <button 
                          key={item}
                          className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl text-sm transition-all duration-300 backdrop-blur hover:scale-105"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hero section with complex animations */}
                  <div className="text-center space-y-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-200 to-cyan-200 bg-clip-text text-transparent">
                      Create. Iterate. Perfect.
                    </h3>
                    <p className="text-white/70 max-w-md mx-auto leading-relaxed">
                      Transform your ideas into stunning interfaces with AI-powered design intelligence.
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                        <span className="relative z-10">Start Creating</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                      </button>
                      <button className="px-8 py-4 border border-white/30 text-white rounded-2xl backdrop-blur hover:bg-white/10 transition-all duration-300 hover:scale-105">
                        Watch Demo
                      </button>
                    </div>
                  </div>

                  {/* Interactive elements showcase */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="h-20 glass-effect rounded-xl backdrop-blur border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer transform hover:scale-105 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-blue-100 font-medium">
              Interaction becomes an art form
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
