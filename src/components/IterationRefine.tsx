
import { useEffect, useState } from "react";

export const IterationRefine = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const element = document.getElementById('refine');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="refine" className="min-h-screen flex items-center gradient-evolution-refine relative overflow-hidden">
      {/* Enhanced evolving pattern overlay */}
      <div className="absolute inset-0 opacity-15 will-change-transform">
        <div 
          className="w-full h-full gpu-accelerated"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsla(var(--evolution-accent), 0.3) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, hsla(var(--evolution-depth), 0.25) 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, hsla(var(--evolution-refined), 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 80px 80px, 100px 100px',
            animation: 'cosmic-drift 25s ease-in-out infinite'
          }}
        />
      </div>

      {/* Sophisticated color emergence particles */}
      <div className="absolute inset-0 will-change-transform">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60 magnetic-glow will-change-transform gpu-accelerated"
            style={{
              width: `${8 + i * 1.5}px`,
              height: `${8 + i * 1.5}px`,
              background: `linear-gradient(45deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
              left: `${8 + Math.random() * 84}%`,
              top: `${12 + Math.random() * 76}%`,
              animation: `sophisticated-float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: `0 0 ${16 + i * 1.5}px hsla(var(--evolution-accent), 0.3)`
            }}
          />
        ))}
      </div>

      {/* Dynamic light streams */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute will-change-transform"
            style={{
              width: '2px',
              height: '100%',
              background: `linear-gradient(180deg, transparent, hsl(var(--evolution-refined)), transparent)`,
              left: `${15 + i * 15}%`,
              transform: `rotate(${-8 + i * 3}deg)`,
              animation: `perfect-shimmer ${8 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              filter: 'blur(0.8px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1500 delay-300 will-change-transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-10">
              <div className="inline-block px-6 py-3 text-white text-sm rounded-2xl border border-white/25 backdrop-blur relative overflow-hidden"
                   style={{ 
                     background: `linear-gradient(135deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
                     boxShadow: `0 8px 32px hsla(var(--evolution-accent), 0.4)`
                   }}>
                <span className="relative z-10 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                  <span className="font-medium">Iteration 2 • Refinement</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full animate-[perfect-shimmer_4s_ease-in-out_infinite]" />
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight text-shadow-evolution">
                Adding Threads
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  of Style
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl leading-relaxed font-medium italic"
                 style={{ color: `hsl(var(--evolution-ethereal))` }}>
                "From structure to style: watching your words take shape."
              </p>
              
              <p className="text-lg text-white/85 leading-relaxed max-w-xl">
                The foundation grows sophisticated. Claude Sonnet 4 now understands aesthetic language, 
                transforming style requests into harmonious designs. Colors emerge from the darkness, 
                shadows learn to dance, and the first hints of personality begin to bloom.
              </p>
              
              <div className="space-y-6">
                <div className="text-sm text-white/60 font-mono tracking-wider uppercase">Stylistic Input</div>
                <div className="glass-evolution-enhanced p-6 md:p-8 rounded-2xl border font-mono text-sm text-white shadow-2xl relative overflow-hidden"
                     style={{ 
                       borderColor: `hsl(var(--evolution-accent) / 0.3)`,
                       boxShadow: `0 16px 48px hsla(var(--evolution-accent), 0.3)`
                     }}>
                  <div className="flex items-start space-x-3 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1 animate-pulse flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-white/60 text-xs mb-2">$ loom refine --style</div>
                      <div className="break-words">"make the buttons refined and add subtle depth"</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -translate-x-full animate-[perfect-shimmer_5s_ease-in-out_infinite]" />
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-white/75">
                  <div className="flex space-x-2">
                    {['accent', 'refined', 'enhanced'].map((level, i) => (
                      <div 
                        key={level}
                        className="w-2 h-2 rounded-full animate-pulse" 
                        style={{ 
                          backgroundColor: `hsl(var(--evolution-${level}))`,
                          animationDelay: `${i * 0.25}s`,
                          boxShadow: `0 0 6px hsl(var(--evolution-${level}))`
                        }} 
                      />
                    ))}
                  </div>
                  <span>Weaving visual threads...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1500 delay-500 will-change-transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Enhanced styled UI */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-35"
                   style={{ 
                     background: `linear-gradient(135deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
                     transform: 'scale(1.1)'
                   }} />
              
              <div className="relative glass-evolution-enhanced p-8 md:p-12 rounded-3xl shadow-2xl border"
                   style={{ 
                     borderColor: `hsl(var(--evolution-accent) / 0.25)`,
                     boxShadow: `0 20px 60px hsla(var(--evolution-accent), 0.4)`
                   }}>
                <div className="space-y-8">
                  {/* Sophisticated header */}
                  <div className="flex justify-between items-center pb-6 border-b border-white/12">
                    <div className="w-32 h-12 rounded-xl flex items-center justify-center relative overflow-hidden"
                         style={{ 
                           background: `linear-gradient(135deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
                           animation: 'holographic-shift 6s ease-in-out infinite',
                           boxShadow: `0 0 24px hsla(var(--evolution-accent), 0.5)`
                         }}>
                      <span className="text-white text-lg font-bold relative z-10">LOOM</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full animate-[perfect-shimmer_6s_ease-in-out_infinite]" />
                    </div>
                    
                    <div className="flex space-x-4">
                      {['Home', 'Features', 'About'].map((item) => (
                        <button 
                          key={item}
                          className="px-5 py-3 text-white/80 hover:text-white rounded-xl text-sm transition-all duration-500 backdrop-blur relative group overflow-hidden magnetic-glow"
                          style={{ 
                            border: `1px solid hsla(var(--evolution-accent), 0.3)`,
                            background: `hsla(var(--evolution-accent), 0.12)`
                          }}
                        >
                          <span className="relative z-10">{item}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Styled content */}
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                      Welcome to Our Vision
                    </h3>
                    <p className="text-white/75 text-lg leading-relaxed">
                      Experience the evolution of design automation with our AI-powered creative intelligence.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-4 rounded-2xl shadow-xl text-white font-semibold transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
                              style={{ 
                                background: `linear-gradient(135deg, hsl(var(--evolution-refined)), hsl(var(--evolution-enhanced)))`,
                                boxShadow: `0 12px 32px hsla(var(--evolution-refined), 0.5)`
                              }}>
                        <span className="relative z-10">Begin Your Journey</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                      </button>
                      
                      <button className="px-6 py-4 border-2 rounded-2xl text-white backdrop-blur transition-all duration-500 hover:scale-105 relative group"
                              style={{ 
                                borderColor: `hsl(var(--evolution-refined) / 0.4)`,
                                background: `hsla(var(--evolution-refined), 0.08)`
                              }}>
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                      </button>
                    </div>
                  </div>

                  {/* Enhanced style indicators */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="h-16 rounded-2xl backdrop-blur border transition-all duration-600 cursor-pointer transform hover:scale-110 hover:rotate-1 relative overflow-hidden group"
                        style={{ 
                          background: `linear-gradient(135deg, hsla(var(--evolution-accent), 0.25), hsla(var(--evolution-refined), 0.15))`,
                          borderColor: `hsl(var(--evolution-accent) / 0.3)`,
                          boxShadow: `0 6px 20px hsla(var(--evolution-accent), 0.25)`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-800" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-white/70 font-light italic">
              "Style emerges from intention, beauty from purpose"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
