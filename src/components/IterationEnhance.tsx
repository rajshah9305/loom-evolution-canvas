
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
      { threshold: 0.2, rootMargin: "50px" }
    );

    const element = document.getElementById('enhance');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="enhance" className="min-h-screen flex items-center gradient-evolution-enhance relative overflow-hidden particle-field">
      {/* Advanced particle constellation */}
      <div className="absolute inset-0 will-change-transform">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40 will-change-transform gpu-accelerated"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              background: `radial-gradient(circle, hsla(var(--evolution-enhanced), 0.7), hsla(var(--evolution-sophisticated), 0.3))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `cosmic-drift ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(0.3px)',
              boxShadow: `0 0 ${12 + Math.random() * 20}px hsla(var(--evolution-enhanced), 0.5)`
            }}
          />
        ))}
      </div>

      {/* Sophisticated light architecture */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute will-change-transform"
            style={{
              width: '1px',
              height: '110%',
              background: `linear-gradient(180deg, 
                transparent 0%, 
                hsla(var(--evolution-enhanced), 0.6) 25%, 
                hsla(var(--evolution-sophisticated), 0.8) 50%, 
                hsla(var(--evolution-perfect), 0.6) 75%, 
                transparent 100%)`,
              left: `${8 + i * 10}%`,
              transform: `rotate(${-15 + i * 3}deg)`,
              animation: `perfect-shimmer ${12 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              filter: 'blur(0.6px)'
            }}
          />
        ))}
      </div>

      {/* Dynamic ambient layers */}
      <div className="absolute inset-0 will-change-opacity">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15"
             style={{ 
               background: `radial-gradient(circle, hsla(var(--evolution-enhanced), 0.4), transparent 70%)`,
               filter: 'blur(80px)',
               animation: 'transcendent-pulse 20s ease-in-out infinite'
             }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-12"
             style={{ 
               background: `radial-gradient(circle, hsla(var(--evolution-sophisticated), 0.5), transparent 70%)`,
               filter: 'blur(60px)',
               animation: 'transcendent-pulse 25s ease-in-out infinite reverse'
             }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1500 delay-400 will-change-transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-10">
              <div className="inline-block px-8 py-4 text-white text-sm rounded-2xl border border-white/30 backdrop-blur relative overflow-hidden"
                   style={{ 
                     background: `linear-gradient(135deg, hsla(var(--evolution-enhanced), 0.6), hsla(var(--evolution-sophisticated), 0.4))`,
                     boxShadow: `0 12px 40px hsla(var(--evolution-enhanced), 0.5)`
                   }}>
                <span className="relative z-10 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
                  <span className="font-medium">Iteration 3 • Enhancement</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full animate-[perfect-shimmer_5s_ease-in-out_infinite]" />
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight text-shadow-sophisticated">
                Weaving Intricate
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent">
                  Patterns
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic"
                 style={{ color: `hsl(var(--evolution-light))` }}>
                "Beyond the basics: where design meets dynamic interaction."
              </p>
              
              <p className="text-lg text-white/85 leading-relaxed max-w-xl">
                Complexity emerges with grace. Claude Sonnet 4 now interprets nuanced design language, 
                creating responsive ecosystems with sophisticated choreography. Every micro-interaction tells a story, 
                every transition serves the greater narrative of user experience.
              </p>
              
              <div className="space-y-8">
                <div className="text-sm text-white/60 font-mono tracking-wider uppercase">Sophisticated Input</div>
                <div className="glass-evolution-enhanced p-8 md:p-10 rounded-2xl border font-mono text-base text-white shadow-2xl relative overflow-hidden"
                     style={{ 
                       borderColor: `hsl(var(--evolution-enhanced) / 0.4)`,
                       boxShadow: `0 20px 60px hsla(var(--evolution-enhanced), 0.4)`
                     }}>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-purple-400 mt-1 animate-pulse flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-white/60 text-sm mb-3">$ loom enhance --dynamic --responsive</div>
                      <div className="break-words">"responsive hero with dynamic interactions and fluid animations"</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent transform -translate-x-full animate-[perfect-shimmer_6s_ease-in-out_infinite]" />
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-white/80">
                  <div className="flex space-x-2">
                    {['enhanced', 'sophisticated', 'perfect'].map((level, i) => (
                      <div 
                        key={level}
                        className="w-3 h-3 rounded-full animate-pulse" 
                        style={{ 
                          backgroundColor: `hsl(var(--evolution-${level}))`,
                          animationDelay: `${i * 0.25}s`,
                          boxShadow: `0 0 10px hsl(var(--evolution-${level}))`
                        }} 
                      />
                    ))}
                  </div>
                  <span>Orchestrating interactions...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1500 delay-600 will-change-transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Masterfully enhanced UI */}
            <div className="relative">
              {/* Enhanced aura effect */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                   style={{ 
                     background: `linear-gradient(135deg, hsl(var(--evolution-enhanced)), hsl(var(--evolution-sophisticated)))`,
                     transform: 'scale(1.15)',
                     animation: 'transcendent-pulse 18s ease-in-out infinite'
                   }} />
              
              <div className="relative glass-evolution-enhanced p-8 md:p-12 rounded-3xl shadow-2xl border border-white/35 overflow-hidden"
                   style={{ 
                     boxShadow: `0 25px 70px hsla(var(--evolution-enhanced), 0.5)`
                   }}>
                {/* Ambient background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-purple-500/6 rounded-3xl" />
                
                <div className="space-y-10 relative">
                  {/* Ultra-sophisticated header */}
                  <div className="flex justify-between items-center pb-8 border-b border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
                           style={{ 
                             background: `linear-gradient(135deg, hsl(var(--evolution-enhanced)), hsl(var(--evolution-sophisticated)), hsl(var(--evolution-perfect)))`,
                             animation: 'holographic-shift 5s ease-in-out infinite',
                             boxShadow: `0 0 25px hsla(var(--evolution-enhanced), 0.7)`
                           }}>
                        <span className="text-white font-bold text-2xl">L</span>
                      </div>
                      <span className="text-white font-bold text-2xl md:text-3xl">LOOM</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {['Home', 'Features', 'Pricing', 'About'].map((item, index) => (
                        <button 
                          key={item}
                          className="px-5 py-3 text-white/80 hover:text-white rounded-2xl text-sm transition-all duration-700 backdrop-blur relative group overflow-hidden"
                          style={{ 
                            border: `1px solid hsla(var(--evolution-enhanced), 0.3)`,
                            background: `hsla(var(--evolution-enhanced), 0.15)`,
                            animationDelay: `${index * 0.08}s`
                          }}
                        >
                          <span className="relative z-10">{item}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Premium hero showcase */}
                  <div className="text-center space-y-8">
                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent">
                      Create. Iterate. Perfect.
                    </h3>
                    <p className="text-white/80 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                      Transform your ideas into stunning interfaces with AI-powered design intelligence that evolves with your vision.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                      <button className="px-10 py-5 rounded-3xl shadow-2xl text-white font-bold transition-all duration-700 transform hover:scale-110 relative overflow-hidden group text-lg"
                              style={{ 
                                background: `linear-gradient(135deg, hsl(var(--evolution-enhanced)), hsl(var(--evolution-sophisticated)))`,
                                boxShadow: `0 16px 40px hsla(var(--evolution-enhanced), 0.6)`
                              }}>
                        <span className="relative z-10">Start Creating</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                      
                      <button className="px-8 py-5 border-2 rounded-3xl text-white backdrop-blur transition-all duration-700 hover:scale-110 relative group text-lg"
                              style={{ 
                                borderColor: `hsl(var(--evolution-sophisticated) / 0.4)`,
                                background: `hsla(var(--evolution-sophisticated), 0.12)`
                              }}>
                        <span className="relative z-10">Watch Demo</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                    </div>
                  </div>

                  {/* Interactive showcase grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="h-20 md:h-24 rounded-3xl backdrop-blur border transition-all duration-1000 cursor-pointer transform hover:scale-115 hover:rotate-2 relative overflow-hidden group"
                        style={{ 
                          background: `linear-gradient(135deg, hsla(var(--evolution-enhanced), 0.25), hsla(var(--evolution-sophisticated), 0.15))`,
                          borderColor: `hsl(var(--evolution-enhanced) / 0.3)`,
                          boxShadow: `0 8px 25px hsla(var(--evolution-enhanced), 0.3)`,
                          animation: `transcendent-pulse ${6 + i * 1.5}s ease-in-out infinite`,
                          animationDelay: `${i * 0.4}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center text-base text-white/80 font-light italic">
              "Interaction becomes an art form, complexity becomes intuitive"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
