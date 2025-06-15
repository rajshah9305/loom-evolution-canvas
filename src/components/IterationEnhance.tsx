
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

  return (
    <section id="enhance" className="min-h-screen flex items-center gradient-evolution-enhance relative overflow-hidden particle-field">
      {/* Sophisticated particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              backgroundColor: `hsl(var(--evolution-${['enhanced', 'sophisticated', 'perfect'][i % 3]}))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sophisticated-float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic light rays */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              width: '2px',
              height: '100%',
              background: `linear-gradient(180deg, transparent, hsl(var(--evolution-sophisticated)), transparent)`,
              left: `${15 + i * 15}%`,
              transform: `rotate(${-10 + i * 4}deg)`,
              animation: `perfect-shimmer ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 text-white text-sm rounded-xl border border-white/25 backdrop-blur"
                   style={{ 
                     background: `linear-gradient(135deg, hsl(var(--evolution-enhanced)), hsl(var(--evolution-sophisticated)))`,
                     boxShadow: `0 8px 32px hsla(var(--evolution-enhanced), 0.4)`
                   }}>
                Iteration 3 • Enhancement
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight text-shadow-evolution">
                Weaving Intricate
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  Patterns
                </span>
              </h2>
              <p className="text-xl font-medium leading-relaxed"
                 style={{ color: `hsl(var(--evolution-light))` }}>
                "Beyond the basics: where design meets dynamic interaction."
              </p>
              <p className="text-white/80 leading-relaxed">
                Complexity emerges with grace. Claude Sonnet 4 now interprets nuanced design language, 
                creating responsive ecosystems with sophisticated choreography. Every micro-interaction tells a story, 
                every transition serves the greater narrative of user experience.
              </p>
              
              <div className="space-y-4">
                <div className="text-sm text-white/60 font-mono tracking-wide">SOPHISTICATED INPUT</div>
                <div className="glass-evolution p-6 rounded-xl border font-mono text-sm text-white shadow-xl"
                     style={{ 
                       borderColor: `hsl(var(--evolution-enhanced) / 0.4)`,
                       boxShadow: `0 8px 32px hsla(var(--evolution-enhanced), 0.3)`
                     }}>
                  "responsive hero with dynamic interactions and fluid animations"
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <div className="flex space-x-1">
                    {['enhanced', 'sophisticated', 'perfect'].map((level, i) => (
                      <div 
                        key={level}
                        className="w-2 h-2 rounded-full animate-pulse" 
                        style={{ 
                          backgroundColor: `hsl(var(--evolution-${level}))`,
                          animationDelay: `${i * 0.2}s` 
                        }} 
                      />
                    ))}
                  </div>
                  <span>Orchestrating interactions...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Enhanced UI with sophisticated interactions */}
            <div className="glass-evolution p-10 rounded-3xl shadow-2xl border relative overflow-hidden"
                 style={{ 
                   borderColor: `hsl(var(--evolution-enhanced) / 0.3)`,
                   boxShadow: `0 20px 60px hsla(var(--evolution-enhanced), 0.4)`
                 }}>
              {/* Background shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-perfect-shimmer" />
              
              <div className="space-y-10 relative">
                {/* Sophisticated header */}
                <div className="flex justify-between items-center pb-8 border-b border-white/15">
                  <div className="w-28 h-12 rounded-xl flex items-center justify-center relative overflow-hidden"
                       style={{ 
                         background: `linear-gradient(135deg, hsl(var(--evolution-enhanced)), hsl(var(--evolution-sophisticated)), hsl(var(--evolution-perfect)))`,
                         animation: 'gradient-evolution-flow 8s ease-in-out infinite'
                       }}>
                    <span className="text-white text-lg font-bold">LOOM</span>
                  </div>
                  <div className="flex space-x-5">
                    {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                      <button 
                        key={item}
                        className="px-5 py-3 text-white/80 hover:text-white rounded-xl text-sm transition-all duration-500 backdrop-blur relative group overflow-hidden"
                        style={{ 
                          border: `1px solid hsla(var(--evolution-enhanced), 0.3)`,
                          background: `hsla(var(--evolution-enhanced), 0.1)`
                        }}
                      >
                        <span className="relative z-10">{item}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hero section with dynamic elements */}
                <div className="text-center space-y-8">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                    Create. Iterate. Perfect.
                  </h3>
                  <p className="text-white/70 max-w-lg mx-auto leading-relaxed">
                    Transform your ideas into stunning interfaces with AI-powered design intelligence that evolves with your vision.
                  </p>
                  
                  <div className="flex justify-center space-x-6">
                    <button className="px-8 py-4 rounded-2xl shadow-xl text-white font-semibold transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
                            style={{ 
                              background: `linear-gradient(135deg, hsl(var(--evolution-enhanced)), hsl(var(--evolution-sophisticated)))`,
                              boxShadow: `0 8px 32px hsla(var(--evolution-enhanced), 0.5)`
                            }}>
                      <span className="relative z-10">Start Creating</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button>
                    <button className="px-8 py-4 border rounded-2xl text-white backdrop-blur transition-all duration-500 hover:scale-105 relative group"
                            style={{ 
                              borderColor: `hsl(var(--evolution-sophisticated) / 0.4)`,
                              background: `hsla(var(--evolution-sophisticated), 0.1)`
                            }}>
                      <span className="relative z-10">Watch Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button>
                  </div>
                </div>

                {/* Interactive sophistication showcase */}
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="h-20 rounded-2xl backdrop-blur border transition-all duration-700 cursor-pointer transform hover:scale-110 hover:rotate-1 relative overflow-hidden group"
                      style={{ 
                        background: `linear-gradient(135deg, hsla(var(--evolution-enhanced), 0.2), hsla(var(--evolution-sophisticated), 0.1))`,
                        borderColor: `hsl(var(--evolution-enhanced) / 0.3)`,
                        boxShadow: `0 4px 16px hsla(var(--evolution-enhanced), 0.2)`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-white/70 font-light">
              Interaction becomes an art form, complexity becomes intuitive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
